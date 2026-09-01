# No Param Reassign (eslint)

**Pattern ID:** `eslint_no-param-reassign`
**Plugin:** `eslint`

## What it does

Disallow reassigning function parameters or, optionally, their properties.

## Why is this bad?

Reassigning parameters can lead to unexpected behavior, especially when relying on the original arguments passed into the function. Mutating parameter properties can be similarly surprising and harder to reason about.

## Examples

javascript
`function foo(bar) {
bar = 1;
}
function baz(qux) {
qux.prop = 2; // when `props` option is enabled
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-param-reassign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-param-reassign": "error",
},
});`bash
`oxlint --deny no-param-reassign`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_param_reassign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-param-reassign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-param-reassign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-param-reassign.html)
- [oxc project](https://github.com/oxc-project/oxc)