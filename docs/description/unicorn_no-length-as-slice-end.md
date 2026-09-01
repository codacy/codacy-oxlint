# No Length As Slice End (unicorn)

**Pattern ID:** `unicorn_no-length-as-slice-end`
**Plugin:** `unicorn`

## What it does

Disallow using `length` as the end argument of a `slice` call.

## Why is this bad?

Passing `length` as the end argument of a `slice` call is unnecessary and can be confusing.

## Examples

Examples of incorrect code for this rule:
javascript
`foo.slice(1, foo.length);`
Examples of correct code for this rule:
javascript
`foo.slice(1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-length-as-slice-end": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-length-as-slice-end": "error",
},
});`bash
`oxlint --deny unicorn/no-length-as-slice-end`

## Version

This rule was added in v0.7.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_length_as_slice_end.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-length-as-slice-end.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-length-as-slice-end)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-length-as-slice-end.html)
- [oxc project](https://github.com/oxc-project/oxc)