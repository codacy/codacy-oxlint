# No Blank Blocks (jsdoc)

**Pattern ID:** `jsdoc_no-blank-blocks`
**Plugin:** `jsdoc`

## What it does

Reports and optionally removes blocks with whitespace only.

## Why is this bad?

Blank JSDoc blocks add noise without providing any documentation.

## Examples

Examples of incorrect code for this rule:
js
`/** */
/**
*
*/`
Examples of correct code for this rule:
js
`/** @tag */
/**
* Text
*/
/**
* @tag
*/`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/no-blank-blocks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/no-blank-blocks": "error",
},
});`bash
`oxlint --deny jsdoc/no-blank-blocks --jsdoc-plugin`

## Version

This rule was added in v1.78.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/no_blank_blocks.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/noBlankBlocks.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Fno-blank-blocks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/no-blank-blocks.html)
- [oxc project](https://github.com/oxc-project/oxc)