# No Useless Computed Key (eslint)

**Pattern ID:** `eslint_no-useless-computed-key`
**Plugin:** `eslint`

## What it does

Disallow unnecessary computed property keys in objects and classes.

## Why is this bad?

It’s unnecessary to use computed properties with literals such as:
js
`const foo = { ["a"]: "b" };`
The code can be rewritten as:
js
`const foo = { a: "b" };`

## Examples

Examples of incorrect code for this rule:
js
`const a = { ["0"]: 0 };
const b = { ["0+1,234"]: 0 };
const c = { [0]: 0 };
const e = { ["x"]() {} };
class Foo {
["foo"] = "bar";
[0]() {}
static ["foo"] = "bar";
get ["b"]() {}
set ["c"](value) {}
}`
Examples of correct code for this rule:
js
`const a = { a: 0 };
const b = { 0: 0 };
const c = { x() {} };
const e = { "0+1,234": 0 };
class Foo {
foo = "bar";
0() {}
a() {}
static foo = "bar";
}`
Examples of additional correct code for this rule:
js
`const c = {
__proto__: foo, // defines object's prototype
["__proto__"]: bar, // defines a property named "__proto__"
};
class Foo {
["constructor"]; // instance field named "constructor"
constructor() {} // the constructor of this class
static ["constructor"]; // static field named "constructor"
static ["prototype"]; // runtime error, it would be a parsing error without `[]`
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-useless-computed-key": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-useless-computed-key": "error",
},
});`bash
`oxlint --deny no-useless-computed-key`

## Version

This rule was added in v1.16.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_useless_computed_key.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-useless-computed-key)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-useless-computed-key)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-computed-key.html)
- [oxc project](https://github.com/oxc-project/oxc)