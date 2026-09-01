# No Mixed Enums (typescript)

**Pattern ID:** `typescript_no-mixed-enums`
**Plugin:** `typescript`

## What it does

This rule disallows enums from having both string and numeric members.

## Why is this bad?

TypeScript enums can have string, numeric, or computed members. Having mixed string and numeric members in the same enum can lead to confusion and unexpected runtime behavior due to how TypeScript compiles enums.

## Examples

Examples of incorrect code for this rule:
ts
`enum Status {
Open = 1,
Closed = "closed",
}
enum Direction {
Up = "up",
Down = 2,
Left = "left",
Right = 4,
}`
Examples of correct code for this rule:
ts
`// All numeric
enum Status {
Open = 1,
Closed = 2,
}
// All string
enum Direction {
Up = "up",
Down = "down",
Left = "left",
Right = "right",
}
// Auto-incremented numeric
enum Color {
Red,
Green,
Blue,
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-mixed-enums": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-mixed-enums": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-mixed-enums`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_mixed_enums.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-mixed-enums/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_mixed_enums/no_mixed_enums.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-mixed-enums.html)
- [oxc project](https://github.com/oxc-project/oxc)