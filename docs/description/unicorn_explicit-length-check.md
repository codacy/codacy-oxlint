# Explicit Length Check (unicorn)

**Pattern ID:** `unicorn_explicit-length-check`
**Plugin:** `unicorn`

## What it does

Enforce explicitly comparing the `length` or `size` property of a value.

## Why is this bad?

Using the explicit `length` or `size` properties can help make code clearer and easier to understand, as it avoids relying on implicit truthy/falsy evaluations.

## Examples

Examples of incorrect code for this rule:
javascript
`const isEmpty = foo.length == 0;
const isEmpty = foo.length < 1;
const isEmpty = 0 === foo.length;
const isEmpty = 0 == foo.length;
const isEmpty = 1 > foo.length;
const isEmpty = !foo.length;
const isEmpty = !(foo.length > 0);
const isEmptySet = !foo.size;`
Examples of correct code for this rule:
javascript
`const isEmpty = foo.length === 0;
if (foo.length > 0 || bar.length > 0) {
}
const unicorn = foo.length > 0 ? 1 : 2;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/explicit-length-check": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/explicit-length-check": "error",
},
});`bash
`oxlint --deny unicorn/explicit-length-check`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/explicit_length_check.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fexplicit-length-check)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/explicit-length-check.html)
- [oxc project](https://github.com/oxc-project/oxc)