# Require Property (jsdoc)

**Pattern ID:** `jsdoc_require-property`
**Plugin:** `jsdoc`

## What it does

Requires that all `@typedef` and `@namespace` tags have `@property` tags when their type is a plain `object`, `Object`, or `PlainObject`.
Note: this rule can be configured via [jsdoc settings](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html#settings) option.

## Why is this bad?

Object type should have properties defined.

## Examples

Examples of incorrect code for this rule:
javascript
`/**
* @typedef {Object} SomeTypedef
*/
/**
* @namespace {Object} SomeNamespace
*/`
Examples of correct code for this rule:
javascript
`/**
* @typedef {Object} SomeTypedef
* @property {SomeType} propName Prop description
*/
/**
* @typedef {object} Foo
* @property someProp
*/`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-property": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-property": "error",
},
});`bash
`oxlint --deny jsdoc/require-property --jsdoc-plugin`

## Version

This rule was added in v0.2.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_property.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireProperty.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-property)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property.html)
- [oxc project](https://github.com/oxc-project/oxc)