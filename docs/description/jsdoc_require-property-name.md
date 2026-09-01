# Require Property Name (jsdoc)

**Pattern ID:** `jsdoc_require-property-name`
**Plugin:** `jsdoc`

## What it does

Requires that all `@property` tags have names.

## Why is this bad?

The name of a property type should be documented.

## Examples

Examples of incorrect code for this rule:
javascript
`/**
* @typedef {SomeType} SomeTypedef
* @property {number}
*/`
Examples of correct code for this rule:
javascript
`/**
* @typedef {SomeType} SomeTypedef
* @property {number} foo
*/`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-property-name": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-property-name": "error",
},
});`bash
`oxlint --deny jsdoc/require-property-name --jsdoc-plugin`

## Version

This rule was added in v0.2.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_property_name.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requirePropertyName.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-property-name)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-name.html)
- [oxc project](https://github.com/oxc-project/oxc)