# Prefer Jest Mocked (jest)

**Pattern ID:** `jest_prefer-jest-mocked`
**Plugin:** `jest`

## What it does

When working with mocks of functions using Jest, it's recommended to use the `jest.mocked()` helper function to properly type the mocked functions. This rule enforces the use of `jest.mocked()` for better type safety and readability.
Restricted types:
- `jest.Mock`
- `jest.MockedFunction`
- `jest.MockedClass`
- `jest.MockedObject`

## Why is this bad?

Using type assertions like `fn as jest.Mock` is a less safe approach than using `jest.mocked()`. The `jest.mocked()` helper provides better type safety by preserving the original function signature while adding mock capabilities. It also makes the code more readable and explicit about mocking intentions.

## Examples

Examples of incorrect code for this rule:
typescript
`(foo as jest.Mock).mockReturnValue(1);
const mock = (foo as jest.Mock).mockReturnValue(1);
(foo as unknown as jest.Mock).mockReturnValue(1);
(Obj.foo as jest.Mock).mockReturnValue(1);
([].foo as jest.Mock).mockReturnValue(1);`
Examples of correct code for this rule:
typescript
`jest.mocked(foo).mockReturnValue(1);
const mock = jest.mocked(foo).mockReturnValue(1);
jest.mocked(Obj.foo).mockReturnValue(1);
jest.mocked([].foo).mockReturnValue(1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-jest-mocked": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-jest-mocked": "error",
},
});`bash
`oxlint --deny jest/prefer-jest-mocked --jest-plugin`

## Version

This rule was added in v0.5.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_jest_mocked.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-jest-mocked.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-jest-mocked)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-jest-mocked.html)
- [oxc project](https://github.com/oxc-project/oxc)