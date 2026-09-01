# Prefer String Slice (unicorn)

**Pattern ID:** `unicorn_prefer-string-slice`
**Plugin:** `unicorn`

## What it does

Prefer `String#slice()` over `String#substr()` and `String#substring()`.

## Why is this bad?

`String#substr()` and `String#substring()` are the two lesser known legacy ways to slice a string. It's better to use `String#slice()` as it's a more popular option with clearer behavior that has a consistent `Array` counterpart.

## Examples

Examples of incorrect code for this rule:
javascript
`"foo".substr(1, 2);`
Examples of correct code for this rule:
javascript
`"foo".slice(1, 2);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-string-slice": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-string-slice": "error",
},
});`bash
`oxlint --deny unicorn/prefer-string-slice`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_string_slice.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-string-slice)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-slice.html)
- [oxc project](https://github.com/oxc-project/oxc)