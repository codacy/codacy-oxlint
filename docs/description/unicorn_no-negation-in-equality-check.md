# No Negation In Equality Check (unicorn)

**Pattern ID:** `unicorn_no-negation-in-equality-check`
**Plugin:** `unicorn`

## What it does

Disallow negated expressions on the left of (in)equality checks.

## Why is this bad?

A negated expression on the left of an (in)equality check is likely a mistake from trying to negate the whole condition.

## Examples

Examples of incorrect code for this rule:
javascript
`if (!foo === bar) {
}
if (!foo !== bar) {
}`
Examples of correct code for this rule:
javascript
`if (foo !== bar) {
}
if (!(foo === bar)) {
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-negation-in-equality-check": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-negation-in-equality-check": "error",
},
});`bash
`oxlint --deny unicorn/no-negation-in-equality-check`

## Version

This rule was added in v0.5.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_negation_in_equality_check.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negation-in-equality-check.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-negation-in-equality-check)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-negation-in-equality-check.html)
- [oxc project](https://github.com/oxc-project/oxc)