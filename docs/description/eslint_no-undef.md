# No Undef (eslint)

**Pattern ID:** `eslint_no-undef`
**Plugin:** `eslint`

## What it does

Disallow the use of undeclared variables.
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

It is most likely a potential ReferenceError caused by a misspelling of a variable or parameter name.

## Examples

Examples of incorrect code for this rule:
javascript
`var foo = someFunction();
var bar = a + 1;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-undef": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-undef": "error",
},
});`bash
`oxlint --deny no-undef`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_undef.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-undef)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-undef)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undef.html)
- [oxc project](https://github.com/oxc-project/oxc)