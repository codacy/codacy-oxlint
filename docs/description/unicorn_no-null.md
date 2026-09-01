# No Null (unicorn)

**Pattern ID:** `unicorn_no-null`
**Plugin:** `unicorn`

## What it does

Disallow the use of the `null` literal, to encourage using `undefined` instead.

## Why is this bad?

There are some reasons for using `undefined` instead of `null`.
- From experience, most developers use `null` and `undefined` inconsistently and interchangeably, and few know when to use which.
- Supporting both `null` and `undefined` complicates input validation.
- Using `null` makes TypeScript types more verbose: `type A = {foo?: string | null}` vs `type A = {foo?: string}`.

## Examples

Examples of incorrect code for this rule:
javascript
`let foo = null;`
Examples of correct code for this rule:
javascript
`let foo;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-null": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-null": "error",
},
});`bash
`oxlint --deny unicorn/no-null`

## Version

This rule was added in v0.0.21.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_null.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-null)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-null.html)
- [oxc project](https://github.com/oxc-project/oxc)