# No Use Before Define (eslint)

**Pattern ID:** `eslint_no-use-before-define`
**Plugin:** `eslint`

## What it does

Disallows using variables before they are defined.

## Why is this bad?

Referencing identifiers before their declarations can hide bugs and make code order-dependent and difficult to reason about.

## Examples

Examples of incorrect code for this rule:
ts
`new A();
var A = class {};`
Examples of correct code for this rule:
ts
`var A = class {};
new A();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-use-before-define": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-use-before-define": "error",
},
});`bash
`oxlint --deny no-use-before-define`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_use_before_define.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-use-before-define)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-use-before-define)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-use-before-define.html)
- [oxc project](https://github.com/oxc-project/oxc)