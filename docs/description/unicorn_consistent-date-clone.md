# Consistent Date Clone (unicorn)

**Pattern ID:** `unicorn_consistent-date-clone`
**Plugin:** `unicorn`

## What it does

The Date constructor can clone a `Date` object directly when passed as an argument, making timestamp conversion unnecessary. This rule enforces the use of the direct `Date` cloning instead of using `.getTime()` for conversion.

## Why is this bad?

Using `.getTime()` to convert a `Date` object to a timestamp and then back to a `Date` is redundant and unnecessary. Simply passing the `Date` object to the `Date` constructor is cleaner and more efficient.

## Examples

Examples of incorrect code for this rule:
js
`new Date(date.getTime());`
Examples of correct code for this rule:
js
`new Date(date);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/consistent-date-clone": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/consistent-date-clone": "error",
},
});`bash
`oxlint --deny unicorn/consistent-date-clone`

## Version

This rule was added in v0.15.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/consistent_date_clone.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-date-clone.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fconsistent-date-clone)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-date-clone.html)
- [oxc project](https://github.com/oxc-project/oxc)