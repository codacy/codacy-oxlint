# No Conditional Expect (jest)

**Pattern ID:** `jest_no-conditional-expect`
**Plugin:** `jest`

## What it does

This rule prevents the use of `expect` in conditional blocks, such as `if` and `catch`. This includes using `expect` in callbacks to functions named `catch`, which are assumed to be promises.

## Why is this bad?

Jest only considers a test to have failed if it throws an error, meaning if calls to assertion functions like `expect` occur in conditional code such as a `catch` statement, tests can end up passing but not actually test anything. Additionally, conditionals tend to make tests more brittle and complex, as they increase the amount of mental thinking needed to understand what is actually being tested.

## Examples

Examples of incorrect code for this rule:
js
`it("foo", () => {
doTest && expect(1).toBe(2);
});
it("bar", () => {
if (!skipTest) {
expect(1).toEqual(2);
}
});
it("baz", async () => {
try {
await foo();
} catch (err) {
expect(err).toMatchObject({ code: "MODULE_NOT_FOUND" });
}
});
it("throws an error", async () => {
await foo().catch((error) => expect(error).toBeInstanceOf(error));
});`
Examples of correct code for this rule:
js
`it("foo", () => {
expect(!value).toBe(false);
});
function getValue() {
if (process.env.FAIL) {
return 1;
}
return 2;
}
it("foo", () => {
expect(getValue()).toBe(2);
});
it("validates the request", () => {
try {
processRequest(request);
} catch {
} finally {
expect(validRequest).toHaveBeenCalledWith(request);
}
});
it("throws an error", async () => {
await expect(foo).rejects.toThrow(Error);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-conditional-expect": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-conditional-expect": "error",
},
});`bash
`oxlint --deny jest/no-conditional-expect --jest-plugin`

## Version

This rule was added in v0.0.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_conditional_expect.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-conditional-expect)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-conditional-expect.html)
- [oxc project](https://github.com/oxc-project/oxc)