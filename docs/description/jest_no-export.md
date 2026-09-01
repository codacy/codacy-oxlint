# No Export (jest)

**Pattern ID:** `jest_no-export`
**Plugin:** `jest`

## What it does

Prevents using exports if a file has one or more tests in it.

## Why is this bad?

This rule aims to eliminate duplicate runs of tests by exporting things from test files. If you import from a test file, then all the tests in that file will be run in each imported instance. so bottom line, don't export from a test, but instead move helper functions into a separate file when they need to be shared across tests.

## Examples

Examples of incorrect code for this rule:
javascript
`export function myHelper() {}
describe("a test", () => {
expect(1).toBe(1);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-export": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-export": "error",
},
});`bash
`oxlint --deny jest/no-export --jest-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_export.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-export)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-export.html)
- [oxc project](https://github.com/oxc-project/oxc)