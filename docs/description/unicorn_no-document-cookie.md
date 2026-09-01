# No Document Cookie (unicorn)

**Pattern ID:** `unicorn_no-document-cookie`
**Plugin:** `unicorn`

## What it does

Disallows direct use of `document.cookie`.

## Why is this bad?

It's not recommended to use `document.cookie` directly as it's easy to get the string wrong. Instead, you should use the [Cookie Store API](https://developer.mozilla.org/en-US/docs/Web/API/Cookie_Store_API) or a [cookie library](https://npmx.dev/search?q=cookie).

## Examples

Examples of incorrect code for this rule:
javascript
`document.cookie =
"foo=bar" +
"; Path=/" +
"; Domain=example.com" +
"; expires=Fri, 31 Dec 9999 23:59:59 GMT" +
"; Secure";`
Examples of correct code for this rule:
javascript
`async function storeCookies() {
await cookieStore.set({
name: "foo",
value: "bar",
expires: Date.now() + 24 * 60 * 60 * 1000,
domain: "example.com",
});
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-document-cookie": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-document-cookie": "error",
},
});`bash
`oxlint --deny unicorn/no-document-cookie`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_document_cookie.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-document-cookie)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-document-cookie.html)
- [oxc project](https://github.com/oxc-project/oxc)