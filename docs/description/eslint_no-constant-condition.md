# No Constant Condition (eslint)

**Pattern ID:** `eslint_no-constant-condition`
**Plugin:** `eslint`

## What it does

Disallow constant expressions in conditions.

## Why is this bad?

A constant expression (for example, a literal) as a test condition might be a typo or development trigger for a specific behavior.
This rule disallows constant expressions in the test condition of:
- `if`, `for`, `while`, or `do...while` statement
- `?`: ternary expression

## Examples

Examples of incorrect code for this rule:
js
`if (false) {
doSomethingUnfinished();
}
if (new Boolean(x)) {
doSomethingAlways();
}
if ((x ||= true)) {
doSomethingAlways();
}
do {
doSomethingForever();
} while ((x = -1));`
Examples of correct code for this rule:
js
`if (x === 0) {
doSomething();
}
while (typeof x === "undefined") {
doSomething();
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-constant-condition": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-constant-condition": "error",
},
});`bash
`oxlint --deny no-constant-condition`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_constant_condition.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-constant-condition)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-constant-condition)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-condition.html)
- [oxc project](https://github.com/oxc-project/oxc)