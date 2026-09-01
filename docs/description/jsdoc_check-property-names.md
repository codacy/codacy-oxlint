# Check Property Names (jsdoc)

**Pattern ID:** `jsdoc_check-property-names`
**Plugin:** `jsdoc`

## What it does

Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.

## Why is this bad?

`@property` tags with the same name can be confusing and may indicate a mistake.

## Examples

Examples of incorrect code for this rule:
javascript
`/**
* @typedef {object} state
* @property {number} foo
* @property {string} foo
*/
/**
* @typedef {object} state
* @property {number} foo.bar
*/`
Examples of correct code for this rule:
javascript
`/**
* @typedef {object} state
* @property {number} foo
*/
/**
* @typedef {object} state
* @property {object} foo
* @property {number} foo.bar
*/`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/check-property-names": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/check-property-names": "error",
},
});`bash
`oxlint --deny jsdoc/check-property-names --jsdoc-plugin`

## Version

This rule was added in v0.2.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/check_property_names.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/checkPropertyNames.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Fcheck-property-names)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-property-names.html)
- [oxc project](https://github.com/oxc-project/oxc)