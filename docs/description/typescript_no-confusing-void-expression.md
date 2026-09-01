# No Confusing Void Expression (typescript)

**Pattern ID:** `typescript_no-confusing-void-expression`
**Plugin:** `typescript`

## What it does

This rule forbids using void expressions in confusing locations such as arrow function returns.

## Why is this bad?

The void operator is useful when you want to execute an expression while evaluating to `undefined`. However, it can be confusing when used in places where the return value is meaningful, particularly in arrow functions and conditional expressions.

## Examples

Examples of incorrect code for this rule:
ts
`// arrow function returning void expression
const foo = () => void bar();
// conditional expression
const result = condition ? void foo() : bar();
// void in conditional
if (void foo()) {
// ...
}`
Examples of correct code for this rule:
ts
`// proper use of void
void foo();
// explicit return statement
const foo = () => {
bar();
return;
};
// statement expression
foo();
// IIFE with void
void (function () {
console.log("immediately invoked");
})();`

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
"typescript/no-confusing-void-expression": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-confusing-void-expression": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-confusing-void-expression`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_confusing_void_expression.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-confusing-void-expression/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_confusing_void_expression/no_confusing_void_expression.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-void-expression.html)
- [oxc project](https://github.com/oxc-project/oxc)