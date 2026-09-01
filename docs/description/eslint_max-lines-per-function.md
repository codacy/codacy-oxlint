# Max Lines Per Function (eslint)

**Pattern ID:** `eslint_max-lines-per-function`
**Plugin:** `eslint`

## What it does

Enforce a maximum number of lines of code in a function. This rule ensures that functions do not exceed a specified line count, promoting smaller, more focused functions that are easier to maintain and understand.

## Why is this bad?

Some people consider large functions a code smell. Large functions tend to do a lot of things and can make it hard to follow what’s going on. Many coding style guides dictate a limit to the number of lines that a function can comprise of. This rule can help enforce that style.

## Examples

Examples of incorrect code for this rule with a particular max value:
js
`/* { "eslint/max-lines-per-function": ["error", 2] } */
function foo() {
const x = 0;
}
/* { "eslint/max-lines-per-function": ["error", 4] } */
function foo() {
// a comment followed by a blank line
const x = 0;
}`
Examples of correct code for this rule with a particular max value:
js
`/* { "eslint/max-lines-per-function": ["error", 3] } */
function foo() {
const x = 0;
}
/* { "eslint/max-lines-per-function": ["error", 5] } */
function foo() {
// a comment followed by a blank line
const x = 0;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"max-lines-per-function": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"max-lines-per-function": "error",
},
});`bash
`oxlint --deny max-lines-per-function`

## Version

This rule was added in v0.15.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/max_lines_per_function.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/max-lines-per-function)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fmax-lines-per-function)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines-per-function.html)
- [oxc project](https://github.com/oxc-project/oxc)