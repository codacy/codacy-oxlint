# No Object As Default Parameter (unicorn)

**Pattern ID:** `unicorn_no-object-as-default-parameter`
**Plugin:** `unicorn`

## What it does

Disallow the use of an object literal as a default value for a parameter.

## Why is this bad?

Default parameters should not be passed to a function through an object literal. The `foo = {a: false}` parameter works fine if only used with one option. As soon as additional options are added, you risk replacing the whole `foo = {a: false, b: true}` object when passing only one option: `{a: true}`. For this reason, object destructuring should be used instead.

## Examples

Examples of incorrect code for this rule:
javascript
`function foo(foo = { a: false }) {}`
Examples of correct code for this rule:
javascript
`function foo({ a = false } = {}) {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-object-as-default-parameter": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-object-as-default-parameter": "error",
},
});`bash
`oxlint --deny unicorn/no-object-as-default-parameter`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_object_as_default_parameter.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-object-as-default-parameter)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.html)
- [oxc project](https://github.com/oxc-project/oxc)