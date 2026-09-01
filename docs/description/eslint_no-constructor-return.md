# No Constructor Return (eslint)

**Pattern ID:** `eslint_no-constructor-return`
**Plugin:** `eslint`

## What it does

Disallow returning a value from a constructor.

## Why is this bad?

In JavaScript, returning a value in the constructor of a class may be a mistake. Forbidding this pattern prevents mistakes resulting from unfamiliarity with the language or a copy-paste error.

## Examples

Examples of incorrect code for this rule:
js
`class C {
constructor() {
return 42;
}
}`
Examples of correct code for this rule:
js
`class C {
constructor() {
this.value = 42;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-constructor-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-constructor-return": "error",
},
});`bash
`oxlint --deny no-constructor-return`

## Version

This rule was added in v0.4.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_constructor_return.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-constructor-return)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-constructor-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constructor-return.html)
- [oxc project](https://github.com/oxc-project/oxc)