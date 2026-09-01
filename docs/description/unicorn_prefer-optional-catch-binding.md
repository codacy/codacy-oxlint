# Prefer Optional Catch Binding (unicorn)

**Pattern ID:** `unicorn_prefer-optional-catch-binding`
**Plugin:** `unicorn`

## What it does

Prefers omitting the catch binding parameter if it is unused.

## Why is this bad?

It is unnecessary to bind the error to a variable if it is not used.

## Examples

Examples of incorrect code for this rule:
javascript
`try {
// ...
} catch (e) {}`
Examples of correct code for this rule:
javascript
`try {
// ...
} catch {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-optional-catch-binding": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-optional-catch-binding": "error",
},
});`bash
`oxlint --deny unicorn/prefer-optional-catch-binding`

## Version

This rule was added in v0.0.17.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_optional_catch_binding.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-optional-catch-binding)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.html)
- [oxc project](https://github.com/oxc-project/oxc)