# Exports Style (node)

**Pattern ID:** `node_exports-style`
**Plugin:** `node`

## What it does

Enforce either `module.exports` or `exports`.

## Why is this bad?

`module.exports` and `exports` are the same instance by default. But those come to be different if one of them is modified.
js
`module.exports = {
foo: 1,
};
exports.bar = 2;`
In this case, `exports.bar` will be lost since only the instance of `module.exports` will be exported.

## Examples

Examples of incorrect code for the `"module.exports"` option:
js
`exports.foo = 1;
exports.bar = 2;`
Examples of correct code for the `"module.exports"` option:
js
`module.exports = {
foo: 1,
bar: 2,
};
module.exports.baz = 3;`
Examples of incorrect code for the `"exports"` option:
js
`module.exports = {
foo: 1,
bar: 2,
};
module.exports.baz = 3;`
Examples of correct code for the `"exports"` option:
js
`exports.foo = 1;
exports.bar = 2;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/exports-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/exports-style": "error",
},
});`bash
`oxlint --deny node/exports-style --node-plugin`

## Version

This rule was added in v1.76.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/exports_style.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fexports-style)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/exports-style.html)
- [oxc project](https://github.com/oxc-project/oxc)