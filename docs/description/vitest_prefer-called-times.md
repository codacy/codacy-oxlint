# Prefer Called Times (vitest)

**Pattern ID:** `vitest_prefer-called-times`
**Plugin:** `vitest`

## What it does

This rule aims to enforce the use of `toBeCalledTimes(1)` or `toHaveBeenCalledTimes(1)` over `toBeCalledOnce()` or `toHaveBeenCalledOnce()`.

## Why is this bad?

This rule aims to enforce the use of `toBeCalledTimes(1)` or `toHaveBeenCalledTimes(1)` over `toBeCalledOnce()` or `toHaveBeenCalledOnce()`.

## Examples

Examples of incorrect code for this rule:
js
`test("foo", () => {
const mock = vi.fn();
mock("foo");
expect(mock).toBeCalledOnce();
expect(mock).toHaveBeenCalledOnce();
});`
Examples of correct code for this rule:
js
`test("foo", () => {
const mock = vi.fn();
mock("foo");
expect(mock).toBeCalledTimes(1);
expect(mock).toHaveBeenCalledTimes(1);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-called-times": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-called-times": "error",
},
});`bash
`oxlint --deny vitest/prefer-called-times --vitest-plugin`

## Version

This rule was added in v1.35.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_called_times.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-times.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-called-times)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-times.html)
- [oxc project](https://github.com/oxc-project/oxc)