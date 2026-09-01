# No New Require (node)

**Pattern ID:** `node_no-new-require`
**Plugin:** `node`

## What it does

Warn about calling `new` on `require`.

## Why is this bad?

The `require` function is used to include modules and might return a constructor. As this is not always the case this can be confusing.

## Examples

Examples of incorrect code for this rule:
js
`var appHeader = new require("app-header");`
Examples of correct code for this rule:
js
`var AppHeader = require("app-header");
var appHeader = new AppHeader();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/no-new-require": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/no-new-require": "error",
},
});`bash
`oxlint --deny node/no-new-require --node-plugin`

## Version

This rule was added in v0.10.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/no_new_require.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fno-new-require)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/no-new-require.html)
- [oxc project](https://github.com/oxc-project/oxc)