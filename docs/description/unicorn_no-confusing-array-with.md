# No Confusing Array With (unicorn)

**Pattern ID:** `unicorn_no-confusing-array-with`
**Plugin:** `unicorn`

## What it does

Disallows confusing uses of `Array#with()`.

## Why is this bad?

`Array#with()` treats a negative index as an offset from the end of the array, unlike methods such as `slice()` or `splice()`. Using a negative static index is usually a mistake. Using `.length` as the index always produces `undefined`, since valid indices are `0 .. length - 1`.

## Examples

Examples of incorrect code for this rule:
javascript
`array.with(-1, value);
array.with(array.length, value);`
Examples of correct code for this rule:
javascript
`array.with(array.length - 1, value);
array.with(index, value);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-confusing-array-with": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-confusing-array-with": "error",
},
});`bash
`oxlint --deny unicorn/no-confusing-array-with`

## Version

This rule was added in v1.73.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_confusing_array_with.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-confusing-array-with.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-confusing-array-with)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-confusing-array-with.html)
- [oxc project](https://github.com/oxc-project/oxc)