# Prefer Array Index Of (unicorn)

**Pattern ID:** `unicorn_prefer-array-index-of`
**Plugin:** `unicorn`

## What it does

Enforces using `indexOf` or `lastIndexOf` instead of `findIndex` or `findLastIndex` when the callback is a simple strict equality comparison.

## Why is this bad?

Using `findIndex(x => x === value)` is unnecessarily verbose when `indexOf(value)` accomplishes the same thing more concisely and clearly. It also avoids the overhead of creating a callback function.

## Examples

Examples of incorrect code for this rule:
js
`values.findIndex((x) => x === "foo");
values.findLastIndex((x) => x === "bar");`
Examples of correct code for this rule:
js
`values.indexOf("foo");
values.lastIndexOf("bar");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-array-index-of": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-array-index-of": "error",
},
});`bash
`oxlint --deny unicorn/prefer-array-index-of`

## Version

This rule was added in v0.16.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_array_index_of.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-array-index-of)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-index-of.html)
- [oxc project](https://github.com/oxc-project/oxc)