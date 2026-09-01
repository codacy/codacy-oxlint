# No Instanceof Array (unicorn)

**Pattern ID:** `unicorn_no-instanceof-array`
**Plugin:** `unicorn`

## What it does

Require `Array.isArray()` instead of `instanceof Array`.

## Why is this bad?

The `instanceof Array` check doesn't work across realms/contexts. For example, frames/windows in browsers or the `vm` module in Node.js.

## Examples

Examples of incorrect code for this rule:
javascript
`array instanceof Array;
[1, 2, 3] instanceof Array;`
Examples of correct code for this rule:
javascript
`Array.isArray(array);
Array.isArray([1, 2, 3]);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-instanceof-array": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-instanceof-array": "error",
},
});`bash
`oxlint --deny unicorn/no-instanceof-array`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_instanceof_array.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-instanceof-array)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-array.html)
- [oxc project](https://github.com/oxc-project/oxc)