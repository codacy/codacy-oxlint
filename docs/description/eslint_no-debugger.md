# No Debugger (eslint)

**Pattern ID:** `eslint_no-debugger`
**Plugin:** `eslint`

## What it does

Checks for usage of the `debugger` statement.

## Why is this bad?

`debugger` statements do not affect functionality when a debugger isn't attached. They're most commonly an accidental debugging leftover.

## Examples

Examples of incorrect code for this rule:
javascript
`async function main() {
const data = await getData();
const result = complexCalculation(data);
debugger;
}`
Examples of correct code for this rule:
javascript
`async function main() {
const data = await getData();
const result = complexCalculation(data);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-debugger": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-debugger": "error",
},
});`bash
`oxlint --deny no-debugger`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_debugger.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-debugger)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-debugger)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-debugger.html)
- [oxc project](https://github.com/oxc-project/oxc)