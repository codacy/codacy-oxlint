# Require Local Test Context For Concurrent Snapshots (vitest)

**Pattern ID:** `vitest_require-local-test-context-for-concurrent-snapshots`
**Plugin:** `vitest`

## What it does

The rule is intended to ensure that concurrent snapshot tests are executed within a properly configured local test context.

## Why is this bad?

Running snapshot tests concurrently without a proper context can lead to unreliable or inconsistent snapshots. Ensuring that concurrent tests are correctly configured with the appropriate context helps maintain accurate and stable snapshots, avoiding potential conflicts or failures.

## Examples

Examples of incorrect code for this rule:
javascript
`test.concurrent("myLogic", () => {
expect(true).toMatchSnapshot();
});
describe.concurrent("something", () => {
test("myLogic", () => {
expect(true).toMatchInlineSnapshot();
});
});`
Examples of correct code for this rule:
javascript
`test.concurrent("myLogic", ({ expect }) => {
expect(true).toMatchSnapshot();
});
test.concurrent("myLogic", (context) => {
context.expect(true).toMatchSnapshot();
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/require-local-test-context-for-concurrent-snapshots": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/require-local-test-context-for-concurrent-snapshots": "error",
},
});`bash
`oxlint --deny vitest/require-local-test-context-for-concurrent-snapshots --vitest-plugin`

## Version

This rule was added in v0.8.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/require_local_test_context_for_concurrent_snapshots.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Frequire-local-test-context-for-concurrent-snapshots)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-local-test-context-for-concurrent-snapshots.html)
- [oxc project](https://github.com/oxc-project/oxc)