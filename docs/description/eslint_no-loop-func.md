# No Loop Func (eslint)

**Pattern ID:** `eslint_no-loop-func`
**Plugin:** `eslint`

## What it does

Disallows function declarations and expressions inside loop statements when they reference variables declared in the outer scope that may change across iterations.

## Why is this bad?

Writing functions within loops tends to result in errors due to the way closures work in JavaScript. Functions capture variables by reference, not by value. When using `var`, which is function-scoped, all iterations share the same variable binding, leading to unexpected behavior.

## Examples

Examples of incorrect code for this rule:
js
`for (var i = 0; i < 10; i++) {
funcs[i] = function () {
return i;
};
}`
Examples of correct code for this rule:
js
`for (let i = 0; i < 10; i++) {
funcs[i] = function () {
return i;
};
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-loop-func": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-loop-func": "error",
},
});`bash
`oxlint --deny no-loop-func`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_loop_func.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-loop-func)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-loop-func)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loop-func.html)
- [oxc project](https://github.com/oxc-project/oxc)