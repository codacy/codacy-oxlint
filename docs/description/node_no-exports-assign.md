# No Exports Assign (node)

**Pattern ID:** `node_no-exports-assign`
**Plugin:** `node`

## What it does

Disallows assignment to `exports`.

## Why is this bad?

Directly using `exports = {}` can lead to confusion and potential bugs because it reassigns the `exports` object, which may break module exports. It is more predictable and clearer to use `module.exports` directly or in conjunction with `exports`.
This rule is aimed at disallowing `exports = {}`, but allows `module.exports = exports = {}` to avoid conflict with `n/exports-style` rule's `allowBatchAssign` option.

## Examples

Examples of incorrect code for this rule:
js
`exports = {};`
Examples of correct code for this rule:
js
`module.exports.foo = 1;
exports.bar = 2;
module.exports = {};
// allows `exports = {}` if along with `module.exports =`
module.exports = exports = {};
exports = module.exports = {};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/no-exports-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/no-exports-assign": "error",
},
});`bash
`oxlint --deny node/no-exports-assign --node-plugin`

## Version

This rule was added in v0.9.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/no_exports_assign.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-exports-assign.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fno-exports-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/no-exports-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)