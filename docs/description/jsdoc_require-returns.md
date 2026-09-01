# Require Returns (jsdoc)

**Pattern ID:** `jsdoc_require-returns`
**Plugin:** `jsdoc`

## What it does

Requires that return statements are documented. Will also report if multiple `@returns` tags are present.

## Why is this bad?

The rule is intended to prevent the omission of `@returns` tag when necessary.

## Examples

Examples of incorrect code for this rule:
javascript
`/** Foo. */
function quux() {
return foo;
}
/**
* @returns Foo!
* @returns Foo?
*/
function quux() {
return foo;
}`
Examples of correct code for this rule:
javascript
`/** @returns Foo. */
function quux() {
return foo;
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-returns": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-returns": "error",
},
});`bash
`oxlint --deny jsdoc/require-returns --jsdoc-plugin`

## Version

This rule was added in v0.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_returns.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireReturns.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-returns)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-returns.html)
- [oxc project](https://github.com/oxc-project/oxc)