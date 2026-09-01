# No Empty Pattern (eslint)

**Pattern ID:** `eslint_no-empty-pattern`
**Plugin:** `eslint`

## What it does

Disallow empty destructuring patterns.

## Why is this bad?

When using destructuring, it’s possible to create a pattern that has no effect. This happens when empty curly braces are used to the right of an embedded object destructuring pattern, such as:
JavaScript
`// doesn't create any variables
var {a: {}} = foo;`
In this code, no new variables are created because a is just a location helper while the `{}` is expected to contain the variables to create, such as:
JavaScript
`// creates variable b
var {a: { b }} = foo;`
In many cases, the empty object pattern is a mistake where the author intended to use a default value instead, such as:
JavaScript
`// creates variable a
var {a = {}} = foo;`
The difference between these two patterns is subtle, especially because the problematic empty pattern looks just like an object literal.

## Examples

JavaScript
`var {} = foo;
var [] = foo;
var {a: {}} = foo;
var {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-empty-pattern": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-empty-pattern": "error",
},
});`bash
`oxlint --deny no-empty-pattern`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_empty_pattern.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-empty-pattern)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-empty-pattern)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-pattern.html)
- [oxc project](https://github.com/oxc-project/oxc)