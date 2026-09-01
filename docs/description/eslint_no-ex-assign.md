# No Ex Assign (eslint)

**Pattern ID:** `eslint_no-ex-assign`
**Plugin:** `eslint`

## What it does

Disallow reassigning exceptions in catch clauses.

## Why is this bad?

If a catch clause in a try statement accidentally (or purposely) assigns another value to the exception parameter, it is impossible to refer to the error from that point on. Since there is no arguments object to offer alternative access to this data, assignment of the parameter is absolutely destructive.

## Examples

Examples of incorrect code for this rule:
javascript
`try {
// code
} catch (e) {
e = 10;
}`
Examples of correct code for this rule:
javascript
`try {
// code
} catch (e) {
let val = 10;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-ex-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-ex-assign": "error",
},
});`bash
`oxlint --deny no-ex-assign`

## Version

This rule was added in v0.0.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_ex_assign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-ex-assign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-ex-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ex-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)