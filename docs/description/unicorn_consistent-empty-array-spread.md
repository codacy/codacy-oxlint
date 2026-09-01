# Consistent Empty Array Spread (unicorn)

**Pattern ID:** `unicorn_consistent-empty-array-spread`
**Plugin:** `unicorn`

## What it does

When spreading a ternary in an array, we can use both `[]` and `''` as fallbacks, but it's better to have consistent types in both branches.

## Why is this bad?

Having consistent types in both branches makes the code easier to read and understand.

## Examples

Examples of incorrect code for this rule:
javascript
`const array = [a, ...(foo ? [b, c] : "")];
const array = [a, ...(foo ? "bc" : [])];`
Examples of correct code for this rule:
javascript
`const array = [a, ...(foo ? [b, c] : [])];
const array = [a, ...(foo ? "bc" : "")];`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/consistent-empty-array-spread": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/consistent-empty-array-spread": "error",
},
});`bash
`oxlint --deny unicorn/consistent-empty-array-spread`

## Version

This rule was added in v0.10.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/consistent_empty_array_spread.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-empty-array-spread.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fconsistent-empty-array-spread)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-empty-array-spread.html)
- [oxc project](https://github.com/oxc-project/oxc)