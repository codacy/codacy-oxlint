# Require Param Description (jsdoc)

**Pattern ID:** `jsdoc_require-param-description`
**Plugin:** `jsdoc`

## What it does

Requires that each `@param` tag has a description value.

## Why is this bad?

The description of a param should be documented.

## Examples

Examples of incorrect code for this rule:
javascript
`/** @param foo */
function quux(foo) {}`
Examples of correct code for this rule:
javascript
`/** @param foo Foo. */
function quux(foo) {}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-param-description": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-param-description": "error",
},
});`bash
`oxlint --deny jsdoc/require-param-description --jsdoc-plugin`

## Version

This rule was added in v0.4.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_param_description.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireParamDescription.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-param-description)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-param-description.html)
- [oxc project](https://github.com/oxc-project/oxc)