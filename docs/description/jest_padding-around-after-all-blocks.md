# Padding Around After All Blocks (jest)

**Pattern ID:** `jest_padding-around-after-all-blocks`
**Plugin:** `jest`

## What it does

This rule enforces a line of padding before and after 1 or more `afterAll` statements.

## Why is this bad?

Inconsistent formatting of code can make the code more difficult to read and follow. This rule helps ensure that `afterAll` blocks are visually separated from the rest of the code, making them easier to identify while looking through test files.

## Examples

Examples of incorrect code for this rule:
js
`const thing = 123;
afterAll(() => {});`
Examples of correct code for this rule:
js
`const thing = 123;
afterAll(() => {});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/padding-around-after-all-blocks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/padding-around-after-all-blocks": "error",
},
});`bash
`oxlint --deny jest/padding-around-after-all-blocks --jest-plugin`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/padding_around_after_all_blocks.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-after-all-blocks.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fpadding-around-after-all-blocks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/padding-around-after-all-blocks.html)
- [oxc project](https://github.com/oxc-project/oxc)