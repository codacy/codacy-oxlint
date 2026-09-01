# No Static Only Class (unicorn)

**Pattern ID:** `unicorn_no-static-only-class`
**Plugin:** `unicorn`

## What it does

Disallow `class` declarations that exclusively contain `static` members.

## Why is this bad?

A `class` with only `static` members should just be defined as an object instead.

## Examples

Examples of incorrect code for this rule:
javascript
`class A {
static a() {}
}`
Examples of correct code for this rule:
javascript
`class A {
static a() {}
constructor() {}
}`javascript
`const X = {
foo: false,
bar() {},
};`javascript
`class X {
static #foo = false; // private field
static bar() {}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-static-only-class": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-static-only-class": "error",
},
});`bash
`oxlint --deny unicorn/no-static-only-class`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_static_only_class.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-static-only-class)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-static-only-class.html)
- [oxc project](https://github.com/oxc-project/oxc)