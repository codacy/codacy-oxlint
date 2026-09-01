# No Unnecessary Await (unicorn)

**Pattern ID:** `unicorn_no-unnecessary-await`
**Plugin:** `unicorn`

## What it does

Disallow awaiting on non-promise values.

## Why is this bad?

The `await` operator should only be used on `Promise` values.

## Examples

Examples of incorrect code for this rule:
javascript
`async function bad() {
await await promise;
}`
Examples of correct code for this rule:
javascript
`async function bad() {
await promise;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-unnecessary-await": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-unnecessary-await": "error",
},
});`bash
`oxlint --deny unicorn/no-unnecessary-await`

## Version

This rule was added in v0.0.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_unnecessary_await.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-unnecessary-await)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.html)
- [oxc project](https://github.com/oxc-project/oxc)