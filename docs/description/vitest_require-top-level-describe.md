# Require Top Level Describe (vitest)

**Pattern ID:** `vitest_require-top-level-describe`
**Plugin:** `vitest`

## What it does

Requires test cases and hooks to be inside a top-level `describe` block.

## Why is this bad?

Having tests and hooks organized within `describe` blocks provides better structure and grouping for test suites. It makes test output more readable and helps with test organization, especially in larger codebases.
This rule triggers a warning if a test case (`test` and `it`) or a hook (`beforeAll`, `beforeEach`, `afterEach`, `afterAll`) is not located in a top-level `describe` block.

## Examples

Examples of incorrect code for this rule:
javascript
`// Above a describe block
test("my test", () => {});
describe("test suite", () => {
it("test", () => {});
});
// Below a describe block
describe("test suite", () => {});
test("my test", () => {});
// Same for hooks
beforeAll("my beforeAll", () => {});
describe("test suite", () => {});
afterEach("my afterEach", () => {});`
Examples of correct code for this rule:
javascript
`// Above a describe block
// In a describe block
describe("test suite", () => {
test("my test", () => {});
});
// In a nested describe block
describe("test suite", () => {
test("my test", () => {});
describe("another test suite", () => {
test("my other test", () => {});
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
"vitest/require-top-level-describe": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/require-top-level-describe": "error",
},
});`bash
`oxlint --deny vitest/require-top-level-describe --vitest-plugin`

## Version

This rule was added in v0.4.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/require_top_level_describe.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Frequire-top-level-describe)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-top-level-describe.html)
- [oxc project](https://github.com/oxc-project/oxc)