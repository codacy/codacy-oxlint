# No New (eslint)

**Pattern ID:** `eslint_no-new`
**Plugin:** `eslint`

## What it does

Disallow new operators outside of assignments or comparisons.

## Why is this bad?

Calling new without assigning or comparing it the reference is thrown away and in many cases the constructor can be replaced with a function.

## Examples

Examples of incorrect code for this rule:
javascript
`new Person();
() => {
new Date();
};`
Examples of correct code for this rule:
javascript
`var a = new Date()(() => new Date());`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-new": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-new": "error",
},
});`bash
`oxlint --deny no-new`

## Version

This rule was added in v0.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_new.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-new)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-new)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new.html)
- [oxc project](https://github.com/oxc-project/oxc)