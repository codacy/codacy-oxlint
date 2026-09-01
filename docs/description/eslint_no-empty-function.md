# No Empty Function (eslint)

**Pattern ID:** `eslint_no-empty-function`
**Plugin:** `eslint`

## What it does

Disallows the usage of empty functions.

## Why is this bad?

Empty functions can reduce readability because readers need to guess whether it's intentional or not. So writing a clear comment for empty functions is a good practice.

## Examples

Examples of incorrect code for this rule:
typescript
`function foo() {}
const bar = () => {};
class Foo {
constructor();
someMethod() {}
set bar(value) {}
}`
Examples of correct code for this rule:
typescript
`function foo() {
// do nothing
}
function foo() {
return;
}
const add = (a, b) => a + b;
class Foo {
// constructor body is empty, but it declares a private property named
// `_name`
constructor(private _name: string) {}
public get name() {
return this._name;
}
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-empty-function": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-empty-function": "error",
},
});`bash
`oxlint --deny no-empty-function`

## Version

This rule was added in v0.3.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_empty_function.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-empty-function)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-empty-function)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-function.html)
- [oxc project](https://github.com/oxc-project/oxc)