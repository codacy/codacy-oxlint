# No Nodejs Modules (import)

**Pattern ID:** `import_no-nodejs-modules`
**Plugin:** `import`

## What it does

Forbid the use of Node.js builtin modules. Can be useful for client-side web projects that do not have access to those modules.

## Why is this bad?

Node.js builtins (e.g. `fs`, `path`, `crypto`) are not available in browsers, so importing them in client bundles causes runtime failures or forces bundlers to inject heavy polyfills/shims. This increases bundle size, can leak server-only logic to the client, and may hide environment mismatches until production.

## Examples

Examples of incorrect code for this rule:
js
`import fs from "fs";
import path from "path";
var fs = require("fs");
var path = require("path");`
Examples of correct code for this rule:
js
`import _ from "lodash";
import foo from "foo";
import foo from "./foo";
var _ = require("lodash");
var foo = require("foo");
var foo = require("./foo");
/* import/no-nodejs-modules: ["error", {"allow": ["path"]}] */
import path from "path";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-nodejs-modules": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-nodejs-modules": "error",
},
});`bash
`oxlint --deny import/no-nodejs-modules --import-plugin`

## Version

This rule was added in v1.43.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_nodejs_modules.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-nodejs-modules)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-nodejs-modules.html)
- [oxc project](https://github.com/oxc-project/oxc)