# No Array Reduce (unicorn)

**Pattern ID:** `unicorn_no-array-reduce`
**Plugin:** `unicorn`

## What it does

Disallow `Array#reduce()` and `Array#reduceRight()`.

## Why is this bad?

`Array#reduce()` and `Array#reduceRight()` usually result in [hard-to-read](https://twitter.com/jaffathecake/status/1213077702300852224) and [less performant](https://www.richsnapp.com/article/2019/06-09-reduce-spread-anti-pattern) code. In almost every case, it can be replaced by `.map`, `.filter`, or a `for-of` loop.
It's only somewhat useful in the rare case of summing up numbers, which is allowed by default.

## Examples

Examples of incorrect code for this rule:
javascript
`array.reduce(reducer, initialValue);
array.reduceRight(reducer, initialValue);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-array-reduce": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-array-reduce": "error",
},
});`bash
`oxlint --deny unicorn/no-array-reduce`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_array_reduce.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-array-reduce)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reduce.html)
- [oxc project](https://github.com/oxc-project/oxc)