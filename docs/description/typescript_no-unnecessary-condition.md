# No Unnecessary Condition (typescript)

**Pattern ID:** `typescript_no-unnecessary-condition`
**Plugin:** `typescript`

## What it does

Disallow conditions that are always truthy, always falsy, or always nullish based on TypeScript's type information.

## Why is this bad?

Conditions with no possible runtime variation make code harder to read and can hide logic errors. They often leave dead branches and suggest that the declared types do not match the intended behavior.

## Examples

Examples of incorrect code for this rule:
ts
`declare const value: null;
if (value) {
doWork();
}
const items: string[] = [];
if (items) {
doWork();
}
declare const status: "ready";
if (!status) {
reportError();
}`
Examples of correct code for this rule:
ts
`declare const maybeUser: User | undefined;
if (maybeUser) {
doWork(maybeUser);
}
const items: string[] = [];
if (items.length > 0) {
doWork();
}
declare const status: "ready" | "";
if (!status) {
reportError();
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
"typescript/no-unnecessary-condition": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unnecessary-condition": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unnecessary-condition`

## Version

This rule was added in v1.48.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unnecessary_condition.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unnecessary-condition/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unnecessary_condition/no_unnecessary_condition.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-condition.html)
- [oxc project](https://github.com/oxc-project/oxc)