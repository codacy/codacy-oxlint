# Check Tag Names (jsdoc)

**Pattern ID:** `jsdoc_check-tag-names`
**Plugin:** `jsdoc`

## What it does

Reports invalid block tag names. Additionally checks for tag names that are redundant when using a type checker such as TypeScript.

## Why is this bad?

Using invalid tags can lead to confusion and make the documentation harder to read.

## Examples

Examples of incorrect code for this rule:
javascript
`/** @Param */
/** @foo */
/**
* This is redundant when typed.
* @type {string}
*/`
Examples of correct code for this rule:
javascript
`/** @param */`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/check-tag-names": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/check-tag-names": "error",
},
});`bash
`oxlint --deny jsdoc/check-tag-names --jsdoc-plugin`

## Version

This rule was added in v0.3.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/check_tag_names.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/checkTagNames.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Fcheck-tag-names)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-tag-names.html)
- [oxc project](https://github.com/oxc-project/oxc)