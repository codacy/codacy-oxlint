# Require Returns Type (jsdoc)

**Pattern ID:** `jsdoc_require-returns-type`
**Plugin:** `jsdoc`

## What it does

Requires that the `@returns` tag has a type value (in curly brackets).

## Why is this bad?

A `@returns` tag should have a type value.

## Examples

Examples of incorrect code for this rule:
javascript
`/** @returns */
function quux(foo) {}`
Examples of correct code for this rule:
javascript
`/** @returns {string} */
function quux(foo) {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-returns-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-returns-type": "error",
},
});`bash
`oxlint --deny jsdoc/require-returns-type --jsdoc-plugin`

## Version

This rule was added in v0.4.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_returns_type.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireReturnsType.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-returns-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-returns-type.html)
- [oxc project](https://github.com/oxc-project/oxc)