# Constructor Super (eslint)

**Pattern ID:** `eslint_constructor-super`
**Plugin:** `eslint`

## What it does

Requires `super()` calls in constructors of derived classes and disallows `super()` calls in constructors of non-derived classes.
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

In JavaScript, calling `super()` in the constructor of a derived class (a class that extends another class) is required. Failing to do so will result in a ReferenceError at runtime. Conversely, calling `super()` in a non-derived class is a syntax error.

## Examples

Examples of incorrect code for this rule:
js
`// Missing super() call
class A extends B {
constructor() { }
}
// super() in non-derived class
class A {
constructor() {
super();
}
}
// super() only in some code paths
class C extends D {
constructor() {
if (condition) {
super();
}
}
}`
Examples of correct code for this rule:
js
`// Proper super() call in derived class
class A extends B {
constructor() {
super();
}
}
// No super() in non-derived class
class A {
constructor() {}
}
// super() in all code paths
class C extends D {
constructor() {
if (condition) {
super();
} else {
super();
}
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"constructor-super": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"constructor-super": "error",
},
});`bash
`oxlint --deny constructor-super`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/constructor_super.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/constructor-super)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fconstructor-super)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/constructor-super.html)
- [oxc project](https://github.com/oxc-project/oxc)