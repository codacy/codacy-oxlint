# Valid Describe Callback (vitest)

**Pattern ID:** `vitest_valid-describe-callback`
**Plugin:** `vitest`

## What it does

This rule validates that the second parameter of a `describe()` function is a callback function. This callback function:
- should not contain any parameters
- should not contain any `return` statements
Vitest supports async `describe()` callbacks, so this rule allows them.

## Why is this bad?

Using an improper `describe()` callback function can lead to unexpected test errors.

## Examples

Examples of incorrect code for this rule:
javascript
`// Callback function parameters are not allowed
describe("myFunction()", (done) => {
// ...
});
// Returning a value from a describe block is not allowed
describe("myFunction", () =>
it("returns a truthy value", () => {
expect(myFunction()).toBeTruthy();
}));`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/valid-describe-callback": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/valid-describe-callback": "error",
},
});`bash
`oxlint --deny vitest/valid-describe-callback --vitest-plugin`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/valid_describe_callback.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fvalid-describe-callback)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/valid-describe-callback.html)
- [oxc project](https://github.com/oxc-project/oxc)