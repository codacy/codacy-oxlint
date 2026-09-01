# Prefer To Be Truthy (vitest)

**Pattern ID:** `vitest_prefer-to-be-truthy`
**Plugin:** `vitest`

## What it does

This rule warns when `toBe(true)` is used with `expect` or `expectTypeOf`. With `--fix`, it will be replaced with `toBeTruthy()`.

## Why is this bad?

Using `toBe(true)` is less flexible and may not account for other truthy values like non-empty strings or objects. `toBeTruthy()` checks for any truthy value, which makes the tests more comprehensive and robust.

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

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_to_be_truthy.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-to-be-truthy)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.html)
- [oxc project](https://github.com/oxc-project/oxc)