# Empty Tags (jsdoc)

**Pattern ID:** `jsdoc_empty-tags`
**Plugin:** `jsdoc`

## What it does

Expects the following tags to be empty of any content:
- `@abstract`
- `@async`
- `@generator`
- `@global`
- `@hideconstructor`
- `@ignore`
- `@inner`
- `@instance`
- `@override`
- `@readonly`
- `@inheritDoc`
- `@internal`
- `@overload`
- `@package`
- `@private`
- `@protected`
- `@public`
- `@static`

## Why is this bad?

The void tags should be empty.

## Examples

Examples of incorrect code for this rule:
javascript
`/** @async foo */
/** @private bar */`
Examples of correct code for this rule:
javascript
`/** @async */
/** @private */`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/empty-tags": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/empty-tags": "error",
},
});`bash
`oxlint --deny jsdoc/empty-tags --jsdoc-plugin`

## Version

This rule was added in v0.2.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/empty_tags.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/emptyTags.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Fempty-tags)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/empty-tags.html)
- [oxc project](https://github.com/oxc-project/oxc)