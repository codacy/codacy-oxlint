# Consistent Indexed Object Style (typescript)

**Pattern ID:** `typescript_consistent-indexed-object-style`
**Plugin:** `typescript`

## What it does

Choose between requiring either `Record` type or indexed signature types.
These two types are equivalent, this rule enforces consistency in picking one style over the other:
ts
`type Foo = Record<string, unknown>;
type Foo = {
[key: string]: unknown;
};`

## Why is this bad?

Inconsistent style for indexed object types can harm readability in a project.

## Examples

Examples of incorrect code for this rule with `consistent-indexed-object-style: ["error", "record"]` (default):
ts
`interface Foo {
[key: string]: unknown;
}
type Foo = {
[key: string]: unknown;
};`
Examples of correct code for this rule with `consistent-indexed-object-style: ["error", "record"]` (default):
ts
`type Foo = Record<string, unknown>;`
Examples of incorrect code for this rule with `consistent-indexed-object-style: ["error", "index-signature"]`:
ts
`type Foo = Record<string, unknown>;`
Examples of correct code for this rule with `consistent-indexed-object-style: ["error", "index-signature"]`:
ts
`interface Foo {
[key: string]: unknown;
}
type Foo = {
[key: string]: unknown;
};`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/consistent-indexed-object-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/consistent-indexed-object-style": "error",
},
});`bash
`oxlint --deny typescript/consistent-indexed-object-style`

## Version

This rule was added in v0.4.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/consistent_indexed_object_style.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/consistent-indexed-object-style/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fconsistent-indexed-object-style)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-indexed-object-style.html)
- [oxc project](https://github.com/oxc-project/oxc)