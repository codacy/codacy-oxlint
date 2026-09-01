# Prefer Importing Jest Globals (jest)

**Pattern ID:** `jest_prefer-importing-jest-globals`
**Plugin:** `jest`

## What it does

Prefer importing Jest globals (`describe`, `test`, `expect`, etc.) from `@jest/globals` rather than relying on ambient globals.

## Why is this bad?

Using global Jest functions without explicit imports makes dependencies implicit and can cause issues with type checking, editor tooling, and when migrating between test runners.

## Examples

Examples of incorrect code for this rule:
javascript
`describe("suite", () => {
test("foo");
expect(true).toBeDefined();
});`
Examples of correct code for this rule:
javascript
`import { describe, expect, test } from "@jest/globals";
describe("suite", () => {
test("foo");
expect(true).toBeDefined();
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-importing-jest-globals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-importing-jest-globals": "error",
},
});`bash
`oxlint --deny jest/prefer-importing-jest-globals --jest-plugin`

## Version

This rule was added in v1.60.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_importing_jest_globals.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-importing-jest-globals.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-importing-jest-globals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-importing-jest-globals.html)
- [oxc project](https://github.com/oxc-project/oxc)