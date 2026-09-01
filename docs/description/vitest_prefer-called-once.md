# Prefer Called Once (vitest)

**Pattern ID:** `vitest_prefer-called-once`
**Plugin:** `vitest`

## What it does

Substitute `toBeCalledTimes(1)` and `toHaveBeenCalledTimes(1)` with `toBeCalledOnce()` and `toHaveBeenCalledOnce()` respectively.

## Why is this bad?

The `*Times` matchers require reading the argument to know how many times a spy is expected to be called. Most of the time, you expect a method to be called once.

## Examples

Examples of incorrect code for this rule:
js
`test("foo", () => {
const mock = vi.fn();
mock("foo");
expect(mock).toBeCalledTimes(1);
expect(mock).toHaveBeenCalledTimes(1);
});`
Examples of correct code for this rule:
js
`test("foo", () => {
const mock = vi.fn();
mock("foo");
expect(mock).toBeCalledOnce();
expect(mock).toHaveBeenCalledOnce();
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-called-once": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-called-once": "error",
},
});`bash
`oxlint --deny vitest/prefer-called-once --vitest-plugin`

## Version

This rule was added in v1.39.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_called_once.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-once.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-called-once)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-once.html)
- [oxc project](https://github.com/oxc-project/oxc)