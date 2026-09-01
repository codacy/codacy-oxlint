# Prefer Math Trunc (unicorn)

**Pattern ID:** `unicorn_prefer-math-trunc`
**Plugin:** `unicorn`

## What it does

Prefers use of `Math.trunc()` instead of bitwise operations for clarity and more reliable results.
It prevents the use of the following bitwise operations:
- `x | 0` (`bitwise OR` with 0)
- `~~x` (two `bitwise NOT`)
- `x >> 0` (`Signed Right Shift` with 0)
- `x << 0` (`Left Shift` with 0)
- `x ^ 0` (`bitwise XOR Shift` with 0)

## Why is this bad?

Using bitwise operations to truncate numbers is not clear and do not work in [some cases](https://stackoverflow.com/a/34706108/11687747).

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = 1.1 | 0;`
Examples of correct code for this rule:
javascript
`const foo = Math.trunc(1.1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-math-trunc": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-math-trunc": "error",
},
});`bash
`oxlint --deny unicorn/prefer-math-trunc`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_math_trunc.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-math-trunc)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-trunc.html)
- [oxc project](https://github.com/oxc-project/oxc)