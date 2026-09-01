# Require Property Description (jsdoc)

**Pattern ID:** `jsdoc_require-property-description`
**Plugin:** `jsdoc`

## What it does

Requires that all `@property` tags have descriptions.

## Why is this bad?

The description of a property should be documented.

## Examples

Examples of incorrect code for this rule:
javascript
`/**
* @typedef {SomeType} SomeTypedef
* @property {number} foo
*/`
Examples of correct code for this rule:
javascript
`/**
* @typedef {SomeType} SomeTypedef
* @property {number} foo Foo.
*/`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-property-description": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-property-description": "error",
},
});`bash
`oxlint --deny jsdoc/require-property-description --jsdoc-plugin`

## Version

This rule was added in v0.2.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_property_description.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requirePropertyDescription.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-property-description)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-description.html)
- [oxc project](https://github.com/oxc-project/oxc)