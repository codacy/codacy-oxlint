# Prefer Expect Resolves (vitest)

**Pattern ID:** `vitest_prefer-expect-resolves`
**Plugin:** `vitest`

## What it does

Prefer `await expect(...).resolves` over `expect(await ...)` when testing promises.

## Why is this bad?

When working with promises, there are two primary ways you can test the resolved value:
- use the `resolve` modifier on `expect` (`await expect(...).resolves.<matcher>` style)
- `await` the promise and assert against its result (`expect(await ...).<matcher>` style)
While the second style is arguably less dependent on `jest`, if the promise rejects it will be treated as a general error, resulting in less predictable behaviour and output from `jest`.
Additionally, favoring the first style ensures consistency with its `rejects` counterpart, as there is no way of "awaiting" a rejection.

## Examples

Examples of incorrect code for this rule:
javascript
`it("passes", async () => {
expect(await someValue()).toBe(true);
});
it("is true", async () => {
const myPromise = Promise.resolve(true);
expect(await myPromise).toBe(true);
});`
Examples of correct code for this rule:
javascript
`it("passes", async () => {
await expect(someValue()).resolves.toBe(true);
});
it("is true", async () => {
const myPromise = Promise.resolve(true);
await expect(myPromise).resolves.toBe(true);
});
it("errors", async () => {
await expect(Promise.reject(new Error("oh noes!"))).rejects.toThrowError("oh noes!");
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-expect-resolves": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-expect-resolves": "error",
},
});`bash
`oxlint --deny vitest/prefer-expect-resolves --vitest-plugin`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_expect_resolves.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-expect-resolves)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-resolves.html)
- [oxc project](https://github.com/oxc-project/oxc)