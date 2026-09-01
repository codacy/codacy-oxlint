# No Eval (eslint)

**Pattern ID:** `eslint_no-eval`
**Plugin:** `eslint`

## What it does

Disallows referencing the `eval` function. This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by disallowing the use of the `eval()` function.

## Why is this bad?

JavaScript’s `eval()` function is potentially dangerous and is often misused. Using `eval()` on untrusted code can open a program up to several different injection attacks. The use of `eval()` in most contexts can be substituted for a better, safer alternative approach to solving the problem, such as using `JSON.parse()` or `Function` constructors in safer ways.

## Examples

Examples of incorrect code for this rule:
js
`const obj = { x: "foo" },
key = "x",
value = eval("obj." + key);
(0, eval)("const a = 0");
const foo = eval;
foo("const a = 0");
this.eval("const a = 0");`
Examples of correct code for this rule:
js
`const obj = { x: "foo" },
key = "x",
value = obj[key];
class A {
foo() {
this.eval("const a = 0");
}
eval() {}
static {
this.eval("const a = 0");
}
static eval() {}
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-eval": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-eval": "error",
},
});`bash
`oxlint --deny no-eval`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_eval.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-eval)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-eval)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eval.html)
- [oxc project](https://github.com/oxc-project/oxc)