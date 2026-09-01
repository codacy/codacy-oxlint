# Prefer Array Flat (unicorn)

**Pattern ID:** `unicorn_prefer-array-flat`
**Plugin:** `unicorn`

## What it does

Prefers `Array#flat()` over legacy techniques to flatten arrays.

## Why is this bad?

ES2019 introduced a new method `Array#flat()` that flatten arrays.
This rule aims to standardize the use of `Array#flat()` over legacy techniques to flatten arrays.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = array.flatMap((x) => x);
const foo = array.reduce((a, b) => a.concat(b), []);
const foo = array.reduce((a, b) => [...a, ...b], []);
const foo = [].concat(maybeArray);
const foo = [].concat(...array);
const foo = [].concat.apply([], array);
const foo = Array.prototype.concat.apply([], array);
const foo = Array.prototype.concat.call([], maybeArray);
const foo = Array.prototype.concat.call([], ...array);`
Examples of correct code for this rule:
javascript
`const foo = array.flat();
const foo = [maybeArray].flat();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-array-flat": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-array-flat": "error",
},
});`bash
`oxlint --deny unicorn/prefer-array-flat`

## Version

This rule was added in v0.0.20.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_array_flat.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-array-flat)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat.html)
- [oxc project](https://github.com/oxc-project/oxc)