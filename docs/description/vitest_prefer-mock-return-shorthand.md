# Prefer Mock Return Shorthand (vitest)

**Pattern ID:** `vitest_prefer-mock-return-shorthand`
**Plugin:** `vitest`

## What it does

When working with mocks of functions that return simple values, Jest provides some API sugar functions to reduce the amount of boilerplate you have to write.

## Why is this bad?

Not using Jest's API sugar functions adds unnecessary boilerplate and makes tests harder to read. These helpers clearly express intent and reduce errors, keeping tests simple and maintainable.

## Examples

Examples of incorrect code for this rule:
js
`jest.fn().mockImplementation(() => "hello world");
jest
.spyOn(fs.promises, "readFile")
.mockImplementationOnce(() => Promise.reject(new Error("oh noes!")));
myFunction
.mockImplementationOnce(() => 42)
.mockImplementationOnce(() => Promise.resolve(42))
.mockReturnValue(0);`
Examples of correct code for this rule:
js
`jest.fn().mockResolvedValue(123);
jest.spyOn(fs.promises, "readFile").mockReturnValue(Promise.reject(new Error("oh noes!")));
jest.spyOn(fs.promises, "readFile").mockRejectedValue(new Error("oh noes!"));
jest.spyOn(fs, "readFileSync").mockImplementationOnce(() => {
throw new Error("oh noes!");
});
myFunction.mockResolvedValueOnce(42).mockResolvedValueOnce(42).mockReturnValue(0);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-mock-return-shorthand": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-mock-return-shorthand": "error",
},
});`bash
`oxlint --deny vitest/prefer-mock-return-shorthand --vitest-plugin`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_mock_return_shorthand.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-return-shorthand.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-mock-return-shorthand)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-mock-return-shorthand.html)
- [oxc project](https://github.com/oxc-project/oxc)