# Explicit Module Boundary Types (typescript)

**Pattern ID:** `typescript_explicit-module-boundary-types`
**Plugin:** `typescript`

## What it does

Require explicit return and argument types on exported functions' and classes' public class methods.

## Why is this bad?

Explicit types for function return values and arguments makes it clear to any calling code what is the module boundary's input and output. Adding explicit type annotations for those types can help improve code readability. It can also improve TypeScript type checking performance on larger codebases.

## Examples

Examples of incorrect code for this rule:
ts
`// Should indicate that no value is returned (void)
export function test() {
return;
}
// Should indicate that a string is returned
export var arrowFn = () => "test";
// All arguments should be typed
export var arrowFn = (arg): string => `test ${arg}`;
export var arrowFn = (arg: any): string => `test ${arg}`;
export class Test {
// Should indicate that no value is returned (void)
method() {
return;
}
}`
Examples of correct code for this rule:
ts
`// A function with no return value (void)
export function test(): void {
return;
}
// A return value of type string
export var arrowFn = (): string => "test";
// All arguments should be typed
export var arrowFn = (arg: string): string => `test ${arg}`;
export var arrowFn = (arg: unknown): string => `test ${arg}`;
export class Test {
// A class method with no return value (void)
method(): void {
return;
}
}
// The function does not apply because it is not an exported function.
function test() {
return;
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/explicit-module-boundary-types": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/explicit-module-boundary-types": "error",
},
});`bash
`oxlint --deny typescript/explicit-module-boundary-types`

## Version

This rule was added in v1.9.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/explicit_module_boundary_types.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/explicit-module-boundary-types/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fexplicit-module-boundary-types)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-module-boundary-types.html)
- [oxc project](https://github.com/oxc-project/oxc)