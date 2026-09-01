# Prefer Mock Promise Shorthand (vitest)

**Pattern ID:** `vitest_prefer-mock-promise-shorthand`
**Plugin:** `vitest`

## What it does

When working with mocks of functions that return promises, Jest provides some API sugar functions to reduce the amount of boilerplate you have to write. These methods should be preferred when possible.

## Why is this bad?

Using generic mock functions like `mockImplementation(() => Promise.resolve())` or `mockReturnValue(Promise.reject())` is more verbose and less readable than Jest's specialized promise shorthands. The shorthand methods like `mockResolvedValue()` and `mockRejectedValue()` are more expressive and make the test intent clearer.

## Examples

Examples of incorrect code for this rule:
javascript
`jest.fn().mockImplementation(() => Promise.resolve(123));
jest.spyOn(fs.promises, "readFile").mockReturnValue(Promise.reject(new Error("oh noes!")));
myFunction
.mockReturnValueOnce(Promise.resolve(42))
.mockImplementationOnce(() => Promise.resolve(42))
.mockReturnValue(Promise.reject(new Error("too many calls!")));`
Examples of correct code for this rule:
javascript
`jest.fn().mockResolvedValue(123);
jest.spyOn(fs.promises, "readFile").mockRejectedValue(new Error("oh noes!"));
myFunction
.mockResolvedValueOnce(42)
.mockResolvedValueOnce(42)
.mockRejectedValue(new Error("too many calls!"));`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-mock-promise-shorthand": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-mock-promise-shorthand": "error",
},
});`bash
`oxlint --deny vitest/prefer-mock-promise-shorthand --vitest-plugin`

## Version

This rule was added in v0.2.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_mock_promise_shorthand.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-mock-promise-shorthand)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-mock-promise-shorthand.html)
- [oxc project](https://github.com/oxc-project/oxc)