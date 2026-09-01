# No Unreachable Loop (eslint)

**Pattern ID:** `eslint_no-unreachable-loop`
**Plugin:** `eslint`

## What it does

Disallow loops whose body allows only one iteration.

## Why is this bad?

A loop that always exits before a second iteration is usually accidental and can be replaced with simpler control flow.

## Examples

Examples of incorrect code for this rule:
js
`for (const item of items) {
console.log(item);
break;
}`
Examples of correct code for this rule:
js
`for (const item of items) {
console.log(item);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unreachable-loop": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unreachable-loop": "error",
},
});`bash
`oxlint --deny no-unreachable-loop`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unreachable_loop.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unreachable-loop)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unreachable-loop)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable-loop.html)
- [oxc project](https://github.com/oxc-project/oxc)