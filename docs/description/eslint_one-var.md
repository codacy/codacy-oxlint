# One Var (eslint)

**Pattern ID:** `eslint_one-var`
**Plugin:** `eslint`

## What it does

Enforces variables to be declared either together or separately.

## Why is this bad?

Consistent declaration grouping makes variable lifetimes and initialization patterns easier to scan. This rule can require one declaration per scope, one declarator per statement, or grouping only consecutive declarations.

## Examples

Examples of incorrect code for this rule:
js
`var foo = 1;
var bar = 2;`
Examples of correct code for this rule:
js
`var foo = 1,
bar = 2;`

## Configuration

Enforces consistent grouping of variable declarations.
type: `object`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"one-var": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"one-var": "error",
},
});`bash
`oxlint --deny one-var`

## Version

This rule was added in v1.78.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/one_var.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/one-var)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fone-var)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/one-var.html)
- [oxc project](https://github.com/oxc-project/oxc)