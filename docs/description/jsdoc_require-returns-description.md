# Require Returns Description (jsdoc)

**Pattern ID:** `jsdoc_require-returns-description`
**Plugin:** `jsdoc`

## What it does

Requires that the `@returns` tag has a description value. The error will not be reported if the return value is `void `or `undefined` or if it is `Promise<void>` or `Promise<undefined>`.

## Why is this bad?

A `@returns` tag should have a description value.

## Examples

Examples of incorrect code for this rule:
javascript
`/** @returns */
function quux(foo) {}`
Examples of correct code for this rule:
javascript
`/** @returns Foo. */
function quux(foo) {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-returns-description": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-returns-description": "error",
},
});`bash
`oxlint --deny jsdoc/require-returns-description --jsdoc-plugin`

## Version

This rule was added in v0.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_returns_description.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireReturnsDescription.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-returns-description)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-returns-description.html)
- [oxc project](https://github.com/oxc-project/oxc)