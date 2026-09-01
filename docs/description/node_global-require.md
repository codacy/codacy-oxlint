# Global Require (node)

**Pattern ID:** `node_global-require`
**Plugin:** `node`

## What it does

Require `require()` calls to be placed at top-level module scope.

## Why is this bad?

In Node.js, module dependencies are included using the `require()` function, such as:
js
`var fs = require("fs");`
While `require()` may be called anywhere in code, some style guides prescribe that it should be called only in the top level of a module to make it easier to identify dependencies. For instance, it's arguably harder to identify dependencies when they are deeply nested inside of functions and other statements:
js
`function foo() {
if (condition) {
var fs = require("fs");
}
}`
Since `require()` does a synchronous load, it can cause performance problems when used in other locations. Further, ES6 modules mandate that import and export statements can only occur in the top level of the module's body.

## Examples

Examples of incorrect code for this rule:
js
`// calling require() inside of a function is not allowed
function readFile(filename, callback) {
var fs = require("fs");
fs.readFile(filename, callback);
}
// conditional requires like this are also not allowed
if (DEBUG) {
require("debug");
}
// a require() in a switch statement is also flagged
switch (x) {
case "1":
require("1");
break;
}
// you may not require() inside an arrow function body
var getModule = (name) => require(name);
// you may not require() inside of a function body as well
function getModule(name) {
return require(name);
}
// you may not require() inside of a try/catch block
try {
require(unsafeModule);
} catch (e) {
console.log(e);
}`
Examples of correct code for this rule:
js
`// all these variations of require() are ok
require("x");
var y = require("y");
var z;
z = require("z").initialize();
// requiring a module and using it in a function is ok
var fs = require("fs");
function readFile(filename, callback) {
fs.readFile(filename, callback);
}
// you can use a ternary to determine which module to require
var logger = DEBUG ? require("dev-logger") : require("logger");
// if you want you can require() at the end of your module
function doSomethingA() {}
function doSomethingB() {}
var x = require("x"),
z = require("z");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/global-require": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/global-require": "error",
},
});`bash
`oxlint --deny node/global-require --node-plugin`

## Version

This rule was added in v1.36.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/global_require.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fglobal-require)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/global-require.html)
- [oxc project](https://github.com/oxc-project/oxc)