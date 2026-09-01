# No Absolute Path (import)

**Pattern ID:** `import_no-absolute-path`
**Plugin:** `import`

## What it does

Forbid the import of modules using absolute paths.

## Why is this bad?

Node.js allows the import of modules using an absolute path such as `/home/xyz/file.js`. That is a bad practice as it ties the code using it to your computer, and therefore makes it unusable in packages distributed on npm for instance.

## Examples

Examples of incorrect code for this rule:
js
`import f from "/foo";
import f from "/some/path";
var f = require("/foo");
var f = require("/some/path");`
Examples of correct code for this rule:
js
`import _ from "lodash";
import foo from "foo";
import foo from "./foo";
var _ = require("lodash");
var foo = require("foo");
var foo = require("./foo");`
Examples of incorrect code for the `{ amd: true }` option:
js
`define("/foo", function (foo) {});
require("/foo", function (foo) {});`
Examples of correct code for the `{ amd: true }` option:
js
`define("./foo", function (foo) {});
require("./foo", function (foo) {});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-absolute-path": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-absolute-path": "error",
},
});`bash
`oxlint --deny import/no-absolute-path --import-plugin`

## Version

This rule was added in v0.15.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_absolute_path.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-absolute-path)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-absolute-path.html)
- [oxc project](https://github.com/oxc-project/oxc)