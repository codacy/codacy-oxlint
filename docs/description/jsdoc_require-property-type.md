# Require Property Type (jsdoc)

**Pattern ID:** `jsdoc_require-property-type`
**Plugin:** `jsdoc`

## What it does

Requires that each `@property` tag has a type value (within curly brackets).

## Why is this bad?

The type of a property should be documented.

## Examples

Examples of incorrect code for this rule:
javascript
`/**
* @typedef {SomeType} SomeTypedef
* @property foo
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
"jsdoc/require-property-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-property-type": "error",
},
});`bash
`oxlint --deny jsdoc/require-property-type --jsdoc-plugin`

## Version

This rule was added in v0.2.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_property_type.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requirePropertyType.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-property-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-type.html)
- [oxc project](https://github.com/oxc-project/oxc)