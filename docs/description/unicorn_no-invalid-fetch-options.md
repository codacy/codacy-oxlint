# No Invalid Fetch Options (unicorn)

**Pattern ID:** `unicorn_no-invalid-fetch-options`
**Plugin:** `unicorn`

## What it does

Disallow invalid options in `fetch()` and `new Request()`. Specifically, this rule ensures that a body is not provided when the method is `GET` or `HEAD`, as it will result in a `TypeError`.

## Why is this bad?

The `fetch()` function throws a `TypeError` when the method is `GET` or `HEAD` and a body is provided. This can lead to unexpected behavior and errors in your code. By disallowing such invalid options, the rule ensures that requests are correctly configured and prevents unnecessary errors.

## Examples

Examples of incorrect code for this rule:
javascript
`const response = await fetch("/", { method: "GET", body: "foo=bar" });
const request = new Request("/", { method: "GET", body: "foo=bar" });`
Examples of correct code for this rule:
javascript
`const response = await fetch("/", { method: "POST", body: "foo=bar" });
const request = new Request("/", { method: "POST", body: "foo=bar" });`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-invalid-fetch-options": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-invalid-fetch-options": "error",
},
});`bash
`oxlint --deny unicorn/no-invalid-fetch-options`

## Version

This rule was added in v0.15.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_invalid_fetch_options.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-fetch-options.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-invalid-fetch-options)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-fetch-options.html)
- [oxc project](https://github.com/oxc-project/oxc)