# Erasing Op (oxc)

**Pattern ID:** `oxc_erasing-op`
**Plugin:** `oxc`

## What it does

Checks for erasing operations, e.g., `x * 0`.
Based on [https://rust-lang.github.io/rust-clippy/master/#/erasing_op](https://rust-lang.github.io/rust-clippy/master/#/erasing_op)

## Why is this bad?

The whole expression can be replaced by zero. This is most likely not the intended outcome and should probably be corrected.

## Examples

Examples of incorrect code for this rule:
javascript
`let x = 1;
let y = x * 0;`
Examples of correct code for this rule:
javascript
`let x = 1;
let y = 0;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/erasing-op": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/erasing-op": "error",
},
});`bash
`oxlint --deny oxc/erasing-op`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/erasing_op.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Ferasing-op)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/erasing-op.html)
- [oxc project](https://github.com/oxc-project/oxc)