# Array Callback Return (eslint)

**Pattern ID:** `eslint_array-callback-return`
**Plugin:** `eslint`

## What it does

Enforce return statements in callbacks of array methods.

## Why is this bad?

Array has several methods for filtering, mapping, and folding. If we forget to write return statement in a callback of those, it’s probably a mistake. If you don’t want to use a return or don’t need the returned results, consider using .forEach instead.

## Examples

Examples of incorrect code for this rule:
javascript
`let foo = [1, 2, 3, 4];
foo.map((a) => {
console.log(a);
});`
Examples of correct code for this rule:
javascript
`let foo = [1, 2, 3, 4];
foo.map((a) => {
console.log(a);
return a;
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"array-callback-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"array-callback-return": "error",
},
});`bash
`oxlint --deny array-callback-return`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/array_callback_return.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/array-callback-return)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Farray-callback-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/array-callback-return.html)
- [oxc project](https://github.com/oxc-project/oxc)