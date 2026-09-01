# No Lonely If (eslint)

**Pattern ID:** `eslint_no-lonely-if`
**Plugin:** `eslint`

## What it does

Disallow `if` statements as the only statement in `else` blocks.

## Why is this bad?

When an `if` statement is the only statement in an `else` block, it is often clearer to use an `else if` instead.

## Examples

Examples of incorrect code for this rule:
js
`if (condition) {
// ...
} else {
if (anotherCondition) {
// ...
}
}`js
`if (condition) {
// ...
} else {
if (anotherCondition) {
// ...
} else {
// ...
}
}`
Examples of correct code for this rule:
js
`if (condition) {
// ...
} else if (anotherCondition) {
// ...
}`js
`if (condition) {
// ...
} else if (anotherCondition) {
// ...
} else {
// ...
}`js
`if (condition) {
// ...
} else {
if (anotherCondition) {
// ...
}
doSomething();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-lonely-if": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-lonely-if": "error",
},
});`bash
`oxlint --deny no-lonely-if`

## Version

This rule was added in v0.16.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_lonely_if.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-lonely-if)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-lonely-if)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-lonely-if.html)
- [oxc project](https://github.com/oxc-project/oxc)