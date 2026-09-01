# Explicit Function Return Type (typescript)

**Pattern ID:** `typescript_explicit-function-return-type`
**Plugin:** `typescript`

## What it does

This rule enforces that functions have an explicit return type annotation.

## Why is this bad?

Explicit return types make it clearer what type is returned by a function. Making the type returned by a function obvious allows the reader to infer what the function does and how it can be used from a quick glance.
Another benefit of explicit return types is the potential for a speed up of type checking in large codebases with many large functions.

## Examples

Examples of incorrect code for this rule:
ts
`// Should indicate that no value is returned (void)
function test() {
return;
}
// Should indicate that a number is returned
var fn = function () {
return 1;
};
// Should indicate that a string is returned
var arrowFn = () => "test";
class Test {
// Should indicate that no value is returned (void)
method() {
return;
}
}`
Examples of correct code for this rule:
ts
`// No return value should be expected (void)
function test(): void {
return;
}
// A return value of type number
var fn = function (): number {
return 1;
};
// A return value of type string
var arrowFn = (): string => "test";
class Test {
// No return value should be expected (void)
method(): void {
return;
}
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/explicit-function-return-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/explicit-function-return-type": "error",
},
});`bash
`oxlint --deny typescript/explicit-function-return-type`

## Version

This rule was added in v0.4.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/explicit_function_return_type.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/explicit-function-return-type/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fexplicit-function-return-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-function-return-type.html)
- [oxc project](https://github.com/oxc-project/oxc)