# No New Wrappers (eslint)

**Pattern ID:** `eslint_no-new-wrappers`
**Plugin:** `eslint`

## What it does

Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.

## Why is this bad?

The first problem is that primitive wrapper objects are, in fact, objects. That means `typeof` will return `"object"` instead of `"string"`, `"number"`, or `"boolean"`. The second problem comes with boolean objects. Every object is truthy, that means an instance of `Boolean` always resolves to `true` even when its actual value is `false`.
[https://eslint.org/docs/latest/rules/no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers)

## Examples

Examples of incorrect code for this rule:
js
`var stringObject = new String("Hello world");
var numberObject = new Number(33);
var booleanObject = new Boolean(false);
var symbolObject = new Symbol("foo"); // symbol is not a constructor`
Examples of correct code for this rule:
js
`var stringObject = "Hello world";
var stringObject2 = String(value);
var numberObject = Number(value);
var booleanObject = Boolean(value);
var symbolObject = Symbol("foo");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-new-wrappers": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-new-wrappers": "error",
},
});`bash
`oxlint --deny no-new-wrappers`

## Version

This rule was added in v0.2.10.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_new_wrappers.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-new-wrappers)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-new-wrappers)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-wrappers.html)
- [oxc project](https://github.com/oxc-project/oxc)