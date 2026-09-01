# No Meaningless Void Operator (typescript)

**Pattern ID:** `typescript_no-meaningless-void-operator`
**Plugin:** `typescript`

## What it does

This rule disallows the void operator when its argument is already of type void or `undefined`.

## Why is this bad?

The void operator is useful when you want to execute an expression and force it to evaluate to `undefined`. However, using void on expressions that are already of type void or `undefined` is meaningless and adds unnecessary complexity to the code.

## Examples

Examples of incorrect code for this rule:
ts
`function foo(): void {
return;
}
void foo(); // meaningless, foo() already returns void
void undefined; // meaningless, undefined is already undefined
async function bar() {
void (await somePromise); // meaningless if somePromise resolves to void
}`
Examples of correct code for this rule:
ts
`function getValue(): number {
return 42;
}
void getValue(); // meaningful, converts number to void
void console.log("hello"); // meaningful, console.log returns undefined but we want to be explicit
function processData() {
// some processing
}
processData(); // no void needed since we don't care about return value`

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
"typescript/no-meaningless-void-operator": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-meaningless-void-operator": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-meaningless-void-operator`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_meaningless_void_operator.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-meaningless-void-operator/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_meaningless_void_operator/no_meaningless_void_operator.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-meaningless-void-operator.html)
- [oxc project](https://github.com/oxc-project/oxc)