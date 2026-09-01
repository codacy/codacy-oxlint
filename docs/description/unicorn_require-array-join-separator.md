# Require Array Join Separator (unicorn)

**Pattern ID:** `unicorn_require-array-join-separator`
**Plugin:** `unicorn`

## What it does

Enforce using the separator argument with `Array#join()`.

## Why is this bad?

It's better to make it clear what the separator is when calling `Array#join()`, instead of relying on the default comma (`','`) separator.

## Examples

Examples of incorrect code for this rule:
javascript
`foo.join();`
Examples of correct code for this rule:
javascript
`foo.join(",");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/require-array-join-separator": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/require-array-join-separator": "error",
},
});`bash
`oxlint --deny unicorn/require-array-join-separator`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/require_array_join_separator.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Frequire-array-join-separator)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-array-join-separator.html)
- [oxc project](https://github.com/oxc-project/oxc)