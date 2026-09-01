# Prefer Expect Assertions (vitest)

**Pattern ID:** `vitest_prefer-expect-assertions`
**Plugin:** `vitest`

## What it does

Enforces that every test has either `expect.assertions(<number>)` or `expect.hasAssertions()` as its first expression.

## Why is this bad?

Without explicit assertion counts, tests with asynchronous code, callbacks, or loops may pass even if some `expect` calls are never reached, silently hiding bugs.

## Examples

Examples of incorrect code for this rule:
javascript
`test("no assertions", () => {
// ...
});
test("assertions not first", () => {
expect(true).toBe(true);
// ...
});`
Examples of correct code for this rule:
javascript
`test("with assertion count", () => {
expect.assertions(1);
expect(true).toBe(true);
});
test("with hasAssertions", () => {
expect.hasAssertions();
expect(true).toBe(true);
});`
///Examples of incorrect code with `{ "onlyFunctionsWithAsyncKeyword": true }`:
javascript
`test("fetches data", async () => {
const data = await fetchData();
expect(data).toBe("peanut butter");
});`
Examples of correct code with `{ "onlyFunctionsWithAsyncKeyword": true }`:
javascript
`test("fetches data", async () => {
expect.assertions(1);
const data = await fetchData();
expect(data).toBe("peanut butter");
});`
Examples of incorrect code with `{ "onlyFunctionsWithExpectInLoop": true }`:
javascript
`test("all numbers are greater than zero", () => {
for (const number of getNumbers()) {
expect(number).toBeGreaterThan(0);
}
});`
Examples of correct code with `{ "onlyFunctionsWithExpectInLoop": true }`:
javascript
`test("all numbers are greater than zero", () => {
expect.hasAssertions();
for (const number of getNumbers()) {
expect(number).toBeGreaterThan(0);
}
});`
Examples of incorrect code with `{ "onlyFunctionsWithExpectInCallback": true }`:
javascript
`test("callback test", () => {
fetchData((data) => {
expect(data).toBe("peanut butter");
});
});`
Examples of correct code with `{ "onlyFunctionsWithExpectInCallback": true }`:
javascript
`test("callback test", () => {
expect.assertions(1);
fetchData((data) => {
expect(data).toBe("peanut butter");
});
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-expect-assertions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-expect-assertions": "error",
},
});`bash
`oxlint --deny vitest/prefer-expect-assertions --vitest-plugin`

## Version

This rule was added in v1.62.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_expect_assertions.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-expect-assertions)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-expect-assertions.html)
- [oxc project](https://github.com/oxc-project/oxc)