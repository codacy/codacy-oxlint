# Prefer Includes (typescript)

**Pattern ID:** `typescript_prefer-includes`
**Plugin:** `typescript`

## What it does

Enforce using `.includes()` instead of `.indexOf() !== -1` or `/regex/.test()`.

## Why is this bad?

`.includes()` is more readable and expressive than checking `.indexOf() !== -1`. It clearly communicates the intent to check for the presence of a value. Additionally, for simple string searches, `.includes()` is often preferred over regex `.test()` for better performance and clarity.

## Examples

Examples of incorrect code for this rule:
ts
`// Using indexOf
const str = "hello world";
if (str.indexOf("world") !== -1) {
console.log("found");
}
if (str.indexOf("world") != -1) {
console.log("found");
}
if (str.indexOf("world") > -1) {
console.log("found");
}
// Using regex test for simple strings
if (/world/.test(str)) {
console.log("found");
}
// Arrays
const arr = [1, 2, 3];
if (arr.indexOf(2) !== -1) {
console.log("found");
}`
Examples of correct code for this rule:
ts
`// Using includes for strings
const str = "hello world";
if (str.includes("world")) {
console.log("found");
}
// Using includes for arrays
const arr = [1, 2, 3];
if (arr.includes(2)) {
console.log("found");
}
// Complex regex patterns are allowed
if (/wo+rld/.test(str)) {
console.log("found");
}
// Regex with flags
if (/world/i.test(str)) {
console.log("found");
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/prefer-includes": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/prefer-includes": "error",
},
});`bash
`oxlint --type-aware --deny typescript/prefer-includes`

## Version

This rule was added in v1.29.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_includes.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-includes/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/prefer_includes/prefer_includes.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-includes.html)
- [oxc project](https://github.com/oxc-project/oxc)