# No Webpack Loader Syntax (import)

**Pattern ID:** `import_no-webpack-loader-syntax`
**Plugin:** `import`

## What it does

Forbids using Webpack loader syntax directly in import or require statements.

## Why is this bad?

This loader syntax is non-standard, so it couples the code to Webpack. The recommended way to specify Webpack loader configuration is in a [Webpack configuration file](https://webpack.js.org/concepts/loaders/#configuration).

## Examples

Examples of incorrect code for this rule:
javascript
`import myModule from "my-loader!my-module";
import theme from "style!css!./theme.css";
var myModule = require("my-loader!./my-module");
var theme = require("style!css!./theme.css");`
Examples of correct code for this rule:
javascript
`import myModule from "./my-module";
import theme from "./theme.css";
var myModule = require("./my-module");
var theme = require("./theme.css");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-webpack-loader-syntax": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-webpack-loader-syntax": "error",
},
});`bash
`oxlint --deny import/no-webpack-loader-syntax --import-plugin`

## Version

This rule was added in v0.7.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_webpack_loader_syntax.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-webpack-loader-syntax)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.html)
- [oxc project](https://github.com/oxc-project/oxc)