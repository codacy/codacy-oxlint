# No Deprecated Functions (jest)

**Pattern ID:** `jest_no-deprecated-functions`
**Plugin:** `jest`

## What it does

Over the years Jest has accrued some debt in the form of functions that have either been renamed for clarity, or replaced with more powerful APIs.
This rule can also autofix a number of these deprecations for you.

## Why is this bad?

While typically these deprecated functions are kept in the codebase for a number of majors, eventually they are removed completely.

## Examples

Examples of incorrect code for this rule:
javascript
`jest.resetModuleRegistry; // since Jest 15
jest.addMatchers; // since Jest 17`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-deprecated-functions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-deprecated-functions": "error",
},
});`bash
`oxlint --deny jest/no-deprecated-functions --jest-plugin`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_deprecated_functions.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-deprecated-functions)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-deprecated-functions.html)
- [oxc project](https://github.com/oxc-project/oxc)