# No Namespace (typescript)

**Pattern ID:** `typescript_no-namespace`
**Plugin:** `typescript`

## What it does

Disallow TypeScript namespaces.

## Why is this bad?

TypeScript historically allowed a form of code organization called "custom modules" (module Example {}), later renamed to "namespaces" (namespace Example). Namespaces are an outdated way to organize TypeScript code. ES2015 module syntax is now preferred (`import`/`export`).

## Examples

Examples of incorrect code for this rule:
typescript
`module foo {}
namespace foo {}
declare module foo {}
declare namespace foo {}`
Examples of correct code for this rule:
typescript
`declare module "foo" {}
// anything inside a d.ts file`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-namespace": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-namespace": "error",
},
});`bash
`oxlint --deny typescript/no-namespace`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_namespace.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-namespace/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-namespace)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-namespace.html)
- [oxc project](https://github.com/oxc-project/oxc)