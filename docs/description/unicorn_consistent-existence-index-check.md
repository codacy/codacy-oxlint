# Consistent Existence Index Check (unicorn)

**Pattern ID:** `unicorn_consistent-existence-index-check`
**Plugin:** `unicorn`

## What it does

Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`. This ensures that comparisons are performed in a standard and clear way.

## Why is this bad?

This rule is meant to enforce a specific style and improve code clarity. Using inconsistent comparison styles (e.g., `index < 0`, `index >= 0`) can make the intention behind the code unclear, especially in large codebases.

## Examples

Examples of incorrect code for this rule:
javascript
`const index = foo.indexOf("bar");
if (index < 0) {
}
const index = foo.indexOf("bar");
if (index >= 0) {
}`
Examples of correct code for this rule:
javascript
`const index = foo.indexOf("bar");
if (index === -1) {
}
const index = foo.indexOf("bar");
if (index !== -1) {
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/consistent-existence-index-check": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/consistent-existence-index-check": "error",
},
});`bash
`oxlint --deny unicorn/consistent-existence-index-check`

## Version

This rule was added in v0.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/consistent_existence_index_check.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-existence-index-check.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fconsistent-existence-index-check)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-existence-index-check.html)
- [oxc project](https://github.com/oxc-project/oxc)