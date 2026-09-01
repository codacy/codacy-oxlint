# Prefer To Be Falsy (vitest)

**Pattern ID:** `vitest_prefer-to-be-falsy`
**Plugin:** `vitest`

## What it does

This rule warns when `toBe(false)` is used with `expect` or `expectTypeOf`. With `--fix`, it will be replaced with `toBeFalsy()`.

## Why is this bad?

Using `toBe(false)` is less expressive and may not account for other falsy values like `0`, `null`, or `undefined`. `toBeFalsy()` provides a more comprehensive check for any falsy value, improving the robustness of the tests.

## Examples

Examples of incorrect code for this rule:
javascript
`expect(foo).toBe(false);
expectTypeOf(foo).toBe(false);`
Examples of correct code for this rule:
javascript
`expect(foo).toBeFalsy();
expectTypeOf(foo).toBeFalsy();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-to-be-falsy": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-to-be-falsy": "error",
},
});`bash
`oxlint --deny vitest/prefer-to-be-falsy --vitest-plugin`

## Version

This rule was added in v0.7.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_to_be_falsy.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-to-be-falsy)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.html)
- [oxc project](https://github.com/oxc-project/oxc)