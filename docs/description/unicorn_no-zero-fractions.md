# No Zero Fractions (unicorn)

**Pattern ID:** `unicorn_no-zero-fractions`
**Plugin:** `unicorn`

## What it does

Prevents the use of zero fractions.

## Why is this bad?

There is no difference in JavaScript between, for example, `1`, `1.0` and `1.`, so prefer the former for consistency and brevity.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = 1.0;
const foo = -1.0;
const foo = 123_456.000_000;`
Examples of correct code for this rule:
javascript
`const foo = 1;
const foo = -1;
const foo = 123456;
const foo = 1.1;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-zero-fractions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-zero-fractions": "error",
},
});`bash
`oxlint --deny unicorn/no-zero-fractions`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_zero_fractions.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-zero-fractions)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-zero-fractions.html)
- [oxc project](https://github.com/oxc-project/oxc)