# Prefer String Replace All (unicorn)

**Pattern ID:** `unicorn_prefer-string-replace-all`
**Plugin:** `unicorn`

## What it does

Prefers `String#replaceAll()` over `String#replace()` when using a regex with the global flag.

## Why is this bad?

The `String#replaceAll()` method is both faster and safer as you don't have to use a regex and remember to escape it if the string is not a literal. And when used with a regex, it makes the intent clearer.

## Examples

Examples of incorrect code for this rule:
js
`foo.replace(/a/g, bar);`
Examples of correct code for this rule:
js
`foo.replace(/a/, bar);
foo.replaceAll("a", bar);
foo.replaceAll(/a|b/g, bar);
const pattern = "not-a-regexp";
foo.replace(pattern, bar);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-string-replace-all": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-string-replace-all": "error",
},
});`bash
`oxlint --deny unicorn/prefer-string-replace-all`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_string_replace_all.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-string-replace-all)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-replace-all.html)
- [oxc project](https://github.com/oxc-project/oxc)