# No Unneeded Ternary (eslint)

**Pattern ID:** `eslint_no-unneeded-ternary`
**Plugin:** `eslint`

## What it does

Disallow ternary operators when simpler alternatives exist.

## Why is this bad?

It’s a common mistake in JavaScript to use a conditional expression to select between two Boolean values instead of using ! to convert the test to a Boolean.
Another common mistake is using a single variable as both the conditional test and the consequent. In such cases, the logical OR can be used to provide the same functionality.

## Examples

Examples of incorrect code for this rule:
js
`const isYes = answer === 1 ? true : false;
const isNo = answer === 1 ? false : true;
foo(bar ? bar : 1);`
Examples of correct code for this rule:
js
`const isYes = answer === 1;
const isNo = answer !== 1;
foo(bar || 1);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unneeded-ternary": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unneeded-ternary": "error",
},
});`bash
`oxlint --deny no-unneeded-ternary`

## Version

This rule was added in v0.15.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unneeded_ternary.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unneeded-ternary)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary.html)
- [oxc project](https://github.com/oxc-project/oxc)