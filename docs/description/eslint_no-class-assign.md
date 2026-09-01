# No Class Assign (eslint)

**Pattern ID:** `eslint_no-class-assign`
**Plugin:** `eslint`

## What it does

Disallow reassigning class variables.
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

`ClassDeclaration` creates a variable that can be re-assigned, but the re-assignment is a mistake in most cases.

## Examples

Examples of incorrect code for this rule:
javascript
`class A {}
A = 0;`javascript
`A = 0;
class A {}`javascript
`class A {
b() {
A = 0;
}
}`javascript
`let A = class A {
b() {
A = 0;
// `let A` is shadowed by the class name.
}
};`
Examples of correct code for this rule:
javascript
`let A = class A {};
A = 0; // A is a variable.`javascript
`let A = class {
b() {
A = 0; // A is a variable.
}
};`javascript
`class A {
b(A) {
A = 0; // A is a parameter.
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-class-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-class-assign": "error",
},
});`bash
`oxlint --deny no-class-assign`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_class_assign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-class-assign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-class-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-class-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)