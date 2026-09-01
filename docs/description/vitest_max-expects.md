# Max Expects (vitest)

**Pattern ID:** `vitest_max-expects`
**Plugin:** `vitest`

## What it does

This rule enforces a maximum number of `expect()` calls in a single test.

## Why is this bad?

Tests with many different assertions are likely mixing multiple objectives. It is generally better to have a single objective per test to ensure that when a test fails, the problem is easy to identify.

## Examples

Examples of incorrect code for this rule:
javascript
`test("should not pass", () => {
expect(true).toBeDefined();
expect(true).toBeDefined();
expect(true).toBeDefined();
expect(true).toBeDefined();
expect(true).toBeDefined();
expect(true).toBeDefined();
});
it("should not pass", () => {
expect(true).toBeDefined();
expect(true).toBeDefined();
expect(true).toBeDefined();
expect(true).toBeDefined();
expect(true).toBeDefined();
expect(true).toBeDefined();
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/max-expects": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/max-expects": "error",
},
});`bash
`oxlint --deny vitest/max-expects --vitest-plugin`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/max_expects.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fmax-expects)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/max-expects.html)
- [oxc project](https://github.com/oxc-project/oxc)