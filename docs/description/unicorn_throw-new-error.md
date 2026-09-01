# Throw New Error (unicorn)

**Pattern ID:** `unicorn_throw-new-error`
**Plugin:** `unicorn`

## What it does

This rule makes sure you always use `new` when throwing an error.

## Why is this bad?

In JavaScript, omitting `new` (e.g., `throw Error('message')`) is allowed, but it does not properly initialize the error object. This can lead to missing stack traces or incorrect prototype chains. Using `new` makes the intent clear, ensures consistent behavior, and helps avoid subtle bugs.

## Examples

Examples of incorrect code for this rule:
javascript
`throw Error("🦄");
throw TypeError("unicorn");
throw lib.TypeError("unicorn");
const e = Error("message");`
Examples of correct code for this rule:
javascript
`throw new Error("🦄");
throw new TypeError("unicorn");
throw new lib.TypeError("unicorn");
const e = new Error("message");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/throw-new-error": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/throw-new-error": "error",
},
});`bash
`oxlint --deny unicorn/throw-new-error`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/throw_new_error.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fthrow-new-error)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/throw-new-error.html)
- [oxc project](https://github.com/oxc-project/oxc)