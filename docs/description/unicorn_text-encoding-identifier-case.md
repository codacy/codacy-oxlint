# Text Encoding Identifier Case (unicorn)

**Pattern ID:** `unicorn_text-encoding-identifier-case`
**Plugin:** `unicorn`

## What it does

This rule enforces consistent casing for text encoding identifiers, specifically:
- `'utf8'` instead of `'UTF-8'` or `'utf-8'` (or `'utf-8'` if `withDash` is enabled)
- `'ascii'` instead of `'ASCII'`

## Why is this bad?

Inconsistent casing of encoding identifiers reduces code readability and can lead to subtle confusion across a codebase. Although casing is not strictly enforced by ECMAScript or Node.js, using lowercase is the conventional and widely recognized style.

## Examples

Examples of incorrect code for this rule:
javascript
`import fs from "node:fs/promises";
async function bad() {
await fs.readFile(file, "UTF-8");
await fs.readFile(file, "ASCII");
const string = buffer.toString("utf-8");
}`
Examples of correct code for this rule:
javascript
`import fs from "node:fs/promises";
async function good() {
await fs.readFile(file, "utf8");
await fs.readFile(file, "ascii");
const string = buffer.toString("utf8");
}`
Examples of correct code for this rule with `{ "withDash": true }`:
javascript
`import fs from "node:fs/promises";
async function good() {
await fs.readFile(file, "utf-8");
await fs.readFile(file, "ascii");
const string = buffer.toString("utf-8");
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/text-encoding-identifier-case": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/text-encoding-identifier-case": "error",
},
});`bash
`oxlint --deny unicorn/text-encoding-identifier-case`

## Version

This rule was added in v0.0.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/text_encoding_identifier_case.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Ftext-encoding-identifier-case)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/text-encoding-identifier-case.html)
- [oxc project](https://github.com/oxc-project/oxc)