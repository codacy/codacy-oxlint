# Require Param (jsdoc)

**Pattern ID:** `jsdoc_require-param`
**Plugin:** `jsdoc`

## What it does

Requires that all function parameters are documented with JSDoc `@param` tags.

## Why is this bad?

The rule is aimed at enforcing code quality and maintainability by requiring that all function parameters are documented.

## Examples

Examples of incorrect code for this rule:
javascript
`/** @param foo */
function quux(foo, bar) {}`
Examples of correct code for this rule:
javascript
`/** @param foo */
function quux(foo) {}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-param": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-param": "error",
},
});`bash
`oxlint --deny jsdoc/require-param --jsdoc-plugin`

## Version

This rule was added in v0.4.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_param.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireParam.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-param)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-param.html)
- [oxc project](https://github.com/oxc-project/oxc)