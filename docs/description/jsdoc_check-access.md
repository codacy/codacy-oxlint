# Check Access (jsdoc)

**Pattern ID:** `jsdoc_check-access`
**Plugin:** `jsdoc`

## What it does

Checks that `@access` tags use one of the following values:
- "package", "private", "protected", "public"
Also reports:
- Mixing of `@access` with `@public`, `@private`, `@protected`, or `@package` on the same doc block.
- Use of multiple instances of `@access` (or the `@public`, etc) on the same doc block.

## Why is this bad?

It is important to have a consistent way of specifying access levels in JSDoc comments. Using invalid or multiple access level tags creates confusion about the intended visibility of documented elements and can lead to inconsistencies in API documentation generation. Mixing different access tags or using invalid values makes the documentation unclear and potentially misleading.

## Examples

Examples of incorrect code for this rule:
javascript
`/** @access private @public */
/** @access invalidlevel */`
Examples of correct code for this rule:
javascript
`/** @access private */
/** @private */`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsdoc"],
"rules": {
"jsdoc/check-access": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsdoc"],
rules: {
"jsdoc/check-access": "error",
},
});`bash
`oxlint --deny jsdoc/check-access --jsdoc-plugin`

## Version

This rule was added in v0.2.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jsdoc/check_access.rs)
- [Upstream rule docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/checkAccess.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsdoc%2Fcheck-access)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-access.html)
- [oxc project](https://github.com/oxc-project/oxc)