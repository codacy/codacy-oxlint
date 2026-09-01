# No Unreachable (eslint)

**Pattern ID:** `eslint_no-unreachable`
**Plugin:** `eslint`

## What it does

Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
This rule can be disabled for TypeScript code if `allowUnreachableCode: false` is configured in the `tsconfig.json`, as the TypeScript compiler enforces this check.

## Why is this bad?

Unreachable code after a `return`, `throw`, `continue`, or `break` statement can never be run.

## Examples

Examples of incorrect code for this rule:
ts
`function foo() {
return 2;
console.log("this will never be executed");
}`
Examples of correct code for this rule:
ts
`function foo() {
console.log("this will be executed");
return 2;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unreachable": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unreachable": "error",
},
});`bash
`oxlint --deny no-unreachable`

## Version

This rule was added in v0.4.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unreachable.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unreachable)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unreachable)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable.html)
- [oxc project](https://github.com/oxc-project/oxc)