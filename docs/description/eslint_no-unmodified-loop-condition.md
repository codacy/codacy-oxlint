# No Unmodified Loop Condition (eslint)

**Pattern ID:** `eslint_no-unmodified-loop-condition`
**Plugin:** `eslint`

## What it does

Disallow references in loop conditions that are never modified within the loop.

## Why is this bad?

A loop condition that depends on values that never change within the loop body can cause infinite loops or logic bugs.

## Examples

Examples of incorrect code for this rule:
js
`let done = false;
while (!done) {
work();
}`
Examples of correct code for this rule:
js
`let done = false;
while (!done) {
done = checkDone();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unmodified-loop-condition": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unmodified-loop-condition": "error",
},
});`bash
`oxlint --deny no-unmodified-loop-condition`

## Version

This rule was added in v1.48.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unmodified_loop_condition.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unmodified-loop-condition)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unmodified-loop-condition.html)
- [oxc project](https://github.com/oxc-project/oxc)