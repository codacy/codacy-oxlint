# No Bitwise (eslint)

**Pattern ID:** `eslint_no-bitwise`
**Plugin:** `eslint`

## What it does

Disallow bitwise operators.

## Why is this bad?

The use of bitwise operators in JavaScript is very rare and often `&` or `|` is simply a mistyped `&&` or `||`, which will lead to unexpected behavior.

## Examples

Examples of incorrect code for this rule:
javascript
`var x = y | z;`javascript
`var x = y ^ z;`javascript
`var x = y >> z;`
Examples of correct code for this rule:
javascript
`var x = y || z;`javascript
`var x = y && z;`javascript
`var x = y > z;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-bitwise": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-bitwise": "error",
},
});`bash
`oxlint --deny no-bitwise`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_bitwise.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-bitwise)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-bitwise)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-bitwise.html)
- [oxc project](https://github.com/oxc-project/oxc)