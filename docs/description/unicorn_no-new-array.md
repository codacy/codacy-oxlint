# No New Array (unicorn)

**Pattern ID:** `unicorn_no-new-array`
**Plugin:** `unicorn`

## What it does

Disallow `new Array()`.

## Why is this bad?

When using the `Array` constructor with one argument, it's not clear whether the argument is meant to be the length of the array or the only element.

## Examples

Examples of incorrect code for this rule:
javascript
`const array = new Array(1);
const array = new Array(42);
const array = new Array(foo);`
Examples of correct code for this rule:
javascript
`const array = Array.from({ length: 42 });
const array = [42];`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-new-array": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-new-array": "error",
},
});`bash
`oxlint --deny unicorn/no-new-array`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_new_array.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-new-array)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-array.html)
- [oxc project](https://github.com/oxc-project/oxc)