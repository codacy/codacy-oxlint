# Promise Function Async (typescript)

**Pattern ID:** `typescript_promise-function-async`
**Plugin:** `typescript`

## What it does

This rule requires any function or method that returns a Promise to be marked as async.

## Why is this bad?

Functions that return Promises should typically be marked as `async` to make their asynchronous nature clear and to enable the use of `await` within them. This makes the code more readable and helps prevent common mistakes with Promise handling.

## Examples

Examples of incorrect code for this rule:
ts
`// Function returning Promise without async
function fetchData(): Promise<string> {
return fetch("/api/data").then((res) => res.text());
}
// Method returning Promise without async
class DataService {
getData(): Promise<any> {
return fetch("/api/data").then((res) => res.json());
}
}
// Arrow function returning Promise without async
const processData = (): Promise<void> => {
return Promise.resolve();
};`
Examples of correct code for this rule:
ts
`// Async function
async function fetchData(): Promise<string> {
const response = await fetch("/api/data");
return response.text();
}
// Async method
class DataService {
async getData(): Promise<any> {
const response = await fetch("/api/data");
return response.json();
}
}
// Async arrow function
const processData = async (): Promise<void> => {
await someAsyncOperation();
};
// Functions that don't return Promise are fine
function syncFunction(): string {
return "hello";
}
// Functions returning Promise-like but not actual Promise
function createThenable(): { then: Function } {
return { then: () => {} };
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/promise-function-async": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/promise-function-async": "error",
},
});`bash
`oxlint --type-aware --deny typescript/promise-function-async`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/promise_function_async.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/promise-function-async/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/promise_function_async/promise_function_async.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/promise-function-async.html)
- [oxc project](https://github.com/oxc-project/oxc)