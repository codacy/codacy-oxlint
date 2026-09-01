# No Shadow (eslint)

**Pattern ID:** `eslint_no-shadow`
**Plugin:** `eslint`

## What it does

Disallows variable declarations from shadowing variables declared in the outer scope.

## Why is this bad?

Shadowing is the process by which a local variable shares the same name as a variable in its containing scope. This can cause confusion, as it may be unclear which variable is being referenced, and can lead to bugs that are difficult to diagnose.

## Examples

Examples of incorrect code for this rule:
js
`var x = 1;
function foo() {
var x = 2; // x shadows the outer x
}`
Examples of correct code for this rule:
js
`var x = 1;
function foo() {
var y = 2; // different name, no shadowing
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-shadow": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-shadow": "error",
},
});`bash
`oxlint --deny no-shadow`

## Version

This rule was added in v1.48.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_shadow.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-shadow)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-shadow)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow.html)
- [oxc project](https://github.com/oxc-project/oxc)