# No Console Spaces (unicorn)

**Pattern ID:** `unicorn_no-console-spaces`
**Plugin:** `unicorn`

## What it does

Disallows leading/trailing space inside `console.log()` and similar methods.

## Why is this bad?

The `console.log()` method and similar methods join the parameters with a space so adding a leading/trailing space to a parameter, results in two spaces being added.

## Examples

Examples of incorrect code for this rule:
javascript
`console.log("abc ", "def");`
Examples of correct code for this rule:
javascript
`console.log("abc", "def");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-console-spaces": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-console-spaces": "error",
},
});`bash
`oxlint --deny unicorn/no-console-spaces`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_console_spaces.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-console-spaces)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-console-spaces.html)
- [oxc project](https://github.com/oxc-project/oxc)