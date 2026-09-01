# Require Test Timeout (vitest)

**Pattern ID:** `vitest_require-test-timeout`
**Plugin:** `vitest`

## What it does

Requires every test to have a timeout specified, either as a numeric third argument, a `{ timeout }` option, or via `vi.setConfig({ testTimeout: ... })`.

## Why is this bad?

Tests without an explicit timeout rely on the default, which may be too generous to catch performance regressions or too short for slow CI environments, leading to flaky failures.

## Examples

Examples of incorrect code for this rule:
js
`it("slow test", async () => {
await doSomethingSlow();
});`
Examples of correct code for this rule:
js
`// good (numeric timeout)
test("slow test", async () => {
await doSomethingSlow();
}, 1000);
// good (options object)
test("slow test", { timeout: 1000 }, async () => {
await doSomethingSlow();
});
// good (file-level)
vi.setConfig({ testTimeout: 1000 });
test("slow test", async () => {
await doSomethingSlow();
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/require-test-timeout": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/require-test-timeout": "error",
},
});`bash
`oxlint --deny vitest/require-test-timeout --vitest-plugin`

## Version

This rule was added in v1.58.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/require_test_timeout.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-test-timeout.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Frequire-test-timeout)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-test-timeout.html)
- [oxc project](https://github.com/oxc-project/oxc)