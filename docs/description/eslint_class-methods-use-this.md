# Class Methods Use This (eslint)

**Pattern ID:** `eslint_class-methods-use-this`
**Plugin:** `eslint`

## What it does

Enforce that class methods utilize `this`.

## Why is this bad?

For class methods that do not use `this`, you should consider converting them to `static` methods. This is not always possible or desirable, but it can help clarify that the method does not rely on instance state.
If you do convert the method into a `static` function, instances of the class that call that particular method have to be converted to a `static` call as well.

## Examples

Examples of incorrect code for this rule:
js
`class A {
foo() {
console.log("Hello World");
}
}`
Examples of correct code for this rule:
js
`class A {
foo() {
this.bar = "Hello World"; // OK, this is used
}
}
class B {
constructor() {
// OK. constructor is exempt
}
}
class C {
static foo() {
// OK. static methods aren't expected to use this.
}
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"class-methods-use-this": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"class-methods-use-this": "error",
},
});`bash
`oxlint --deny class-methods-use-this`

## Version

This rule was added in v1.16.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/class_methods_use_this.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/class-methods-use-this)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fclass-methods-use-this)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/class-methods-use-this.html)
- [oxc project](https://github.com/oxc-project/oxc)