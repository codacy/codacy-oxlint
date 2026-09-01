# No Invalid Void Type (typescript)

**Pattern ID:** `typescript_no-invalid-void-type`
**Plugin:** `typescript`

## What it does

Disallow `void` type usage outside return types and configured generic contexts.

## Why is this bad?

In TypeScript, `void` is primarily meaningful in return positions. Using `void` in other type locations (parameters, properties, aliases, and most unions) is usually confusing and often indicates a mistaken type design.

## Examples

Examples of incorrect code for this rule:
ts
`function takeVoid(arg: void) {}
type Alias = void;
type Union = string | void;`
Examples of correct code for this rule:
ts
`function f(): void {}
type P = Promise<void>;
type U = void | never;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-invalid-void-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-invalid-void-type": "error",
},
});`bash
`oxlint --deny typescript/no-invalid-void-type`

## Version

This rule was added in v1.47.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_invalid_void_type.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-invalid-void-type/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-invalid-void-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-invalid-void-type.html)
- [oxc project](https://github.com/oxc-project/oxc)