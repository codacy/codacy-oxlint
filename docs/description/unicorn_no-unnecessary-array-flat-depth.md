# No Unnecessary Array Flat Depth (unicorn)

**Pattern ID:** `unicorn_no-unnecessary-array-flat-depth`
**Plugin:** `unicorn`

## What it does

Disallows passing `1` to `Array.prototype.flat`.

## Why is this bad?

Passing `1` is unnecessary.

## Examples

Examples of incorrect code for this rule:
js
`foo.flat(1);`
Examples of correct code for this rule:
js
`foo.flat();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-unnecessary-array-flat-depth": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-unnecessary-array-flat-depth": "error",
},
});`bash
`oxlint --deny unicorn/no-unnecessary-array-flat-depth`

## Version

This rule was added in v0.16.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_unnecessary_array_flat_depth.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-flat-depth.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-unnecessary-array-flat-depth)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-flat-depth.html)
- [oxc project](https://github.com/oxc-project/oxc)