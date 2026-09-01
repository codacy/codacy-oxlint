# No Useless Error Capture Stack Trace (unicorn)

**Pattern ID:** `unicorn_no-useless-error-capture-stack-trace`
**Plugin:** `unicorn`

## What it does

Disallows unnecessary `Error.captureStackTrace(…)` in error constructors.

## Why is this bad?

Calling `Error.captureStackTrace(…)` inside the constructor of a built-in `Error` subclass is unnecessary, since the `Error` constructor calls it automatically.

## Examples

Examples of incorrect code for this rule:
js
`class MyError extends Error {
constructor() {
Error.captureStackTrace(this, MyError);
}
}`
Examples of correct code for this rule:
js
`class MyError extends Error {
constructor() {
// No need to call Error.captureStackTrace
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-useless-error-capture-stack-trace": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-useless-error-capture-stack-trace": "error",
},
});`bash
`oxlint --deny unicorn/no-useless-error-capture-stack-trace`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_useless_error_capture_stack_trace.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-error-capture-stack-trace.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-useless-error-capture-stack-trace)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-error-capture-stack-trace.html)
- [oxc project](https://github.com/oxc-project/oxc)