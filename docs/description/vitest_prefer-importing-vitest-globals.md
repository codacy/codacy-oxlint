# Prefer Importing Vitest Globals (vitest)

**Pattern ID:** `vitest_prefer-importing-vitest-globals`
**Plugin:** `vitest`

## What it does

Enforces explicit imports from 'vitest' instead of using Vitest globals.

## Why is this bad?

Using Vitest globals without importing them relies on implicit global configuration (`globals: true` in vitest config). Explicit imports make dependencies clear, improve IDE support, and ensure compatibility across different setups.

## Examples

Examples of incorrect code for this rule:
js
`describe("suite", () => {
it("test", () => {
expect(true).toBe(true);
});
});`
Examples of correct code for this rule:
js
`import { describe, it, expect } from "vitest";
describe("suite", () => {
it("test", () => {
expect(true).toBe(true);
});
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-importing-vitest-globals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-importing-vitest-globals": "error",
},
});`bash
`oxlint --deny vitest/prefer-importing-vitest-globals --vitest-plugin`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_importing_vitest_globals.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-importing-vitest-globals.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-importing-vitest-globals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-importing-vitest-globals.html)
- [oxc project](https://github.com/oxc-project/oxc)