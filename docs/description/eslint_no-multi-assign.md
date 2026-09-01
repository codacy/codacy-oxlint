# No Multi Assign (eslint)

**Pattern ID:** `eslint_no-multi-assign`
**Plugin:** `eslint`

## What it does

Disallow use of chained assignment expressions.

## Why is this bad?

Chaining the assignment of variables can lead to unexpected results and be difficult to read.
js
`(function () {
const foo = (bar = 0); // Did you mean `foo = bar == 0`?
bar = 1; // This will not fail since `bar` is not constant.
})();
console.log(bar); // This will output 1 since `bar` is not scoped.`

## Examples

Examples of incorrect code for this rule:
js
`var a = (b = c = 5);
const foo = (bar = "baz");
let d = (e = f);
class Foo {
a = (b = 10);
}
a = b = "quux";`
Examples of correct code for this rule:
js
`var a = 5;
var b = 5;
var c = 5;
const foo = "baz";
const bar = "baz";
let d = c;
let e = c;
class Foo {
a = 10;
b = 10;
}
a = "quux";
b = "quux";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-multi-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-multi-assign": "error",
},
});`bash
`oxlint --deny no-multi-assign`

## Version

This rule was added in v0.15.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_multi_assign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-multi-assign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-multi-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)