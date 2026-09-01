# Prefer Date Now (unicorn)

**Pattern ID:** `unicorn_prefer-date-now`
**Plugin:** `unicorn`

## What it does

Prefers use of `Date.now()` over `new Date().getTime()` or `new Date().valueOf()`.

## Why is this bad?

Using `Date.now()` is shorter and nicer than `new Date().getTime()`, and avoids unnecessary instantiation of `Date` objects.

## Examples

Examples of incorrect code for this rule:
javascript
`const ts = new Date().getTime();
const ts = new Date().valueOf();`
Examples of correct code for this rule:
javascript
`const ts = Date.now();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-date-now": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-date-now": "error",
},
});`bash
`oxlint --deny unicorn/prefer-date-now`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_date_now.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-date-now)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-date-now.html)
- [oxc project](https://github.com/oxc-project/oxc)