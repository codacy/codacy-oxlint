# Prefer Readonly (typescript)

**Pattern ID:** `typescript_prefer-readonly`
**Plugin:** `typescript`

## What it does

Require class members that are never reassigned to be marked `readonly`.

## Why is this bad?

Members that never change should be declared `readonly` to make class invariants explicit and prevent accidental mutation.

## Examples

Examples of incorrect code for this rule:
ts
`class Counter {
private value = 0;
getValue() {
return this.value;
}
}`
Examples of correct code for this rule:
ts
`class Counter {
private readonly value = 0;
getValue() {
return this.value;
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
"typescript/prefer-readonly": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/prefer-readonly": "error",
},
});`bash
`oxlint --type-aware --deny typescript/prefer-readonly`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_readonly.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-readonly/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/prefer_readonly/prefer_readonly.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-readonly.html)
- [oxc project](https://github.com/oxc-project/oxc)