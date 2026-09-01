# Consistent Generic Constructors (typescript)

**Pattern ID:** `typescript_consistent-generic-constructors`
**Plugin:** `typescript`

## What it does

When constructing a generic class, you can specify the type arguments on either the left-hand side (as a type annotation) or the right-hand side (as part of the constructor call).
This rule enforces consistency in the way generic constructors are used.

## Why is this bad?

Inconsistent usage of generic constructors can make the code harder to read and maintain.

## Examples

Examples of incorrect code for this rule:
ts
`const a: Foo<string> = new Foo();
const a = new Foo<string>(); // prefer type annotation`
Examples of correct code for this rule:
ts
`const a = new Foo<string>();
const a: Foo<string> = new Foo(); // prefer type annotation`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/consistent-generic-constructors": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/consistent-generic-constructors": "error",
},
});`bash
`oxlint --deny typescript/consistent-generic-constructors`

## Version

This rule was added in v0.14.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/consistent_generic_constructors.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/consistent-generic-constructors/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fconsistent-generic-constructors)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-generic-constructors.html)
- [oxc project](https://github.com/oxc-project/oxc)