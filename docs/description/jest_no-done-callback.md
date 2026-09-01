# No Done Callback (jest)

**Pattern ID:** `jest_no-done-callback`
**Plugin:** `jest`

## What it does

This rule checks the function parameter of hooks & tests for use of the done argument, suggesting you return a promise instead.

## Why is this bad?

When calling asynchronous code in hooks and tests, jest needs to know when the asynchronous work is complete to progress the current run. Originally the most common pattern to achieve this was to use callbacks:
javascript
`test("the data is peanut butter", (done) => {
function callback(data) {
try {
expect(data).toBe("peanut butter");
done();
} catch (error) {
done(error);
}
}
fetchData(callback);
});`
This can be very error-prone however, as it requires careful understanding of how assertions work in tests or otherwise tests won't behave as expected.

## Examples

Examples of incorrect code for this rule:
javascript
`beforeEach((done) => {
// ...
});
test("myFunction()", (done) => {
// ...
});
test("myFunction()", function (done) {
// ...
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-done-callback": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-done-callback": "error",
},
});`bash
`oxlint --deny jest/no-done-callback --jest-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_done_callback.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-done-callback)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-done-callback.html)
- [oxc project](https://github.com/oxc-project/oxc)