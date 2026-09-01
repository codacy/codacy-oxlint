# Prefer Logical Operator Over Ternary (unicorn)

**Pattern ID:** `unicorn_prefer-logical-operator-over-ternary`
**Plugin:** `unicorn`

## What it does

This rule finds ternary expressions that can be simplified to a logical operator.

## Why is this bad?

Using a logical operator is shorter and simpler than a ternary expression.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = bar ? bar : baz;
console.log(foo ? foo : bar);`
Examples of correct code for this rule:
javascript
`const foo = bar || baz;
console.log(foo ?? bar);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-logical-operator-over-ternary": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-logical-operator-over-ternary": "error",
},
});`bash
`oxlint --deny unicorn/prefer-logical-operator-over-ternary`

## Version

This rule was added in v0.0.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_logical_operator_over_ternary.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-logical-operator-over-ternary)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-logical-operator-over-ternary.html)
- [oxc project](https://github.com/oxc-project/oxc)