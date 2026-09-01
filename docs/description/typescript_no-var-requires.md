# No Var Requires (typescript)

**Pattern ID:** `typescript_no-var-requires`
**Plugin:** `typescript`

## What it does

Disallow `require` statements except in import statements.
NOTE: This rule is intentionally missing the `allow` option from the original typescript-eslint rule. This rule is deprecated in the upstream plugin and the `typescript/no-require-imports` rule should be used instead.

## Why is this bad?

In other words, the use of forms such as var foo = require("foo") are banned. Instead use ES module imports or import foo = require("foo") imports.
typescript
`var foo = require("foo");
const foo = require("foo");
let foo = require("foo");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-var-requires": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-var-requires": "error",
},
});`bash
`oxlint --deny typescript/no-var-requires`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_var_requires.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-var-requires/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-var-requires)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-var-requires.html)
- [oxc project](https://github.com/oxc-project/oxc)