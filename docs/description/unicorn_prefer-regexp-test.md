# Prefer Regexp Test (unicorn)

**Pattern ID:** `unicorn_prefer-regexp-test`
**Plugin:** `unicorn`

## What it does

Prefers `RegExp#test()` over `String#match()` and `String#exec()`.

## Why is this bad?

When you want to know whether a pattern is found in a string, use `RegExp#test()` instead of `String#match()` or `RegExp#exec()`, as it exclusively returns a boolean and therefore is more efficient.

## Examples

Examples of incorrect code for this rule:
javascript
`if (string.match(/unicorn/)) {
}
if (/unicorn/.exec(string)) {
}`
Examples of correct code for this rule:
javascript
`if (/unicorn/.test(string)) {
}
Boolean(string.match(/unicorn/));`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-regexp-test": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-regexp-test": "error",
},
});`bash
`oxlint --deny unicorn/prefer-regexp-test`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_regexp_test.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-regexp-test)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-regexp-test.html)
- [oxc project](https://github.com/oxc-project/oxc)