# Prefer Const (eslint)

**Pattern ID:** `eslint_prefer-const`
**Plugin:** `eslint`

## What it does

Requires `const` declarations for variables that are never reassigned after their initial declaration.

## Why is this bad?

If a variable is never reassigned, using the `const` declaration is better. `const` declaration tells readers, "this variable is never reassigned," reducing cognitive load and improving maintainability.

## Examples

Examples of incorrect code for this rule:
js
`let a = 3;
console.log(a);
let b;
b = 0;
console.log(b);
for (let i in [1, 2, 3]) {
console.log(i);
}`
Examples of correct code for this rule:
js
`const a = 0;
let a;
a = 0;
a = 1;
let a;
if (true) {
a = 0;
}
for (const i in [1, 2, 3]) {
console.log(i);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-const": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-const": "error",
},
});`bash
`oxlint --deny prefer-const`

## Version

This rule was added in v1.43.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_const.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-const)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-const)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-const.html)
- [oxc project](https://github.com/oxc-project/oxc)