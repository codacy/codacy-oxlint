# Preserve Caught Error (eslint)

**Pattern ID:** `eslint_preserve-caught-error`
**Plugin:** `eslint`

## What it does

Enforces that when re-throwing an error in a catch block, the original error is preserved using the 'cause' property.

## Why is this bad?

Re-throwing an error without preserving the original error loses important debugging information and makes it harder to trace the root cause of issues.

## Examples

Examples of incorrect code for this rule:
js
`try {
doSomething();
} catch (err) {
throw new Error("Something failed");
}`
Examples of correct code for this rule:
js
`try {
doSomething();
} catch (err) {
throw new Error("Something failed", { cause: err });
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"preserve-caught-error": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"preserve-caught-error": "error",
},
});`bash
`oxlint --deny preserve-caught-error`

## Version

This rule was added in v1.16.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/preserve_caught_error.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/preserve-caught-error)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fpreserve-caught-error)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/preserve-caught-error.html)
- [oxc project](https://github.com/oxc-project/oxc)