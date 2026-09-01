# Prefer Response Static Json (unicorn)

**Pattern ID:** `unicorn_prefer-response-static-json`
**Plugin:** `unicorn`

## What it does

Enforces the use of `Response.json()` over `new Response(JSON.stringify())`.

## Why is this bad?

`Response.json()` is a more concise and semantically clear way to create JSON responses. It automatically sets the correct `Content-Type` header (`application/json`) and handles serialization, making the code more maintainable and less error-prone.

## Examples

Examples of incorrect code for this rule:
javascript
`const response = new Response(JSON.stringify(data));
const response = new Response(JSON.stringify(data), { status: 200 });`
Examples of correct code for this rule:
javascript
`const response = Response.json(data);
const response = Response.json(data, { status: 200 });`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-response-static-json": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-response-static-json": "error",
},
});`bash
`oxlint --deny unicorn/prefer-response-static-json`

## Version

This rule was added in v1.29.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_response_static_json.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-response-static-json.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-response-static-json)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-response-static-json.html)
- [oxc project](https://github.com/oxc-project/oxc)