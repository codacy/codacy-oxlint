# Require Yields Type (jsdoc)

**Pattern ID:** `jsdoc_require-yields-type`
**Plugin:** `jsdoc`

## What it does

Requires a type on the `@yields` tag.

## Why is this bad?

A `@yields` tag should document the type yielded by the generator.

## Examples

Examples of incorrect code for this rule:
js
`/** @yields */
function* quux() {}`
Examples of correct code for this rule:
js
`/** @yields {string} */
function* quux() {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-yields-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-yields-type": "error",
},
});`bash
`oxlint --deny jsdoc/require-yields-type --jsdoc-plugin`

## Version

This rule was added in v1.65.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_yields_type.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireYieldsType.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-yields-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-yields-type.html)
- [oxc project](https://github.com/oxc-project/oxc)