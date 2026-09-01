# Require Yields (jsdoc)

**Pattern ID:** `jsdoc_require-yields`
**Plugin:** `jsdoc`

## What it does

Requires that yields are documented. Will also report if multiple `@yields` tags are present.

## Why is this bad?

The rule is intended to prevent the omission of `@yields` tags when they are necessary.

## Examples

Examples of incorrect code for this rule:
javascript
`function* quux(foo) {
yield foo;
}
/**
* @yields {undefined}
* @yields {void}
*/
function* quux(foo) {}`
Examples of correct code for this rule:
javascript
`/** * @yields Foo */
function* quux(foo) {
yield foo;
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-yields": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-yields": "error",
},
});`bash
`oxlint --deny jsdoc/require-yields --jsdoc-plugin`

## Version

This rule was added in v0.3.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_yields.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireYields.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-yields)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-yields.html)
- [oxc project](https://github.com/oxc-project/oxc)