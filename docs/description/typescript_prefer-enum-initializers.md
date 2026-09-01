# Prefer Enum Initializers (typescript)

**Pattern ID:** `typescript_prefer-enum-initializers`
**Plugin:** `typescript`

## What it does

Require each enum member value to be explicitly initialized.

## Why is this bad?

In projects where the value of `enum` members are important, allowing implicit values for enums can cause bugs if enums are modified over time.

## Examples

Examples of incorrect code for this rule:
typescript
`// wrong, the value of `Close` is not constant
enum Status {
Open = 1,
Close,
}`
Examples of correct code for this rule:
typescript
`enum Status {
Open = 1,
Close = 2,
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/prefer-enum-initializers": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/prefer-enum-initializers": "error",
},
});`bash
`oxlint --deny typescript/prefer-enum-initializers`

## Version

This rule was added in v0.3.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_enum_initializers.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-enum-initializers/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fprefer-enum-initializers)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.html)
- [oxc project](https://github.com/oxc-project/oxc)