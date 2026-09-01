# No Cond Assign (eslint)

**Pattern ID:** `eslint_no-cond-assign`
**Plugin:** `eslint`

## What it does

Disallow assignment operators in conditional expressions.

## Why is this bad?

In conditional statements, it is very easy to mistype a comparison operator (such as `==`) as an assignment operator (such as `=`).
There are valid reasons to use assignment operators in conditional statements. However, it can be difficult to tell whether a specific assignment was intentional.

## Examples

Examples of incorrect code for this rule:
js
`// Check the user's job title
if ((user.jobTitle = "manager")) {
// user.jobTitle is now incorrect
}`
Examples of correct code for this rule:
js
`// Check the user's job title
if (user.jobTitle === "manager") {
// correctly compared `jobTitle`
}`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-cond-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-cond-assign": "error",
},
});`bash
`oxlint --deny no-cond-assign`

## Version

This rule was added in v0.0.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_cond_assign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-cond-assign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-cond-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-cond-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)