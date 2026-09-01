# No Useless Length Check (unicorn)

**Pattern ID:** `unicorn_no-useless-length-check`
**Plugin:** `unicorn`

## What it does

It checks for an unnecessary array length check in a logical expression.
The cases are:
- `array.length === 0 || array.every(Boolean)` (`array.every` returns `true` if array is has elements)
- `array.length > 0 && array.some(Boolean)` (`array.some` returns `false` if array is empty)

## Why is this bad?

An extra unnecessary length check is done.

## Examples

Examples of incorrect code for this rule:
javascript
`if (array.length === 0 || array.every(Boolean)) {
// do something!
}`
Examples of correct code for this rule:
javascript
`if (array.every(Boolean)) {
// do something!
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-useless-length-check": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-useless-length-check": "error",
},
});`bash
`oxlint --deny unicorn/no-useless-length-check`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_useless_length_check.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-useless-length-check)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-length-check.html)
- [oxc project](https://github.com/oxc-project/oxc)