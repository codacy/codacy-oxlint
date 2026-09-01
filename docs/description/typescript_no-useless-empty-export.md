# No Useless Empty Export (typescript)

**Pattern ID:** `typescript_no-useless-empty-export`
**Plugin:** `typescript`

## What it does

Disallow empty exports that don't change anything in a module file.

## Why is this bad?

An empty `export {}` statement is sometimes useful in TypeScript code to turn a file that would otherwise be a script file into a module file. Per the [TypeScript Handbook Modules page](https://www.typescriptlang.org/docs/handbook/modules/introduction.html):
In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module. Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).
However, an `export {}` statement does nothing if there are any other top-level import or export statements in a file.
This rule reports an `export {}` that doesn't do anything in a file already using ES modules.

## Examples

Examples of incorrect code for this rule:
ts
`export const value = "Hello, world!";
export {};`
Examples of correct code for this rule:
ts
`export const value = "Hello, world!";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-useless-empty-export": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-useless-empty-export": "error",
},
});`bash
`oxlint --deny typescript/no-useless-empty-export`

## Version

This rule was added in v0.4.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_useless_empty_export.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-useless-empty-export/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-useless-empty-export)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-useless-empty-export.html)
- [oxc project](https://github.com/oxc-project/oxc)