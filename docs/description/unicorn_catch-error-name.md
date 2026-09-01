# Catch Error Name (unicorn)

**Pattern ID:** `unicorn_catch-error-name`
**Plugin:** `unicorn`

## What it does

This rule enforces consistent and descriptive naming for error variables in `catch` statements, preventing the use of vague names like `badName` or `_` when the error is used.

## Why is this bad?

Using non-descriptive names like `badName` or `_` makes the code harder to read and understand, especially when debugging. It's important to use clear, consistent names to represent errors.

## Examples

Examples of incorrect code for this rule:
javascript
`try {
} catch (badName) {}
// `_` is not allowed if it's used
try {
} catch (_) {
console.log(_);
}
promise.catch((badName) => {});
promise.then(undefined, (badName) => {});`
Examples of correct code for this rule:
javascript
`try {
} catch (error) {}
// `_` is allowed if it's not used
try {
} catch (_) {
console.log(123);
}
promise.catch((error) => {});
promise.then(undefined, (error) => {});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/catch-error-name": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/catch-error-name": "error",
},
});`bash
`oxlint --deny unicorn/catch-error-name`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/catch_error_name.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fcatch-error-name)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/catch-error-name.html)
- [oxc project](https://github.com/oxc-project/oxc)