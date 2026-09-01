# Prefer Arrow Callback (eslint)

**Pattern ID:** `eslint_prefer-arrow-callback`
**Plugin:** `eslint`

## What it does

Requires using arrow functions for callbacks.

## Why is this bad?

Arrow functions are generally better suited for callbacks because they:
- inherit `this` from the surrounding scope, avoiding a common source of bugs;
- are shorter and easier to read;
- cannot be used as constructors, which is desirable for callbacks.

## Examples

Examples of incorrect code for this rule:
js
`foo(function (a) {
return a;
});
foo(
function () {
return this.a;
}.bind(this),
);`
Examples of correct code for this rule:
js
`foo((a) => a);
foo(function* () {
yield;
});
foo(function () {
this;
});
foo(function bar() {
bar();
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-arrow-callback": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-arrow-callback": "error",
},
});`bash
`oxlint --deny prefer-arrow-callback`

## Version

This rule was added in v1.65.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_arrow_callback.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-arrow-callback)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-arrow-callback.html)
- [oxc project](https://github.com/oxc-project/oxc)