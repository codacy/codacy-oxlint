# No Mixed Requires (node)

**Pattern ID:** `node_no-mixed-requires`
**Plugin:** `node`

## What it does

Disallows `require` calls to be mixed with regular variable declarations.

## Why is this bad?

In the Node.js community it is often customary to separate initializations with calls to `require` modules from other variable declarations, sometimes also grouping them by the type of module.

## Examples

Examples of incorrect code for this rule:
js
`var fs = require("fs"),
i = 0;
var async = require("async"),
debug = require("diagnostics").someFunction("my-module"),
eslint = require("eslint");`
Examples of correct code for this rule:
js
`var eventEmitter = require("events").EventEmitter,
myUtils = require("./utils"),
util = require("util"),
bar = require(getBarModuleName());
var foo = 42,
bar = "baz";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/no-mixed-requires": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/no-mixed-requires": "error",
},
});`bash
`oxlint --deny node/no-mixed-requires --node-plugin`

## Version

This rule was added in v1.71.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/no_mixed_requires.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fno-mixed-requires)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/no-mixed-requires.html)
- [oxc project](https://github.com/oxc-project/oxc)