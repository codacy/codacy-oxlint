# No Caller (eslint)

**Pattern ID:** `eslint_no-caller`
**Plugin:** `eslint`

## What it does

Disallow the use of `arguments.caller` or `arguments.callee`.

## Why is this bad?

The use of `arguments.caller` and `arguments.callee` make several code optimizations impossible. They have been deprecated in JavaScript, and their use is forbidden while in strict mode.
js
`function foo() {
var callee = arguments.callee;
}`
This rule is aimed at discouraging the use of deprecated and sub-optimal code by disallowing the use of `arguments.caller` and `arguments.callee`. As such, it will warn when `arguments.caller` and `arguments.callee` are used.
See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee) for more information.

## Examples

Examples of incorrect code for this rule:
js
`function foo(n) {
if (n <= 0) {
return;
}
arguments.callee(n - 1);
}
[1, 2, 3, 4, 5].map(function (n) {
return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});`
Examples of correct code for this rule:
js
`function foo(n) {
if (n <= 0) {
return;
}
foo(n - 1);
}
[1, 2, 3, 4, 5].map(function factorial(n) {
return !(n > 1) ? 1 : factorial(n - 1) * n;
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-caller": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-caller": "error",
},
});`bash
`oxlint --deny no-caller`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_caller.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-caller)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-caller)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-caller.html)
- [oxc project](https://github.com/oxc-project/oxc)