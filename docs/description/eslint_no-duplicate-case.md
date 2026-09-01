# No Duplicate Case (eslint)

**Pattern ID:** `eslint_no-duplicate-case`
**Plugin:** `eslint`

## What it does

Disallow duplicate case labels.

## Why is this bad?

If a switch statement has duplicate test expressions in case clauses, it is likely that a programmer copied a case clause but forgot to change the test expression.

## Examples

Examples of incorrect code for this rule:
js
`var a = 1,
one = 1;
switch (a) {
case 1:
break;
case 2:
break;
case 1: // duplicate test expression
break;
default:
break;
}
switch (a) {
case one:
break;
case 2:
break;
case one: // duplicate test expression
break;
default:
break;
}`
Examples of correct code for this rule:
js
`var a = 1,
one = 1;
switch (a) {
case 1:
break;
case 2:
break;
default:
break;
}
switch (a) {
case "1":
break;
case "2":
break;
default:
break;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-duplicate-case": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-duplicate-case": "error",
},
});`bash
`oxlint --deny no-duplicate-case`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_duplicate_case.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-duplicate-case)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-duplicate-case)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-case.html)
- [oxc project](https://github.com/oxc-project/oxc)