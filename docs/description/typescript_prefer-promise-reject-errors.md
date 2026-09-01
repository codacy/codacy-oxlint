# Prefer Promise Reject Errors (typescript)

**Pattern ID:** `typescript_prefer-promise-reject-errors`
**Plugin:** `typescript`

## What it does

This rule enforces passing an Error object to `Promise.reject()`.

## Why is this bad?

It's considered good practice to only reject promises with Error objects. This is because Error objects automatically capture a stack trace, which is useful for debugging. Additionally, some tools and environments expect rejection reasons to be Error objects.

## Examples

Examples of incorrect code for this rule:
ts
`Promise.reject("error"); // rejecting with string
Promise.reject(42); // rejecting with number
Promise.reject(true); // rejecting with boolean
Promise.reject({ message: "error" }); // rejecting with plain object
Promise.reject(null); // rejecting with null
Promise.reject(); // rejecting with undefined
const error = "Something went wrong";
Promise.reject(error); // rejecting with non-Error variable`
Examples of correct code for this rule:
ts
`Promise.reject(new Error("Something went wrong"));
Promise.reject(new TypeError("Invalid type"));
Promise.reject(new RangeError("Value out of range"));
// Custom Error subclasses
class CustomError extends Error {
constructor(message: string) {
super(message);
this.name = "CustomError";
}
}
Promise.reject(new CustomError("Custom error occurred"));
// Variables that are Error objects
const error = new Error("Error message");
Promise.reject(error);`

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
"typescript/prefer-promise-reject-errors": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/prefer-promise-reject-errors": "error",
},
});`bash
`oxlint --type-aware --deny typescript/prefer-promise-reject-errors`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_promise_reject_errors.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-promise-reject-errors/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/prefer_promise_reject_errors/prefer_promise_reject_errors.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-promise-reject-errors.html)
- [oxc project](https://github.com/oxc-project/oxc)