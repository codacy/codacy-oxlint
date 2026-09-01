# No Commonjs (import)

**Pattern ID:** `import_no-commonjs`
**Plugin:** `import`

## What it does

Forbids the use of CommonJS `require` calls. Also forbids `module.exports` and `exports.*`.

## Why is this bad?

ESM modules or Typescript uses `import` and `export` syntax instead of CommonJS syntax. This rule enforces the use of more modern module systems to improve maintainability and consistency across the codebase.

## Examples

Examples of incorrect code for this rule:
js
`var mod = require("fs");
var exports = (module.exports = {});
exports.sayHello = function () {
return "Hello";
};
module.exports = "Hola";`
Examples of correct code for this rule:
js
`var a = b && require("c");
if (typeof window !== "undefined") {
require("somelib");
}
var fs = null;
try {
fs = require("fs");
} catch (error) {}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-commonjs": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-commonjs": "error",
},
});`bash
`oxlint --deny import/no-commonjs --import-plugin`

## Version

This rule was added in v0.11.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_commonjs.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-commonjs)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-commonjs.html)
- [oxc project](https://github.com/oxc-project/oxc)