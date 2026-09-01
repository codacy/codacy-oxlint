# Prefer Structured Clone (unicorn)

**Pattern ID:** `unicorn_prefer-structured-clone`
**Plugin:** `unicorn`

## What it does

Prefer using `structuredClone` to create a deep clone.

## Why is this bad?

`structuredClone` is the modern way to create a deep clone of a value.

## Examples

Examples of incorrect code for this rule:
js
`const clone = JSON.parse(JSON.stringify(foo));
const clone = _.cloneDeep(foo);`
Examples of correct code for this rule:
js
`const clone = structuredClone(foo);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-structured-clone": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-structured-clone": "error",
},
});`bash
`oxlint --deny unicorn/prefer-structured-clone`

## Version

This rule was added in v0.9.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_structured_clone.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-structured-clone.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-structured-clone)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.html)
- [oxc project](https://github.com/oxc-project/oxc)