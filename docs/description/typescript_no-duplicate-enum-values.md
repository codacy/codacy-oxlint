# No Duplicate Enum Values (typescript)

**Pattern ID:** `typescript_no-duplicate-enum-values`
**Plugin:** `typescript`

## What it does

Disallow duplicate enum member values.

## Why is this bad?

Although TypeScript supports duplicate enum member values, people usually expect members to have unique values within the same enum. Duplicate values can lead to bugs that are hard to track down.

## Examples

This rule disallows defining an enum with multiple members initialized to the same value. Members without initializers will not be checked.
Example of incorrect code:
ts
`enum E {
A = 0,
B = 0,
}`ts
`enum E {
A = "A",
B = "A",
}`
Example of correct code:
ts
`enum E {
A = 0,
B = 1,
}`ts
`enum E {
A = "A",
B = "B",
}`ts
`enum E {
A,
B,
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-duplicate-enum-values": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-duplicate-enum-values": "error",
},
});`bash
`oxlint --deny typescript/no-duplicate-enum-values`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_duplicate_enum_values.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-duplicate-enum-values/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-duplicate-enum-values)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.html)
- [oxc project](https://github.com/oxc-project/oxc)