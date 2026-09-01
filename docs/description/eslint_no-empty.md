# No Empty (eslint)

**Pattern ID:** `eslint_no-empty`
**Plugin:** `eslint`

## What it does

Disallows empty block statements.

## Why is this bad?

Empty block statements, while not technically errors, usually occur due to refactoring that wasn’t completed. They can cause confusion when reading code.

## Examples

Examples of incorrect code for this rule:
javascript
`if (condition) {
}`
Examples of correct code for this rule:
javascript
`if (condition) {
throw new Error("condition should be false");
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-empty": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-empty": "error",
},
});`bash
`oxlint --deny no-empty`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_empty.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-empty)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-empty)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty.html)
- [oxc project](https://github.com/oxc-project/oxc)