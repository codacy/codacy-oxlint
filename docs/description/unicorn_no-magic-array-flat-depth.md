# No Magic Array Flat Depth (unicorn)

**Pattern ID:** `unicorn_no-magic-array-flat-depth`
**Plugin:** `unicorn`

## What it does

Disallow magic numbers for `Array.prototype.flat` depth.

## Why is this bad?

Magic numbers are hard to understand and maintain. When calling `Array.prototype.flat`, it is usually called with `1` or `Infinity`. If you are using a different number, it is better to add a comment explaining the reason for the depth provided.

## Examples

Examples of incorrect code for this rule:
javascript
`array.flat(2);
array.flat(20);`
Examples of correct code for this rule:
javascript
`array.flat(2 /* explanation */);
array.flat(1);
array.flat();
array.flat(Infinity);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-magic-array-flat-depth": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-magic-array-flat-depth": "error",
},
});`bash
`oxlint --deny unicorn/no-magic-array-flat-depth`

## Version

This rule was added in v0.4.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_magic_array_flat_depth.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-magic-array-flat-depth.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-magic-array-flat-depth)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-magic-array-flat-depth.html)
- [oxc project](https://github.com/oxc-project/oxc)