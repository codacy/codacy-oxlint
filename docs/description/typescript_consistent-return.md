# Consistent Return (typescript)

**Pattern ID:** `typescript_consistent-return`
**Plugin:** `typescript`

## What it does

Enforce consistent return behavior in functions.

## Why is this bad?

Mixing value-returning and non-value-returning code paths makes control flow harder to reason about and frequently indicates a bug.
WARNING
If possible, prefer TypeScript's `noImplicitReturns` compiler option over this rule. `noImplicitReturns` uses TypeScript's type information and control-flow analysis, so it can catch more implicit return paths than this rule.

## Examples

Examples of incorrect code for this rule:
ts
`function maybe(flag: boolean): number {
if (flag) {
return 1;
}
return;
}`
Examples of correct code for this rule:
ts
`function maybe(flag: boolean): number {
if (flag) {
return 1;
}
return 0;
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
"typescript/consistent-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/consistent-return": "error",
},
});`bash
`oxlint --type-aware --deny typescript/consistent-return`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/consistent_return.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/consistent-return/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/consistent_return/consistent_return.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-return.html)
- [oxc project](https://github.com/oxc-project/oxc)