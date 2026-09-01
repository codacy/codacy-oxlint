# Prefer Set Size (unicorn)

**Pattern ID:** `unicorn_prefer-set-size`
**Plugin:** `unicorn`

## What it does

Prefer `Set#size` over `Set#length` when the `Set` is converted to an array.

## Why is this bad?

Using `Set#size` is more readable and performant.

## Examples

Examples of incorrect code for this rule:
javascript
`const length = [...new Set([1, 2, 3])].length;`
Examples of correct code for this rule:
javascript
`const size = new Set([1, 2, 3]).size;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-set-size": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-set-size": "error",
},
});`bash
`oxlint --deny unicorn/prefer-set-size`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_set_size.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-set-size)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-size.html)
- [oxc project](https://github.com/oxc-project/oxc)