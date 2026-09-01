# Prefer Code Point (unicorn)

**Pattern ID:** `unicorn_prefer-code-point`
**Plugin:** `unicorn`

## What it does

Prefer usage of `String#codePointAt` over `String#charCodeAt`. Prefer usage of `String.fromCodePoint` over `String.fromCharCode`.

## Why is this bad?

Unicode is better supported in `String#codePointAt()` and `String.fromCodePoint()`.
Difference between `String.fromCodePoint()` and `String.fromCharCode()`

## Examples

Examples of incorrect code for this rule:
javascript
`"🦄".charCodeAt(0);
String.fromCharCode(0x1f984);`
Examples of correct code for this rule:
javascript
`"🦄".codePointAt(0);
String.fromCodePoint(0x1f984);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-code-point": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-code-point": "error",
},
});`bash
`oxlint --deny unicorn/prefer-code-point`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_code_point.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-code-point)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-code-point.html)
- [oxc project](https://github.com/oxc-project/oxc)