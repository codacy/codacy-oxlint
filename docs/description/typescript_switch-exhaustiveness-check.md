# Switch Exhaustiveness Check (typescript)

**Pattern ID:** `typescript_switch-exhaustiveness-check`
**Plugin:** `typescript`

## What it does

This rule requires switch statements to be exhaustive when switching on union types.

## Why is this bad?

When switching on a union type, it's important to handle all possible cases to avoid runtime errors. TypeScript can help ensure exhaustiveness, but only if the switch statement is properly structured with a default case that TypeScript can analyze.

## Examples

Examples of incorrect code for this rule:
ts
`type Status = "pending" | "approved" | "rejected";
function handleStatus(status: Status) {
switch (status) {
case "pending":
return "Waiting for approval";
case "approved":
return "Request approved";
// Missing 'rejected' case
}
}
enum Color {
Red,
Green,
Blue,
}
function getColorName(color: Color) {
switch (color) {
case Color.Red:
return "red";
case Color.Green:
return "green";
// Missing Color.Blue case
}
}`
Examples of correct code for this rule:
ts
`type Status = "pending" | "approved" | "rejected";
function handleStatus(status: Status) {
switch (status) {
case "pending":
return "Waiting for approval";
case "approved":
return "Request approved";
case "rejected":
return "Request rejected";
}
}
// Or with default case for exhaustiveness checking
function handleStatusWithDefault(status: Status) {
switch (status) {
case "pending":
return "Waiting for approval";
case "approved":
return "Request approved";
case "rejected":
return "Request rejected";
default:
const _exhaustiveCheck: never = status;
return _exhaustiveCheck;
}
}
enum Color {
Red,
Green,
Blue,
}
function getColorName(color: Color) {
switch (color) {
case Color.Red:
return "red";
case Color.Green:
return "green";
case Color.Blue:
return "blue";
default:
const _exhaustiveCheck: never = color;
return _exhaustiveCheck;
}
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/switch-exhaustiveness-check": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/switch-exhaustiveness-check": "error",
},
});`bash
`oxlint --type-aware --deny typescript/switch-exhaustiveness-check`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/switch_exhaustiveness_check.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/switch-exhaustiveness-check/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/switch_exhaustiveness_check/switch_exhaustiveness_check.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/switch-exhaustiveness-check.html)
- [oxc project](https://github.com/oxc-project/oxc)