# Prefer Exponentiation Operator (eslint)

**Pattern ID:** `eslint_prefer-exponentiation-operator`
**Plugin:** `eslint`

## What it does

Disallow the use of `Math.pow` in favor of the `**` operator.

## Why is this bad?

Introduced in ES2016, the infix exponentiation operator `**` is an alternative for the standard `Math.pow` function. Infix notation is considered to be more readable and thus more preferable than the function notation.

## Examples

Examples of incorrect code for this rule:
javascript
`Math.pow(a, b);`
Examples of correct code for this rule:
javascript
`a ** b;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-exponentiation-operator": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-exponentiation-operator": "error",
},
});`bash
`oxlint --deny prefer-exponentiation-operator`

## Version

This rule was added in v0.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_exponentiation_operator.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-exponentiation-operator)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator.html)
- [oxc project](https://github.com/oxc-project/oxc)