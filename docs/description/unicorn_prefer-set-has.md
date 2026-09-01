# Prefer Set Has (unicorn)

**Pattern ID:** `unicorn_prefer-set-has`
**Plugin:** `unicorn`

## What it does

Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.

## Why is this bad?

`Set#has()` is faster than `Array#includes()`.

## Examples

Examples of incorrect code for this rule:
js
`const array = [1, 2, 3];
const hasValue = (value) => array.includes(value);`
Examples of correct code for this rule:
js
`const set = new Set([1, 2, 3]);
const hasValue = (value) => set.has(value);`js
`const array = [1, 2, 3];
const hasOne = array.includes(1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-set-has": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-set-has": "error",
},
});`bash
`oxlint --deny unicorn/prefer-set-has`

## Version

This rule was added in v0.13.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_set_has.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-set-has)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-has.html)
- [oxc project](https://github.com/oxc-project/oxc)