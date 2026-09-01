# No Useless Constructor (eslint)

**Pattern ID:** `eslint_no-useless-constructor`
**Plugin:** `eslint`

## What it does

Disallow constructors that can be safely removed without changing how the class works.

## Why is this bad?

ES2015 provides a default class constructor if one is not specified. As such, it is unnecessary to provide an empty constructor or one that simply delegates into its parent class.
WARNING
Caveat: This lint rule will report on constructors whose sole purpose is to change the visibility of a parent constructor. This is because the rule does not have type information to determine if the parent constructor is `public`, `protected`, or `private`.

## Examples

Examples of incorrect code for this rule:
javascript
`class A {
constructor() {}
}
class B extends A {
constructor(...args) {
super(...args);
}
}`
Examples of correct code for this rule:
javascript
`class A {}
class B {
constructor() {
doSomething();
}
}
class C extends A {
constructor() {
super("foo");
}
}
class D extends A {
constructor() {
super();
doSomething();
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-useless-constructor": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-useless-constructor": "error",
},
});`bash
`oxlint --deny no-useless-constructor`

## Version

This rule was added in v0.4.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_useless_constructor.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-useless-constructor)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-useless-constructor)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-constructor.html)
- [oxc project](https://github.com/oxc-project/oxc)