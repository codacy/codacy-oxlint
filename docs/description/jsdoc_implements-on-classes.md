# Implements On Classes (jsdoc)

**Pattern ID:** `jsdoc_implements-on-classes`
**Plugin:** `jsdoc`

## What it does

Reports an issue with any non-constructor function using `@implements`.

## Why is this bad?

Constructor functions should be whether marked with `@class`, `@constructs`, or being a class constructor.

## Examples

Examples of incorrect code for this rule:
javascript
`/**
* @implements {SomeClass}
*/
function quux() {}`
Examples of correct code for this rule:
javascript
`class Foo {
/**
* @implements {SomeClass}
*/
constructor() {}
}
/**
* @implements {SomeClass}
* @class
*/
function quux() {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/implements-on-classes": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/implements-on-classes": "error",
},
});`bash
`oxlint --deny jsdoc/implements-on-classes --jsdoc-plugin`

## Version

This rule was added in v0.3.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/implements_on_classes.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implementsOnClasses.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Fimplements-on-classes)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/implements-on-classes.html)
- [oxc project](https://github.com/oxc-project/oxc)