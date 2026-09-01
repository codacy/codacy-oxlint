# No Lone Blocks (eslint)

**Pattern ID:** `eslint_no-lone-blocks`
**Plugin:** `eslint`

## What it does

Disallows unnecessary standalone block statements.

## Why is this bad?

Standalone blocks can be confusing as they do not provide any meaningful purpose when used unnecessarily. They may introduce extra nesting, reducing code readability, and can mislead readers about scope or intent.

## Examples

Examples of incorrect code for this rule:
js
`{
var x = 1;
}`
Examples of correct code for this rule:
js
`if (condition) {
var x = 1;
}
{
let x = 1; // Used to create a valid block scope.
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-lone-blocks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-lone-blocks": "error",
},
});`bash
`oxlint --deny no-lone-blocks`

## Version

This rule was added in v0.15.6.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_lone_blocks.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-lone-blocks)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-lone-blocks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lone-blocks.html)
- [oxc project](https://github.com/oxc-project/oxc)