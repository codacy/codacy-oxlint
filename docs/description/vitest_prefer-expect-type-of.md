# Prefer Expect Type Of (vitest)

**Pattern ID:** `vitest_prefer-expect-type-of`
**Plugin:** `vitest`

## What it does

Enforce using `toBeTypeOf` instead of `expect(typeof ...).toBe(...)`.

## Why is this bad?

`expect(typeof value).toBe(type)` works but is awkward and produces poor failure messages. Vitest's built-in `toBeTypeOf` matcher performs the same `typeof` comparison with a clearer API and better error output.

## Examples

Examples of incorrect code for this rule:
js
`test("type checking", () => {
expect(typeof "hello").toBe("string");
expect(typeof 42).toBe("number");
expect(typeof true).toBe("boolean");
expect(typeof {}).toBe("object");
expect(typeof (() => {})).toBe("function");
expect(typeof Symbol()).toBe("symbol");
expect(typeof 123n).toBe("bigint");
expect(typeof undefined).toBe("undefined");
});`
Examples of correct code for this rule:
js
`test("type checking", () => {
expect("hello").toBeTypeOf("string");
expect(42).toBeTypeOf("number");
expect(true).toBeTypeOf("boolean");
expect({}).toBeTypeOf("object");
expect(() => {}).toBeTypeOf("function");
expect(Symbol()).toBeTypeOf("symbol");
expect(123n).toBeTypeOf("bigint");
expect(undefined).toBeTypeOf("undefined");
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-expect-type-of": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-expect-type-of": "error",
},
});`bash
`oxlint --deny vitest/prefer-expect-type-of --vitest-plugin`

## Version

This rule was added in v1.44.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_expect_type_of.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-type-of.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-expect-type-of)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-type-of.html)
- [oxc project](https://github.com/oxc-project/oxc)