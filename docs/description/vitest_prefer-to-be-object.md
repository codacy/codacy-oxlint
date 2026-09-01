# Prefer To Be Object (vitest)

**Pattern ID:** `vitest_prefer-to-be-object`
**Plugin:** `vitest`

## What it does

This rule enforces using `toBeObject()` to check if a value is of type `Object`.

## Why is this bad?

Using other methods such as `toBeInstanceOf(Object)` or `instanceof Object` can be less clear and potentially misleading. Enforcing the use of `toBeObject()` provides more explicit and readable code, making your intentions clear and improving the overall maintainability and readability of your tests.

## Examples

Examples of incorrect code for this rule:
js
`expectTypeOf({}).toBeInstanceOf(Object);
expectTypeOf({} instanceof Object).toBeTruthy();`
Examples of correct code for this rule:
js
`expectTypeOf({}).toBeObject();
expectTypeOf({}).toBeObject();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-to-be-object": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-to-be-object": "error",
},
});`bash
`oxlint --deny vitest/prefer-to-be-object --vitest-plugin`

## Version

This rule was added in v0.9.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_to_be_object.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-to-be-object)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-object.html)
- [oxc project](https://github.com/oxc-project/oxc)