# Prefer Destructuring (eslint)

**Pattern ID:** `eslint_prefer-destructuring`
**Plugin:** `eslint`

## What it does

Require destructuring from arrays and/or objects.

## Why is this bad?

With JavaScript ES2015, a new syntax was added for creating variables from an array index or object property, called destructuring. This rule enforces usage of destructuring instead of accessing a property through a member expression.

## Examples

Examples of incorrect code for this rule:
js
`// With `array` enabled
const foo = array[0];
bar.baz = array[0];
// With `object` enabled
const qux = object.qux;
const quux = object["quux"];`
Examples of correct code for this rule:
js
`// With `array` enabled
const [foo] = array;
const arr = array[someIndex];
[bar.baz] = array;
// With `object` enabled
const { baz } = object;
const obj = object.bar;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-destructuring": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-destructuring": "error",
},
});`bash
`oxlint --deny prefer-destructuring`

## Version

This rule was added in v1.10.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_destructuring.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-destructuring)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-destructuring)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-destructuring.html)
- [oxc project](https://github.com/oxc-project/oxc)