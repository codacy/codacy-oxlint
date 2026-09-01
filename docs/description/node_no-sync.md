# No Sync (node)

**Pattern ID:** `node_no-sync`
**Plugin:** `node`

## What it does

Disallows synchronous methods from being called in Node.js code.

## Why is this bad?

In Node.js, most I/O is done through asynchronous methods. However, there are often synchronous versions of the asynchronous methods. For example, `fs.exists()` and `fs.existsSync()`. In some contexts, using synchronous operations is okay (if, as with ESLint, you are writing a command line utility). However, in other contexts the use of synchronous operations is considered a bad practice that should be avoided.

## Examples

Examples of incorrect code for this rule:
js
`fs.existsSync(somePath);
function foo() {
var contents = fs.readFileSync(somePath).toString();
}`
Examples of correct code for this rule:
js
`obj.sync();
async(function () {
// ...
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/no-sync": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/no-sync": "error",
},
});`bash
`oxlint --deny node/no-sync --node-plugin`

## Version

This rule was added in v1.71.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/no_sync.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fno-sync)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/no-sync.html)
- [oxc project](https://github.com/oxc-project/oxc)