# No Extra Bind (eslint)

**Pattern ID:** `eslint_no-extra-bind`
**Plugin:** `eslint`

## What it does

Disallow unnecessary calls to `.bind()`.

## Why is this bad?

This rule is aimed at avoiding the unnecessary use of `bind()` and as such will warn whenever an immediately-invoked function expression (IIFE) is using `bind()` and doesn’t have an appropriate `this` value. This rule won’t flag usage of `bind()` that includes function argument binding.

## Examples

Examples of incorrect code for this rule:
js
`const x = function () {
foo();
}.bind(bar);
const z = (() => {
this.foo();
}).bind(this);`
Examples of correct code for this rule:
js
`const x = function () {
this.foo();
}.bind(bar);
const y = function (a) {
return a + 1;
}.bind(foo, bar);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-extra-bind": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-extra-bind": "error",
},
});`bash
`oxlint --deny no-extra-bind`

## Version

This rule was added in v1.1.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_extra_bind.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-extra-bind)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-extra-bind)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-bind.html)
- [oxc project](https://github.com/oxc-project/oxc)