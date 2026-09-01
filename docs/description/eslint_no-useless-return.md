# No Useless Return (eslint)

**Pattern ID:** `eslint_no-useless-return`
**Plugin:** `eslint`

## What it does

Disallows redundant return statements.

## Why is this bad?

A `return;` statement with nothing after it is redundant, and has no effect on the runtime behavior of a function. This can be confusing, so it's better to disallow these redundant statements.

## Examples

Examples of incorrect code for this rule:
js
`function foo() {
return;
}
function bar() {
doSomething();
return;
}
function baz() {
if (condition) {
doSomething();
return;
}
}`
Examples of correct code for this rule:
js
`function foo() {
return 5;
}
function bar() {
if (condition) {
return;
}
doSomething();
}
function baz() {
return doSomething();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-useless-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-useless-return": "error",
},
});`bash
`oxlint --deny no-useless-return`

## Version

This rule was added in v1.32.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_useless_return.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-useless-return)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-useless-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-return.html)
- [oxc project](https://github.com/oxc-project/oxc)