# No New Func (eslint)

**Pattern ID:** `eslint_no-new-func`
**Plugin:** `eslint`

## What it does

Disallow `new` operators with the `Function` object.

## Why is this bad?

Using `new Function` or `Function` can lead to code that is difficult to understand and maintain. It can introduce security risks similar to those associated with `eval` because it generates a new function from a string of code, which can be a vector for injection attacks. Additionally, it impacts performance negatively as these functions are not optimized by the JavaScript engine.

## Examples

Examples of incorrect code for this rule:
js
`var x = new Function("a", "b", "return a + b");
var x = Function("a", "b", "return a + b");
var x = Function.call(null, "a", "b", "return a + b");
var x = Function.apply(null, ["a", "b", "return a + b"]);
var x = Function.bind(null, "a", "b", "return a + b")();
var f = Function.bind(null, "a", "b", "return a + b");`
Examples of correct code for this rule:
js
`let x = function (a, b) {
return a + b;
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-new-func": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-new-func": "error",
},
});`bash
`oxlint --deny no-new-func`

## Version

This rule was added in v0.9.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_new_func.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-new-func)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-new-func)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-func.html)
- [oxc project](https://github.com/oxc-project/oxc)