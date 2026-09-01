# Prefer String Raw (unicorn)

**Pattern ID:** `unicorn_prefer-string-raw`
**Plugin:** `unicorn`

## What it does

Prefers use of `String.raw` to avoid escaping `\`.

## Why is this bad?

Excessive backslashes can make string values less readable which can be avoided by using `String.raw`.

## Examples

Examples of incorrect code for this rule:
javascript
`const file = "C:\\windows\\style\\path\\to\\file.js";
const regexp = new RegExp("foo\\.bar");`
Examples of correct code for this rule:
javascript
`const file = String.raw`C:\windows\style\path\to\file.js`;
const regexp = new RegExp(String.raw`foo\.bar`);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-string-raw": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-string-raw": "error",
},
});`bash
`oxlint --deny unicorn/prefer-string-raw`

## Version

This rule was added in v0.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_string_raw.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-raw.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-string-raw)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-raw.html)
- [oxc project](https://github.com/oxc-project/oxc)