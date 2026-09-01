# No Redeclare (eslint)

**Pattern ID:** `eslint_no-redeclare`
**Plugin:** `eslint`

## What it does

This rule disallows redeclaring variables within the same scope, ensuring that each variable is declared only once. It helps avoid confusion and unintended behavior in code.

## Why is this bad?

Redeclaring variables in the same scope can lead to unexpected behavior, overwriting existing values, and making the code harder to understand and maintain.

## Examples

Examples of incorrect code for this rule:
javascript
`var a = 3;
var a = 10;`
Examples of correct code for this rule:
javascript
`var a = 3;
a = 10;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-redeclare": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-redeclare": "error",
},
});`bash
`oxlint --deny no-redeclare`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_redeclare.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-redeclare)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-redeclare)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-redeclare.html)
- [oxc project](https://github.com/oxc-project/oxc)