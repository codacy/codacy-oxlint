# No Process Exit (unicorn)

**Pattern ID:** `unicorn_no-process-exit`
**Plugin:** `unicorn`

## What it does

Disallow all usage of `process.exit()`.

## Why is this bad?

`process.exit()` should generally only be used in command-line utilities. In all other types of applications, the code should throw an error instead.

## Examples

Examples of incorrect code for this rule:
javascript
`if (problem) {
process.exit(1);
}`
Examples of correct code for this rule:
javascript
`if (problem) {
throw new Error("message");
}`
`#!/usr/bin/env node
if (problem) {
process.exit(1);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-process-exit": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-process-exit": "error",
},
});`bash
`oxlint --deny unicorn/no-process-exit`

## Version

This rule was added in v0.2.9.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_process_exit.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-process-exit.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-process-exit)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-process-exit.html)
- [oxc project](https://github.com/oxc-project/oxc)