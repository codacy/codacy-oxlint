# No Conditional In Test (jest)

**Pattern ID:** `jest_no-conditional-in-test`
**Plugin:** `jest`

## What it does

Disallow conditional statements in tests.

## Why is this bad?

Conditional statements in tests can make the test harder to read and understand. It is better to have a single test case per test function.

## Examples

Examples of incorrect code for this rule:
js
`it("foo", () => {
if (true) {
doTheThing();
}
});
it("bar", () => {
switch (mode) {
case "none":
generateNone();
case "single":
generateOne();
case "multiple":
generateMany();
}
expect(fixtures.length).toBeGreaterThan(-1);
});
it("baz", async () => {
const promiseValue = () => {
return something instanceof Promise ? something : Promise.resolve(something);
};
await expect(promiseValue()).resolves.toBe(1);
});`
Examples of correct code for this rule:
js
`describe("my tests", () => {
if (true) {
it("foo", () => {
doTheThing();
});
}
});
beforeEach(() => {
switch (mode) {
case "none":
generateNone();
case "single":
generateOne();
case "multiple":
generateMany();
}
});
it("bar", () => {
expect(fixtures.length).toBeGreaterThan(-1);
});
const promiseValue = (something) => {
return something instanceof Promise ? something : Promise.resolve(something);
};
it("baz", async () => {
await expect(promiseValue()).resolves.toBe(1);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-conditional-in-test": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-conditional-in-test": "error",
},
});`bash
`oxlint --deny jest/no-conditional-in-test --jest-plugin`

## Version

This rule was added in v0.8.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_conditional_in_test.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-conditional-in-test)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-conditional-in-test.html)
- [oxc project](https://github.com/oxc-project/oxc)