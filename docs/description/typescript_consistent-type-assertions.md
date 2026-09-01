# Consistent Type Assertions (typescript)

**Pattern ID:** `typescript_consistent-type-assertions`
**Plugin:** `typescript`

## What it does

Enforce consistent usage of TypeScript type assertions.

## Why is this bad?

Mixing assertion styles (`as` vs angle-bracket) makes code harder to read and maintain. In some codebases, type assertions are banned in favor of safer alternatives like type annotations or `satisfies`.

## Examples

Examples of incorrect code for this rule (default: `assertionStyle: "as"`):
ts
`const value = <Foo>bar;`
Examples of correct code for this rule (default: `assertionStyle: "as"`):
ts
`const value = bar as Foo;`
When `objectLiteralTypeAssertions` or `arrayLiteralTypeAssertions` are set to `never`, then the preferred syntax for type assertions on object and array literals is to use a type annotation or the `satisfies` operator instead of a type assertion.
Examples of incorrect code when `objectLiteralTypeAssertions: "never"` and `arrayLiteralTypeAssertions: "never"`:
ts
`const obj = { a: 1 } as Foo;
const arr = [1, 2] as Foo[];`
Examples of correct code when `objectLiteralTypeAssertions: "never"` and `arrayLiteralTypeAssertions: "never"`:
ts
`const obj: Foo = { a: 1 };
const obj = { a: 1 } satisfies Foo;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/consistent-type-assertions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/consistent-type-assertions": "error",
},
});`bash
`oxlint --deny typescript/consistent-type-assertions`

## Version

This rule was added in v1.44.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/consistent_type_assertions.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/consistent-type-assertions/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fconsistent-type-assertions)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-assertions.html)
- [oxc project](https://github.com/oxc-project/oxc)