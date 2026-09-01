# Use Isnan (eslint)

**Pattern ID:** `eslint_use-isnan`
**Plugin:** `eslint`

## What it does

Disallows checking against `NaN` without using `isNaN()` call.

## Why is this bad?

In JavaScript, `NaN` is a special value of the Number type. It’s used to represent any of the “not-a-number” values represented by the double-precision 64-bit format as specified by the IEEE Standard for Binary Floating-Point Arithmetic.
Because `NaN` is unique in JavaScript by not being equal to anything, including itself, the results of comparisons to `NaN` are confusing:
- `NaN === NaN` or `NaN == NaN` evaluate to false
- `NaN !== NaN` or `NaN != NaN` evaluate to true
Therefore, use `Number.isNaN()` or global `isNaN()` functions to test whether a value is `NaN`.

## Examples

Examples of incorrect code for this rule:
javascript
`foo == NaN;
foo === NaN;
foo <= NaN;
foo > NaN;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"use-isnan": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"use-isnan": "error",
},
});`bash
`oxlint --deny use-isnan`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/use_isnan.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/use-isnan)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fuse-isnan)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/use-isnan.html)
- [oxc project](https://github.com/oxc-project/oxc)