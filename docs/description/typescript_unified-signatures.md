# Unified Signatures (typescript)

**Pattern ID:** `typescript_unified-signatures`
**Plugin:** `typescript`

## What it does

Disallow overload signatures that can be unified into one.

## Why is this bad?

Duplicate overload signatures that only differ by a single type, or by an optional/rest parameter, are harder to maintain and read than a single unified signature.

## Examples

Examples of incorrect code for this rule:
ts
`function f(a: number): void;
function f(a: string): void;`
Examples of correct code for this rule:
ts
`function f(a: number | string): void;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/unified-signatures": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/unified-signatures": "error",
},
});`bash
`oxlint --deny typescript/unified-signatures`

## Version

This rule was added in v1.48.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/unified_signatures.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/unified-signatures/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Funified-signatures)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/unified-signatures.html)
- [oxc project](https://github.com/oxc-project/oxc)