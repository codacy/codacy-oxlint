# Custom Error Definition (unicorn)

**Pattern ID:** `unicorn_custom-error-definition`
**Plugin:** `unicorn`

## What it does

Enforces the only valid way of Error subclassing. It works with any super class that ends in Error.

## Why is this bad?

Incorrectly defined custom errors can lead to unexpected behavior when catching and identifying errors. Missing `super()` calls, wrong `name` property values, or non-standard class names make error handling unreliable.

## Examples

Examples of incorrect code for this rule:
js
`class CustomError extends Error {
constructor(message) {
super(message);
// The `this.message` assignment is useless as it's already set via the `super()` call.
this.message = message;
this.name = "CustomError";
}
}
class CustomError extends Error {
constructor(message) {
super();
// Pass the error message to `super()` instead of setting `this.message`.
this.message = message;
this.name = "CustomError";
}
}
class CustomError extends Error {
constructor(message) {
super(message);
// No `name` property set. The name property is needed so the
// error shows up as `[CustomError: foo]` and not `[Error: foo]`.
}
}
class CustomError extends Error {
constructor(message) {
super(message);
// Use a string literal to set the `name` property as it will not change after minifying.
this.name = this.constructor.name;
}
}
class CustomError extends Error {
constructor(message) {
super(message);
// The `name` property should be set to the class name.
this.name = "MyError";
}
}`
Examples of correct code for this rule:
js
`class CustomError extends Error {
constructor(message) {
super(message);
this.name = "CustomError";
}
}
class CustomError extends Error {
constructor() {
super("My custom error");
this.name = "CustomError";
}
}
class CustomError extends TypeError {
constructor() {
super();
this.name = "CustomError";
}
}
class CustomError extends Error {
name = "CustomError";
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/custom-error-definition": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/custom-error-definition": "error",
},
});`bash
`oxlint --deny unicorn/custom-error-definition`

## Version

This rule was added in v1.57.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/custom_error_definition.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fcustom-error-definition)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/custom-error-definition.html)
- [oxc project](https://github.com/oxc-project/oxc)