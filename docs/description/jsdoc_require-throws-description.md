# Require Throws Description (jsdoc)

**Pattern ID:** `jsdoc_require-throws-description`
**Plugin:** `jsdoc`

## What it does

Requires a description for `@throws` tags.

## Why is this bad?

A `@throws` tag should explain the condition or reason an error may be thrown.

## Examples

Examples of incorrect code for this rule:
js
`/**
* @throws {Error}
*/
function quux() {
throw new Error("error");
}`
Examples of correct code for this rule:
js
`/**
* @throws {Error} Has a description
*/
function quux() {
throw new Error("error");
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-throws-description": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-throws-description": "error",
},
});`bash
`oxlint --deny jsdoc/require-throws-description --jsdoc-plugin`

## Version

This rule was added in v1.65.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsdoc/require_throws_description.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireThrowsDescription.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-throws-description)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-throws-description.html)
- [oxc project](https://github.com/oxc-project/oxc)