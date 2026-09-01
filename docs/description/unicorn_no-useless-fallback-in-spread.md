# No Useless Fallback In Spread (unicorn)

**Pattern ID:** `unicorn_no-useless-fallback-in-spread`
**Plugin:** `unicorn`

## What it does

Disallow useless fallback when spreading in object literals.

## Why is this bad?

Spreading [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) in object literals won't add any unexpected properties, so it's unnecessary to add an empty object as fallback.

## Examples

Examples of incorrect code for this rule:
javascript
`const object = { ...(foo || {}) };`
Examples of correct code for this rule:
javascript
`const object = { ...foo };
const object = { ...(foo || { not: "empty" }) };`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-useless-fallback-in-spread": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-useless-fallback-in-spread": "error",
},
});`bash
`oxlint --deny unicorn/no-useless-fallback-in-spread`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_useless_fallback_in_spread.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-useless-fallback-in-spread)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-fallback-in-spread.html)
- [oxc project](https://github.com/oxc-project/oxc)