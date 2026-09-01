# Prefer Blob Reading Methods (unicorn)

**Pattern ID:** `unicorn_prefer-blob-reading-methods`
**Plugin:** `unicorn`

## What it does

Recommends using `Blob#text()` and `Blob#arrayBuffer()` over `FileReader#readAsText()` and `FileReader#readAsArrayBuffer()`.

## Why is this bad?

`FileReader` predates promises, and the newer `Blob#arrayBuffer()` and `Blob#text()` methods are much cleaner and easier to use.

## Examples

Examples of incorrect code for this rule:
javascript
`async function bad() {
const arrayBuffer = await new Promise((resolve, reject) => {
const fileReader = new FileReader();
fileReader.addEventListener("load", () => {
resolve(fileReader.result);
});
fileReader.addEventListener("error", () => {
reject(fileReader.error);
});
fileReader.readAsArrayBuffer(blob);
});
}`
Examples of correct code for this rule:
javascript
`async function good() {
const arrayBuffer = await blob.arrayBuffer();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-blob-reading-methods": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-blob-reading-methods": "error",
},
});`bash
`oxlint --deny unicorn/prefer-blob-reading-methods`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_blob_reading_methods.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-blob-reading-methods.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-blob-reading-methods)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-blob-reading-methods.html)
- [oxc project](https://github.com/oxc-project/oxc)