# Prefer Called Exactly Once With (vitest)

**Pattern ID:** `vitest_prefer-called-exactly-once-with`
**Plugin:** `vitest`

## What it does

It checks when a target is asserted with both `toHaveBeenCalledOnce` and `toHaveBeenCalledWith` instead of `toHaveBeenCalledExactlyOnceWith`.

## Why is this bad?

The reader must deduce from both expectations that the spy function is called once and with specific arguments.

## Examples

Examples of incorrect code for this rule:
js
`test("foo", () => {
const mock = vi.fn();
mock("foo");
expect(mock).toHaveBeenCalledOnce();
expect(mock).toHaveBeenCalledWith("foo");
});`
Examples of correct code for this rule:
js
`test("foo", () => {
const mock = vi.fn();
mock("foo");
expect(mock).toHaveBeenCalledExactlyOnceWith("foo");
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-called-exactly-once-with": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-called-exactly-once-with": "error",
},
});`bash
`oxlint --deny vitest/prefer-called-exactly-once-with --vitest-plugin`

## Version

This rule was added in v1.58.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/vitest/prefer_called_exactly_once_with.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-exactly-once-with.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-called-exactly-once-with)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-called-exactly-once-with.html)
- [oxc project](https://github.com/oxc-project/oxc)