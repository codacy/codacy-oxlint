# Require Throws Type (jsdoc)

**Pattern ID:** `jsdoc_require-throws-type`
**Plugin:** `jsdoc`

## What it does

Requires a type on the `@throws` tag.

## Why is this bad?

A `@throws` tag should document the type of error that may be thrown.

## Examples

Examples of incorrect code for this rule:
js
`/** @throws */
function quux() {
throw new Error("error");
}`
Examples of correct code for this rule:
js
`/** @throws {Error} */
function quux() {
throw new Error("error");
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/require-throws-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/require-throws-type": "error",
},
});`bash
`oxlint --deny jsdoc/require-throws-type --jsdoc-plugin`

## Version

This rule was added in v1.65.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/require_throws_type.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/requireThrowsType.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Frequire-throws-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-throws-type.html)
- [oxc project](https://github.com/oxc-project/oxc)