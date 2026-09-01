# Padding Around Test Blocks (vitest)

**Pattern ID:** `vitest_padding-around-test-blocks`
**Plugin:** `vitest`

## What it does

This rule enforces a line of padding before and after 1 or more `test`/`it` statements.

## Why is this bad?

Inconsistent formatting of code can make the code more difficult to read and follow. This rule helps ensure that test blocks are visually separated from the rest of the code, making them easier to identify while looking through test files.

## Examples

Examples of incorrect code for this rule:
js
`const thing = 123;
test("foo", () => {});
test("bar", () => {});`js
`const thing = 123;
it("foo", () => {});
it("bar", () => {});`
Examples of correct code for this rule:
js
`const thing = 123;
test("foo", () => {});
test("bar", () => {});`js
`const thing = 123;
it("foo", () => {});
it("bar", () => {});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/padding-around-test-blocks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/padding-around-test-blocks": "error",
},
});`bash
`oxlint --deny vitest/padding-around-test-blocks --vitest-plugin`

## Version

This rule was added in v1.75.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/padding_around_test_blocks.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-test-blocks.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fpadding-around-test-blocks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/padding-around-test-blocks.html)
- [oxc project](https://github.com/oxc-project/oxc)