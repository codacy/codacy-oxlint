# Prefer Negative Index (unicorn)

**Pattern ID:** `unicorn_prefer-negative-index`
**Plugin:** `unicorn`

## What it does

Prefer using a negative index over `.length - index` when possible.

## Why is this bad?

Using a negative index with `at` or `slice` is generally more readable and concise than using `.length - index`.

## Examples

Examples of incorrect code for this rule:
js
`foo.slice(foo.length - 2, foo.length - 1);
foo.at(foo.length - 1);`
Examples of correct code for this rule:
js
`foo.slice(-2, -1);
foo.at(-1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-negative-index": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-negative-index": "error",
},
});`bash
`oxlint --deny unicorn/prefer-negative-index`

## Version

This rule was added in v0.13.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_negative_index.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-negative-index)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-negative-index.html)
- [oxc project](https://github.com/oxc-project/oxc)