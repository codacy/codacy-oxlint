# No Case Declarations (eslint)

**Pattern ID:** `eslint_no-case-declarations`
**Plugin:** `eslint`

## What it does

Disallow lexical declarations in case clauses.

## Why is this bad?

The reason is that the lexical declaration is visible in the entire switch block but it only gets initialized when it is assigned, which will only happen if the case where it is defined is reached.

## Examples

Examples of incorrect code for this rule:
javascript
`switch (foo) {
case 1:
let x = 1;
break;
case 2:
const y = 2;
break;
case 3:
function f() {}
break;
default:
class C {}
}`
Examples of correct code for this rule:
javascript
`switch (foo) {
case 1: {
let x = 1;
break;
}
case 2: {
const y = 2;
break;
}
case 3: {
function f() {}
break;
}
default: {
class C {}
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-case-declarations": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-case-declarations": "error",
},
});`bash
`oxlint --deny no-case-declarations`

## Version

This rule was added in v0.0.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_case_declarations.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-case-declarations)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-case-declarations)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-case-declarations.html)
- [oxc project](https://github.com/oxc-project/oxc)