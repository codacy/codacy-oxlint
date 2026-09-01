# Consistent Assert (unicorn)

**Pattern ID:** `unicorn_consistent-assert`
**Plugin:** `unicorn`

## What it does

Enforces consistent usage of the `assert` module.

## Why is this bad?

Inconsistent usage of the `assert` module can make code harder to follow and understand.
`assert.ok(...)` is preferred as it makes the intent of the assertion clearer.

## Examples

Examples of incorrect code for this rule:
js
`import assert from "node:assert";
assert(divide(10, 2) === 5);`
Examples of correct code for this rule:
js
`import assert from "node:assert";
assert.ok(divide(10, 2) === 5);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/consistent-assert": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/consistent-assert": "error",
},
});`bash
`oxlint --deny unicorn/consistent-assert`

## Version

This rule was added in v0.16.9.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/consistent_assert.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-assert.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fconsistent-assert)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-assert.html)
- [oxc project](https://github.com/oxc-project/oxc)