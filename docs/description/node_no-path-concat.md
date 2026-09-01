# No Path Concat (node)

**Pattern ID:** `node_no-path-concat`
**Plugin:** `node`

## What it does

Disallows string concatenation with `__dirname` and `__filename`.

## Why is this bad?

In Node.js, the `__dirname` and `__filename` global variables contain the directory path and the file path of the currently executing script file, respectively. Sometimes, developers try to use these variables to create paths to other files, such as:
js
`var fullPath = __dirname + "/foo.js";`
However, this is error-prone because it doesn't account for different operating systems, which use different path separators. Using `path.join()` or `path.resolve()` is the proper way to create cross-platform file paths.

## Examples

Examples of incorrect code for this rule:
js
`const fullPath1 = __dirname + "/foo.js";
const fullPath2 = __filename + "/foo.js";
const fullPath3 = `${__dirname}/foo.js`;
const fullPath4 = `${__filename}/foo.js`;`
Examples of correct code for this rule:
js
`const fullPath1 = path.join(__dirname, "foo.js");
const fullPath2 = path.join(__filename, "foo.js");
const fullPath3 = __dirname + ".js";
const fullPath4 = __filename + ".map";
const fullPath5 = `${__dirname}_foo.js`;
const fullPath6 = `${__filename}.test.js`;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/no-path-concat": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/no-path-concat": "error",
},
});`bash
`oxlint --deny node/no-path-concat --node-plugin`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/no_path_concat.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fno-path-concat)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/no-path-concat.html)
- [oxc project](https://github.com/oxc-project/oxc)