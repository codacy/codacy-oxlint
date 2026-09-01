# Misrefactored Assign Op (oxc)

**Pattern ID:** `oxc_misrefactored-assign-op`
**Plugin:** `oxc`

## What it does

[https://rust-lang.github.io/rust-clippy/master/#/misrefactored_assign_op](https://rust-lang.github.io/rust-clippy/master/#/misrefactored_assign_op)
Checks for `a op= a op b` or `a op= b op a` patterns.

## Why is this bad?

Most likely these are bugs where one meant to write `a op= b`.

## Examples

Examples of incorrect code for this rule:
javascript
`a += a + b;
a -= a - b;`
Examples of correct code for this rule:
javascript
`a += b;
a -= b;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/misrefactored-assign-op": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/misrefactored-assign-op": "error",
},
});`bash
`oxlint --deny oxc/misrefactored-assign-op`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/misrefactored_assign_op.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fmisrefactored-assign-op)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.html)
- [oxc project](https://github.com/oxc-project/oxc)