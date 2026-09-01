# Prefer Namespace Keyword (typescript)

**Pattern ID:** `typescript_prefer-namespace-keyword`
**Plugin:** `typescript`

## What it does

This rule reports when the module keyword is used instead of namespace. This rule does not report on the use of TypeScript module declarations to describe external APIs (declare module 'foo' {}).
WARNING
This rule is deprecated and will be removed in a future release.
In a future version of TypeScript and Oxlint, this will be a hard error produced by the parser.
See: [https://github.com/microsoft/TypeScript/issues/54500](https://github.com/microsoft/TypeScript/issues/54500), [https://github.com/microsoft/TypeScript/issues/62211](https://github.com/microsoft/TypeScript/issues/62211) and [https://github.com/microsoft/TypeScript/pull/62876](https://github.com/microsoft/TypeScript/pull/62876).

## Why is this bad?

Namespaces are an outdated way to organize TypeScript code. ES2015 module syntax is now preferred (`import`/`export`). For projects still using custom modules / namespaces, it's preferred to refer to them as namespaces.

## Examples

Examples of incorrect code for this rule:
typescript
`module Example {}`
Examples of correct code for this rule:
typescript
`namespace Example {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/prefer-namespace-keyword": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/prefer-namespace-keyword": "error",
},
});`bash
`oxlint --deny typescript/prefer-namespace-keyword`

## Version

This rule was added in v0.7.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_namespace_keyword.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-namespace-keyword/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fprefer-namespace-keyword)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.html)
- [oxc project](https://github.com/oxc-project/oxc)