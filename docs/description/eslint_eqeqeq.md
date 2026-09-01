# Eqeqeq (eslint)

**Pattern ID:** `eslint_eqeqeq`
**Plugin:** `eslint`

## What it does

Requires the use of the `===` and `!==` operators, disallowing the use of `==` and `!=`.

## Why is this bad?

Using non-strict equality operators leads to unexpected behavior due to type coercion, which can cause hard-to-find bugs.

## Examples

Example JSON configuration:
json
`{
"eqeqeq": ["error", "always", { "null": "ignore" }]
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"eqeqeq": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"eqeqeq": "error",
},
});`bash
`oxlint --deny eqeqeq`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/eqeqeq.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/eqeqeq)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Feqeqeq)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/eqeqeq.html)
- [oxc project](https://github.com/oxc-project/oxc)