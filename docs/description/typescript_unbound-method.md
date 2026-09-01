# Unbound Method (typescript)

**Pattern ID:** `typescript_unbound-method`
**Plugin:** `typescript`

## What it does

This rule enforces that unbound methods are called with their expected scope.

## Why is this bad?

When you extract a method from an object and call it separately, the `this` context is lost. This can lead to runtime errors or unexpected behavior, especially with methods that rely on `this` to access instance properties or other methods.

## Examples

Examples of incorrect code for this rule:
ts
`class MyClass {
private value = 42;
getValue() {
return this.value;
}
processValue() {
return this.value * 2;
}
}
const instance = new MyClass();
// Unbound method - loses 'this' context
const getValue = instance.getValue;
getValue(); // Runtime error: cannot read property 'value' of undefined
// Passing unbound method as callback
[1, 2, 3].map(instance.processValue); // 'this' will be undefined
// Destructuring methods
const { getValue: unboundGetValue } = instance;
unboundGetValue(); // Runtime error`
Examples of correct code for this rule:
ts
`class MyClass {
private value = 42;
getValue() {
return this.value;
}
processValue() {
return this.value * 2;
}
}
const instance = new MyClass();
// Call method on instance
const value = instance.getValue(); // Correct
// Bind method to preserve context
const boundGetValue = instance.getValue.bind(instance);
boundGetValue(); // Correct
// Use arrow function to preserve context
[1, 2, 3].map(() => instance.processValue()); // Correct
// Use arrow function in class for auto-binding
class MyClassWithArrow {
private value = 42;
getValue = () => {
return this.value;
};
}
const instance2 = new MyClassWithArrow();
const getValue = instance2.getValue; // Safe - arrow function preserves 'this'
getValue(); // Correct`

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
"typescript/unbound-method": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/unbound-method": "error",
},
});`bash
`oxlint --type-aware --deny typescript/unbound-method`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/unbound_method.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/unbound-method/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/unbound_method/unbound_method.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/unbound-method.html)
- [oxc project](https://github.com/oxc-project/oxc)