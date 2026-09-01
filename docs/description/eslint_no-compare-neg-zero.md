# No Compare Neg Zero (eslint)

**Pattern ID:** `eslint_no-compare-neg-zero`
**Plugin:** `eslint`

## What it does

Disallow comparing against `-0`

## Why is this bad?

The rule should warn against code that tries to compare against `-0`, since that will not work as intended. That is, code like `x === -0` will pass for both `+0` and `-0`. The author probably intended `Object.is(x, -0)`.

## Examples

Examples of incorrect code for this rule:
javascript
`if (x === -0) {
// doSomething()...
}`javascript
`if (-0 > x) {
// doSomething()...
}`
Examples of correct code for this rule:
javascript
`if (x === 0) {
// doSomething()...
}`javascript
`if (Object.is(x, -0)) {
// doSomething()...
}`javascript
`if (0 > x) {
// doSomething()...
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-compare-neg-zero": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-compare-neg-zero": "error",
},
});`bash
`oxlint --deny no-compare-neg-zero`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_compare_neg_zero.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-compare-neg-zero)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-compare-neg-zero)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.html)
- [oxc project](https://github.com/oxc-project/oxc)