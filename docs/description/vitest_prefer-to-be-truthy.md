# Prefer To Be Truthy (vitest)

**Pattern ID:** `vitest_prefer-to-be-truthy`
**Plugin:** `vitest`

## What it does

This rule warns when `toBe(true)` is used with `expect` or `expectTypeOf`. With `--fix-suggestions`, it will be replaced with `toBeTruthy()`.

## Why is this bad?

When testing for truthiness, `toBeTruthy()` expresses that intent directly. Unlike `toBe(true)`, it also accepts non-boolean truthy values such as non-empty strings and objects. The replacement is a suggestion because it changes which values pass the assertion.

## Examples

Examples of incorrect code for this rule:
javascript
`expect(foo).toBe(true);
expectTypeOf(foo).toBe(true);`
Examples of correct code for this rule:
javascript
`expect(foo).toBeTruthy();
expectTypeOf(foo).toBeTruthy();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-to-be-truthy": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-to-be-truthy": "error",
},
});`bash
`oxlint --deny vitest/prefer-to-be-truthy --vitest-plugin`

## Version

This rule was added in v0.7.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/vitest/prefer_to_be_truthy.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-to-be-truthy)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.html)
- [oxc project](https://github.com/oxc-project/oxc)