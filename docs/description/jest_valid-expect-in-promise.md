# Valid Expect In Promise (jest)

**Pattern ID:** `jest_valid-expect-in-promise`
**Plugin:** `jest`

## What it does

Ensures that `expect` calls inside promise chains (`.then()`, `.catch()`, `.finally()`) are properly awaited or returned from the test.

## Why is this bad?

When `expect` is called inside a promise callback that is not awaited or returned, the test may pass even if the assertion fails because the test completes before the promise resolves. This leads to silently passing tests with broken assertions.

## Examples

Examples of incorrect code for this rule:
javascript
`test("promise test", async () => {
something().then((value) => {
expect(value).toBe("red");
});
});
test("promises test", () => {
const onePromise = something().then((value) => {
expect(value).toBe("red");
});
const twoPromise = something().then((value) => {
expect(value).toBe("blue");
});
return Promise.any([onePromise, twoPromise]);
});`
Examples of correct code for this rule:
javascript
`test("promise test", async () => {
await something().then((value) => {
expect(value).toBe("red");
});
});
test("promises test", () => {
const onePromise = something().then((value) => {
expect(value).toBe("red");
});
const twoPromise = something().then((value) => {
expect(value).toBe("blue");
});
return Promise.all([onePromise, twoPromise]);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/valid-expect-in-promise": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/valid-expect-in-promise": "error",
},
});`bash
`oxlint --deny jest/valid-expect-in-promise --jest-plugin`

## Version

This rule was added in v1.60.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/valid_expect_in_promise.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fvalid-expect-in-promise)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/valid-expect-in-promise.html)
- [oxc project](https://github.com/oxc-project/oxc)