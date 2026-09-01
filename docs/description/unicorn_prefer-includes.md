# Prefer Includes (unicorn)

**Pattern ID:** `unicorn_prefer-includes`
**Plugin:** `unicorn`

## What it does

Prefer `includes()` over `indexOf()` when checking for existence/non-existence. All built-ins have `.includes()` in addition to `.indexOf()`.

## Why is this bad?

The `.includes()` method is more readable and less error-prone than `.indexOf()`.

## Examples

Examples of incorrect code for this rule:
javascript
`if (str.indexOf("foo") !== -1) {
}`
Examples of correct code for this rule:
javascript
`if (str.includes("foo")) {
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-includes": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-includes": "error",
},
});`bash
`oxlint --deny unicorn/prefer-includes`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_includes.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-includes)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-includes.html)
- [oxc project](https://github.com/oxc-project/oxc)