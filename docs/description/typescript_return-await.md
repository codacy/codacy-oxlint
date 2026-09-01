# Return Await (typescript)

**Pattern ID:** `typescript_return-await`
**Plugin:** `typescript`

## What it does

This rule enforces consistent returning of awaited values from async functions.

## Why is this bad?

There are different patterns for returning awaited values from async functions. Sometimes you want to await before returning (to handle errors in the current function), and sometimes you want to return the Promise directly (for better performance). This rule helps enforce consistency.

## Examples

Examples of incorrect code for this rule (depending on configuration):
ts
`// If configured to require await:
async function fetchData() {
return fetch("/api/data"); // Should be: return await fetch('/api/data');
}
async function processData() {
return someAsyncOperation(); // Should be: return await someAsyncOperation();
}
// If configured to disallow unnecessary await:
async function fetchData() {
return await fetch("/api/data"); // Should be: return fetch('/api/data');
}
async function processData() {
return await someAsyncOperation(); // Should be: return someAsyncOperation();
}`
Examples of correct code for this rule:
ts
`// When await is required for error handling:
async function fetchData() {
try {
return await fetch("/api/data");
} catch (error) {
console.error("Fetch failed:", error);
throw error;
}
}
// When returning Promise directly for performance:
async function fetchData() {
return fetch("/api/data");
}
// Processing before return requires await:
async function fetchAndProcess() {
const response = await fetch("/api/data");
return response.json();
}
// Multiple async operations:
async function multipleOperations() {
const data1 = await fetchData1();
const data2 = await fetchData2();
return data1 + data2;
}`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/return-await": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/return-await": "error",
},
});`bash
`oxlint --type-aware --deny typescript/return-await`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/return_await.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/return-await/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/return_await/return_await.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/return-await.html)
- [oxc project](https://github.com/oxc-project/oxc)