# Prefer Class Fields (unicorn)

**Pattern ID:** `unicorn_prefer-class-fields`
**Plugin:** `unicorn`

## What it does

Prefers class field declarations over `this` assignments in constructors for static values.

## Why is this bad?

Class field declarations are more readable and less error-prone than assigning static values to `this` in the constructor. Using class fields keeps the constructor cleaner and makes the intent clearer.

## Examples

Examples of incorrect code for this rule:
ts
`class Foo {
constructor() {
this.bar = 1;
}
}
class MyError extends Error {
constructor(message: string) {
super(message);
this.name = "MyError";
}
}
class Foo {
foo = "foo";
constructor() {
this.foo = "bar";
}
}`
Examples of correct code for this rule:
js
`class Foo {
bar = 1;
}
class MyError extends Error {
name = "MyError";
}
class Foo {
foo = "bar";
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-class-fields": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-class-fields": "error",
},
});`bash
`oxlint --deny unicorn/prefer-class-fields`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_class_fields.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-class-fields.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-class-fields)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-class-fields.html)
- [oxc project](https://github.com/oxc-project/oxc)