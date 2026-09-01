# No Unnecessary Array Splice Count (unicorn)

**Pattern ID:** `unicorn_no-unnecessary-array-splice-count`
**Plugin:** `unicorn`

## What it does

Disallows passing `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#splice()` or `Array#toSpliced()`.

## Why is this bad?

When calling `Array#splice(start, deleteCount)` or `Array#toSpliced(start, skipCount)`, omitting the `deleteCount` or `skipCount` argument will delete or skip all elements after `start`. Using `.length` or `Infinity` is unnecessary and makes the code more verbose.

## Examples

Examples of incorrect code for this rule:
js
`array.splice(1, array.length);
array.splice(1, Infinity);
array.splice(1, Number.POSITIVE_INFINITY);
array.toSpliced(1, array.length);`
Examples of correct code for this rule:
js
`array.splice(1);
array.toSpliced(1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-unnecessary-array-splice-count": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-unnecessary-array-splice-count": "error",
},
});`bash
`oxlint --deny unicorn/no-unnecessary-array-splice-count`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_unnecessary_array_splice_count.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-splice-count.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-unnecessary-array-splice-count)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-splice-count.html)
- [oxc project](https://github.com/oxc-project/oxc)