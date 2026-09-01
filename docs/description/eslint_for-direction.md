# For Direction (eslint)

**Pattern ID:** `eslint_for-direction`
**Plugin:** `eslint`

## What it does

Disallow `for` loops where the update clause moves the counter in the wrong direction, preventing the loop from reaching its stop condition.

## Why is this bad?

A `for` loop with a stop condition that can never be reached will run infinitely. While infinite loops can be intentional, they are usually written as `while` loops. More often, an infinite `for` loop is a bug.

## Examples

Examples of incorrect code for this rule:
js
`/* for-direction: "error" */
for (var i = 0; i < 10; i--) {}
for (var i = 10; i >= 0; i++) {}
for (var i = 0; i > 10; i++) {}
for (var i = 0; 10 > i; i--) {}
const n = -2;
for (let i = 0; i < 10; i += n) {}`
Examples of correct code for this rule:
js
`/* for-direction: "error" */
for (var i = 0; i < 10; i++) {}
for (var i = 0; 10 > i; i++) {
// with counter "i" on the right
}
for (let i = 10; i >= 0; i += this.step) {
// direction unknown
}
for (let i = MIN; i <= MAX; i -= 0) {
// not increasing or decreasing
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"for-direction": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"for-direction": "error",
},
});`bash
`oxlint --deny for-direction`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/for_direction.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/for-direction)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Ffor-direction)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/for-direction.html)
- [oxc project](https://github.com/oxc-project/oxc)