# No Defaults (jsdoc)

**Pattern ID:** `jsdoc_no-defaults`
**Plugin:** `jsdoc`

## What it does

This rule reports defaults being used on the relevant portion of `@param` or `@default`. It also optionally reports the presence of the square-bracketed optional arguments at all.

## Why is this bad?

The rule is intended to prevent the indication of defaults on tags where this would be redundant with ES2015 default parameters.

## Examples

Examples of incorrect code for this rule:
javascript
`/** @param {number} [foo="7"] */
function quux(foo) {}`
Examples of correct code for this rule:
javascript
`/** @param {number} foo */
function quux(foo) {}
/** @param foo */
function quux(foo) {}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/no-defaults": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/no-defaults": "error",
},
});`bash
`oxlint --deny jsdoc/no-defaults --jsdoc-plugin`

## Version

This rule was added in v0.3.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/no_defaults.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/noDefaults.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Fno-defaults)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/no-defaults.html)
- [oxc project](https://github.com/oxc-project/oxc)