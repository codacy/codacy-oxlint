# Use Unknown In Catch Callback Variable (typescript)

**Pattern ID:** `typescript_use-unknown-in-catch-callback-variable`
**Plugin:** `typescript`

## What it does

This rule enforces using `unknown` for catch clause variables instead of `any`.

## Why is this bad?

In TypeScript 4.0+, catch clause variables can be typed as `unknown` instead of `any`. Using `unknown` is safer because it forces you to perform type checking before using the error, preventing potential runtime errors.

## Examples

Examples of incorrect code for this rule:
ts
`try {
somethingRisky();
} catch (error: any) {
// Should use 'unknown'
console.log(error.message); // Unsafe access
error.someMethod(); // Unsafe call
}
// Default catch variable is 'any' in older TypeScript
try {
somethingRisky();
} catch (error) {
// Implicitly 'any'
console.log(error.message); // Unsafe access
}`
Examples of correct code for this rule:
ts
`try {
somethingRisky();
} catch (error: unknown) {
// Type guard for Error objects
if (error instanceof Error) {
console.log(error.message); // Safe access
console.log(error.stack);
} else {
console.log("Unknown error:", error);
}
}
// More comprehensive error handling
try {
somethingRisky();
} catch (error: unknown) {
if (error instanceof Error) {
// Handle Error objects
console.error("Error:", error.message);
} else if (typeof error === "string") {
// Handle string errors
console.error("String error:", error);
} else {
// Handle unknown error types
console.error("Unknown error type:", error);
}
}
// Helper function for error handling
function isError(error: unknown): error is Error {
return error instanceof Error;
}
try {
somethingRisky();
} catch (error: unknown) {
if (isError(error)) {
console.log(error.message);
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/use-unknown-in-catch-callback-variable": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/use-unknown-in-catch-callback-variable": "error",
},
});`bash
`oxlint --type-aware --deny typescript/use-unknown-in-catch-callback-variable`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/use_unknown_in_catch_callback_variable.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/use_unknown_in_catch_callback_variable/use_unknown_in_catch_callback_variable.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/use-unknown-in-catch-callback-variable.html)
- [oxc project](https://github.com/oxc-project/oxc)