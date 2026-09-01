# Strict Boolean Expressions (typescript)

**Pattern ID:** `typescript_strict-boolean-expressions`
**Plugin:** `typescript`

## What it does

Disallow certain types in boolean expressions.

## Why is this bad?

Forbids usage of non-boolean types in expressions where a boolean is expected. `boolean` and `never` types are always allowed. Additional types which are considered safe in a boolean context can be configured via options.
The following nodes are checked:
- Arguments to the `!`, `&&`, and `||` operators
- The condition in a conditional expression (`cond ? x : y`)
- Conditions for `if`, `for`, `while`, and `do-while` statements.

## Examples

Examples of incorrect code for this rule:
ts
`const str = "hello";
if (str) {
console.log("string");
}
const num = 42;
if (num) {
console.log("number");
}
const obj = { foo: "bar" };
if (obj) {
console.log("object");
}
declare const maybeString: string | undefined;
if (maybeString) {
console.log(maybeString);
}
const result = str && num;
const ternary = str ? "yes" : "no";`
Examples of correct code for this rule:
ts
`const str = "hello";
if (str !== "") {
console.log("string");
}
const num = 42;
if (num !== 0) {
console.log("number");
}
const obj = { foo: "bar" };
if (obj !== null) {
console.log("object");
}
declare const maybeString: string | undefined;
if (maybeString !== undefined) {
console.log(maybeString);
}
const bool = true;
if (bool) {
console.log("boolean");
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/strict-boolean-expressions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/strict-boolean-expressions": "error",
},
});`bash
`oxlint --type-aware --deny typescript/strict-boolean-expressions`

## Version

This rule was added in v1.25.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/strict_boolean_expressions.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/strict-boolean-expressions/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/strict_boolean_expressions/strict_boolean_expressions.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/strict-boolean-expressions.html)
- [oxc project](https://github.com/oxc-project/oxc)