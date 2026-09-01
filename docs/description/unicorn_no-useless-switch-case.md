# No Useless Switch Case (unicorn)

**Pattern ID:** `unicorn_no-useless-switch-case`
**Plugin:** `unicorn`

## What it does

Disallows useless `default` cases in `switch` statements.

## Why is this bad?

An empty case before the last `default` case is useless, as the `default` case will catch it regardless.

## Examples

Examples of incorrect code for this rule:
javascript
`switch (foo) {
case 1:
default:
handleDefaultCase();
break;
}`
Examples of correct code for this rule:
javascript
`switch (foo) {
case 1:
case 2:
handleCase1And2();
break;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-useless-switch-case": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-useless-switch-case": "error",
},
});`bash
`oxlint --deny unicorn/no-useless-switch-case`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_useless_switch_case.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-useless-switch-case)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-switch-case.html)
- [oxc project](https://github.com/oxc-project/oxc)