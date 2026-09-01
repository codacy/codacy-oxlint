# No Test Return Statement (jest)

**Pattern ID:** `jest_no-test-return-statement`
**Plugin:** `jest`

## What it does

Disallow explicitly returning from tests.

## Why is this bad?

Tests in Jest should be void and not return values. If you are returning Promises then you should update the test to use `async/await`.

## Examples

Examples of incorrect code for this rule:
javascript
`test("one", () => {
return expect(1).toBe(1);
});`
Examples of correct code for this rule:
javascript
`test("one", () => {
expect(1).toBe(1);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-test-return-statement": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-test-return-statement": "error",
},
});`bash
`oxlint --deny jest/no-test-return-statement --jest-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_test_return_statement.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-test-return-statement)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-test-return-statement.html)
- [oxc project](https://github.com/oxc-project/oxc)