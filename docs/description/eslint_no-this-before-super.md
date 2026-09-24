# No This Before Super (eslint)

**Pattern ID:** `eslint_no-this-before-super`
**Plugin:** `eslint`

## What it does

Requires calling `super()` before using `this` or `super`.
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

In the constructor of derived classes, if `this`/`super` are used before `super()` calls, it raises a `ReferenceError`.

## Examples

Examples of incorrect code for this rule:
javascript
`class A1 extends B {
constructor() {
// super() needs to be called first
this.a = 0;
super();
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-this-before-super": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-this-before-super": "error",
},
});`bash
`oxlint --deny no-this-before-super`

## Version

This rule was added in v0.2.6.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/eslint/no_this_before_super.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-this-before-super)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-this-before-super)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-this-before-super.html)
- [oxc project](https://github.com/oxc-project/oxc)