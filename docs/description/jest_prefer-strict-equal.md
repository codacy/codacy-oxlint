# Prefer Strict Equal (jest)

**Pattern ID:** `jest_prefer-strict-equal`
**Plugin:** `jest`

## What it does

This rule triggers a warning if `toEqual()` is used to assert equality.

## Why is this bad?

The `toEqual()` matcher performs a deep equality check but ignores `undefined` values in objects and arrays. This can lead to false positives where tests pass when they should fail. `toStrictEqual()` provides more accurate comparison by checking for `undefined` values.

## Examples

Examples of incorrect code for this rule:
javascript
`expect({ a: "a", b: undefined }).toEqual({ a: "a" });`
Examples of correct code for this rule:
javascript
`expect({ a: "a", b: undefined }).toStrictEqual({ a: "a" });`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-strict-equal": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-strict-equal": "error",
},
});`bash
`oxlint --deny jest/prefer-strict-equal --jest-plugin`

## Version

This rule was added in v0.2.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_strict_equal.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-strict-equal)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-strict-equal.html)
- [oxc project](https://github.com/oxc-project/oxc)