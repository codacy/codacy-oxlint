# No Continue (eslint)

**Pattern ID:** `eslint_no-continue`
**Plugin:** `eslint`

## What it does

Disallow `continue` statements.

## Why is this bad?

The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration. When used incorrectly it makes code less testable, less readable and less maintainable. Structured control flow statements such as if should be used instead.

## Examples

Examples of incorrect code for this rule:
javascript
`var sum = 0,
i;
for (i = 0; i < 10; i++) {
if (i >= 5) {
continue;
}
sum += i;
}`
Examples of correct code for this rule:
javascript
`var sum = 0,
i;
for (i = 0; i < 10; i++) {
if (i < 5) {
sum += i;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-continue": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-continue": "error",
},
});`bash
`oxlint --deny no-continue`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_continue.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-continue)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-continue)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-continue.html)
- [oxc project](https://github.com/oxc-project/oxc)