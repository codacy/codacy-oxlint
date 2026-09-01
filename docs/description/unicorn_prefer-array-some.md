# Prefer Array Some (unicorn)

**Pattern ID:** `unicorn_prefer-array-some`
**Plugin:** `unicorn`

## What it does

Prefers using `Array#some()` over `Array#find()`, `Array#findLast()` with comparing to `undefined`, or `Array#findIndex()`, `Array#findLastIndex()` and a non-zero length check on the result of `Array#filter()`

## Why is this bad?

Using `.some()` is more idiomatic and easier to read.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = array.find(fn) ? bar : baz;
const foo = array.findLast((elem) => hasRole(elem)) !== null;
foo.findIndex(bar) < 0;
foo.findIndex((element) => element.bar === 1) !== -1;
foo.findLastIndex((element) => element.bar === 1) !== -1;
array.filter(fn).length === 0;`
Examples of correct code for this rule:
javascript
`const foo = array.some(fn) ? bar : baz;
foo.some((element) => element.bar === 1);
!array.some(fn);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-array-some": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-array-some": "error",
},
});`bash
`oxlint --deny unicorn/prefer-array-some`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_array_some.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-array-some)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-some.html)
- [oxc project](https://github.com/oxc-project/oxc)