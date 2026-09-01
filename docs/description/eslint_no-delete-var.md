# No Delete Var (eslint)

**Pattern ID:** `eslint_no-delete-var`
**Plugin:** `eslint`

## What it does

The purpose of the `delete` operator is to remove a property from an object.

## Why is this bad?

Using the `delete` operator on a variable might lead to unexpected behavior.

## Examples

Examples of incorrect code for this rule:
javascript
`var x;
delete x;`
Examples of correct code for this rule:
javascript
`var x;
var y;
delete y.prop;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-delete-var": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-delete-var": "error",
},
});`bash
`oxlint --deny no-delete-var`

## Version

This rule was added in v0.0.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_delete_var.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-delete-var)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-delete-var)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-delete-var.html)
- [oxc project](https://github.com/oxc-project/oxc)