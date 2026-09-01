# Error Message (unicorn)

**Pattern ID:** `unicorn_error-message`
**Plugin:** `unicorn`

## What it does

Enforces providing a `message` when creating built-in `Error` objects to improve readability and debugging.

## Why is this bad?

Throwing an `Error` without a message, like `throw new Error()`, provides no context on what went wrong, making debugging harder. A clear error message improves code clarity and helps developers quickly identify issues.

## Examples

Examples of incorrect code for this rule:
javascript
`throw Error();
throw new TypeError();`
Examples of correct code for this rule:
javascript
`throw new Error("Unexpected token");
throw new TypeError("Number expected");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/error-message": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/error-message": "error",
},
});`bash
`oxlint --deny unicorn/error-message`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/error_message.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Ferror-message)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/error-message.html)
- [oxc project](https://github.com/oxc-project/oxc)