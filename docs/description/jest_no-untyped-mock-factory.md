# No Untyped Mock Factory (jest)

**Pattern ID:** `jest_no-untyped-mock-factory`
**Plugin:** `jest`

## What it does

This rule triggers a warning if `mock()` or `doMock()` is used without a generic type parameter or return type.

## Why is this bad?

By default, `jest.mock` and `jest.doMock` allow any type to be returned by a mock factory. A generic type parameter can be used to enforce that the factory returns an object with the same shape as the original module, or some other strict type. Requiring a type makes it easier to use TypeScript to catch changes needed in test mocks when the source module changes.

## Examples

Examples of incorrect code for this rule:
typescript
`jest.mock("../moduleName", () => {
return jest.fn(() => 42);
});
jest.mock("./module", () => ({
...jest.requireActual("./module"),
foo: jest.fn(),
}));
jest.mock("random-num", () => {
return jest.fn(() => 42);
});`
Examples of correct code for this rule:
typescript
`// Uses typeof import()
jest.mock<typeof import("../moduleName")>("../moduleName", () => {
return jest.fn(() => 42);
});
jest.mock<typeof import("./module")>("./module", () => ({
...jest.requireActual("./module"),
foo: jest.fn(),
}));
// Uses custom type
jest.mock<() => number>("random-num", () => {
return jest.fn(() => 42);
});
// No factory
jest.mock("random-num");
// Virtual mock
jest.mock(
"../moduleName",
() => {
return jest.fn(() => 42);
},
{ virtual: true },
);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-untyped-mock-factory": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-untyped-mock-factory": "error",
},
});`bash
`oxlint --deny jest/no-untyped-mock-factory --jest-plugin`

## Version

This rule was added in v0.2.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_untyped_mock_factory.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-untyped-mock-factory.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-untyped-mock-factory)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-untyped-mock-factory.html)
- [oxc project](https://github.com/oxc-project/oxc)