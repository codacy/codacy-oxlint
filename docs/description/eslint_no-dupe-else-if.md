# No Dupe Else If (eslint)

**Pattern ID:** `eslint_no-dupe-else-if`
**Plugin:** `eslint`

## What it does

Disallow duplicate conditions in if-else-if chains.

## Why is this bad?

if-else-if chains are commonly used when there is a need to execute only one branch (or at most one branch) out of several possible branches, based on certain conditions. Two identical test conditions in the same chain are almost always a mistake in the code. Unless there are side effects in the expressions, a duplicate will evaluate to the same true or false value as the identical expression earlier in the chain, meaning that its branch can never execute.

## Examples

Examples of incorrect code for this rule:
javascript
`if (a) {
foo();
} else if (b) {
bar();
} else if (b) {
baz();
}`javascript
`if (a || b) {
foo();
} else if (a) {
bar();
}`javascript
`if (n === 1) {
foo();
} else if (n === 2) {
bar();
} else if (n === 3) {
baz();
} else if (n === 2) {
quux();
} else if (n === 5) {
quuux();
}`
Examples of correct code for this rule:
javascript
`if (a) {
foo();
} else if (b) {
bar();
} else if (c) {
baz();
}`javascript
`if (a || b) {
foo();
} else if (c) {
bar();
}`javascript
`if (n === 1) {
foo();
} else if (n === 2) {
bar();
} else if (n === 3) {
baz();
} else if (n === 4) {
quux();
} else if (n === 5) {
quuux();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-dupe-else-if": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-dupe-else-if": "error",
},
});`bash
`oxlint --deny no-dupe-else-if`

## Version

This rule was added in v0.0.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_dupe_else_if.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-dupe-else-if)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-dupe-else-if)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-else-if.html)
- [oxc project](https://github.com/oxc-project/oxc)