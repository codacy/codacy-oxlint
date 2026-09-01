# Prefer Numeric Literals (eslint)

**Pattern ID:** `eslint_prefer-numeric-literals`
**Plugin:** `eslint`

## What it does

Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.

## Why is this bad?

The `parseInt()` and `Number.parseInt()` functions can be used to turn binary, octal, and hexadecimal strings into integers. As binary, octal, and hexadecimal literals are supported in ES2015, this rule encourages use of those numeric literals instead of `parseInt()` or `Number.parseInt()`.

## Examples

Examples of incorrect code for this rule:
javascript
`parseInt("111110111", 2) === 503;
parseInt(`111110111`, 2) === 503;
parseInt("767", 8) === 503;
parseInt("1F7", 16) === 503;
Number.parseInt("111110111", 2) === 503;
Number.parseInt("767", 8) === 503;
Number.parseInt("1F7", 16) === 503;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-numeric-literals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-numeric-literals": "error",
},
});`bash
`oxlint --deny prefer-numeric-literals`

## Version

This rule was added in v0.7.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_numeric_literals.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-numeric-literals)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-numeric-literals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-numeric-literals.html)
- [oxc project](https://github.com/oxc-project/oxc)