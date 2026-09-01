# Require Awaited Expect Poll (vitest)

**Pattern ID:** `vitest_require-awaited-expect-poll`
**Plugin:** `vitest`

## What it does

This rule ensures that promises returned by `expect.poll` and `expect.element` calls are handled properly.

## Why is this bad?

`expect.poll` and `expect.element` return promises. If not awaited or returned, the test completes before the assertion resolves, meaning the test will pass regardless of whether the assertion succeeds or fails.

## Examples

Examples of incorrect code for this rule:
js
`test("element exists", () => {
asyncInjectElement();
expect.poll(() => document.querySelector(".element")).toBeInTheDocument();
});`
Examples of correct code for this rule:
js
`test("element exists", () => {
asyncInjectElement();
return expect.poll(() => document.querySelector(".element")).toBeInTheDocument();
});
test("element exists", async () => {
asyncInjectElement();
await expect.poll(() => document.querySelector(".element")).toBeInTheDocument();
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/require-awaited-expect-poll": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/require-awaited-expect-poll": "error",
},
});`bash
`oxlint --deny vitest/require-awaited-expect-poll --vitest-plugin`

## Version

This rule was added in v1.58.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/require_awaited_expect_poll.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-awaited-expect-poll.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Frequire-awaited-expect-poll)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-awaited-expect-poll.html)
- [oxc project](https://github.com/oxc-project/oxc)