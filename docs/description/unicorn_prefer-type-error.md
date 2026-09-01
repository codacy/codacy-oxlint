# Prefer Type Error (unicorn)

**Pattern ID:** `unicorn_prefer-type-error`
**Plugin:** `unicorn`

## What it does

Enforce throwing a `TypeError` instead of a generic `Error` after a type checking if-statement.

## Why is this bad?

Throwing a `TypeError` instead of a generic `Error` after a type checking if-statement is more specific and helps to catch bugs.

## Examples

Examples of incorrect code for this rule:
javascript
`if (Array.isArray(foo)) {
throw new Error("Expected foo to be an array");
}`
Examples of correct code for this rule:
javascript
`if (Array.isArray(foo)) {
throw new TypeError("Expected foo to be an array");
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-type-error": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-type-error": "error",
},
});`bash
`oxlint --deny unicorn/prefer-type-error`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_type_error.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-type-error)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-type-error.html)
- [oxc project](https://github.com/oxc-project/oxc)