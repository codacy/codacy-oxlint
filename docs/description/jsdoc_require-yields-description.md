# Require Yields Description (jsdoc)

**Pattern ID:** `jsdoc_require-yields-description`
**Plugin:** `jsdoc`

## What it does

Requires a description for `@yields` tags.

## Why is this bad?

A `@yields` tag should explain what the generator yields.

## Examples

Examples of incorrect code for this rule:
js
`/**
* @yields {string}
*/
function* quux() {
yield "value";
}`
Examples of correct code for this rule:
js
`/**
* @yields {string} The next value.
*/
function* quux() {
yield "value";
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-yields-description": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-yields-description": "error",
},
});`bash
`oxlint --deny jsdoc/require-yields-description --jsdoc-plugin`

## Version

This rule was added in v1.68.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_yields_description.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireYieldsDescription.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-yields-description)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-yields-description.html)
- [oxc project](https://github.com/oxc-project/oxc)