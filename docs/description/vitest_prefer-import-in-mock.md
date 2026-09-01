# Prefer Import In Mock (vitest)

**Pattern ID:** `vitest_prefer-import-in-mock`
**Plugin:** `vitest`

## What it does

This rule enforces using a dynamic `import()` in `vi.mock()` or `vi.doMock()`, which improves type information and IntelliSense for the mocked module.

## Why is this bad?

A lack of type information and IntelliSense increases the risk of mismatches between the real module and its mock.

## Examples

Examples of incorrect code for this rule:
js
`vi.mock("./path/to/module");
vi.doMock("./path/to/module");`
Examples of correct code for this rule:
js
`vi.mock(import("./path/to/module"));
vi.doMock(import("./path/to/module"));`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-import-in-mock": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-import-in-mock": "error",
},
});`bash
`oxlint --deny vitest/prefer-import-in-mock --vitest-plugin`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_import_in_mock.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-import-in-mock.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-import-in-mock)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-import-in-mock.html)
- [oxc project](https://github.com/oxc-project/oxc)