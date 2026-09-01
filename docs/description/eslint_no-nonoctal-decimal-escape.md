# No Nonoctal Decimal Escape (eslint)

**Pattern ID:** `eslint_no-nonoctal-decimal-escape`
**Plugin:** `eslint`

## What it does

Disallow `\8` and `\9` escape sequences in string literals.

## Why is this bad?

ECMAScript specification treats `\8` and `\9` in string literals as a legacy feature

## Examples

Examples of incorrect code for this rule:
javascript
`let x = "\8";
let y = "\9";`
Examples of correct code for this rule:
javascript
`let x = "8";
let y = "\\9";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-nonoctal-decimal-escape": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-nonoctal-decimal-escape": "error",
},
});`bash
`oxlint --deny no-nonoctal-decimal-escape`

## Version

This rule was added in v0.2.10.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_nonoctal_decimal_escape.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-nonoctal-decimal-escape)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.html)
- [oxc project](https://github.com/oxc-project/oxc)