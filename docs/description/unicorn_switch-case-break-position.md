# Switch Case Break Position (unicorn)

**Pattern ID:** `unicorn_switch-case-break-position`
**Plugin:** `unicorn`

## What it does

Enforce consistent `break`/`return`/`continue`/`throw` position in `case` clauses.

## Why is this bad?

Enforce that terminating statements (`break`, `return`, `continue`, `throw`) appear inside the block statement of a `case` clause, not after it. This can happen when refactoring — for example, removing an `if` wrapper but leaving the `break` outside the braces.

## Examples

Examples of incorrect code for this rule:
js
`switch (foo) {
case 1:
{
doStuff();
}
break;
}`
Examples of correct code for this rule:
js
`switch (foo) {
case 1: {
doStuff();
break;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/switch-case-break-position": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/switch-case-break-position": "error",
},
});`bash
`oxlint --deny unicorn/switch-case-break-position`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/switch_case_break_position.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-break-position.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fswitch-case-break-position)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/switch-case-break-position.html)
- [oxc project](https://github.com/oxc-project/oxc)