# No Mocks Import (vitest)

**Pattern ID:** `vitest_no-mocks-import`
**Plugin:** `vitest`

## What it does

This rule reports imports from a path containing a `__mocks__` component.

## Why is this bad?

Manually importing mocks from a `__mocks__` directory can lead to unexpected behavior and breaks Jest's automatic mocking system. Jest is designed to automatically resolve and use mocks from `__mocks__` directories when `jest.mock()` is called. Directly importing from these directories bypasses Jest's module resolution system and can cause inconsistencies between test and production environments.

## Examples

Examples of incorrect code for this rule:
ts
`import thing from "./__mocks__/index";
require("./__mocks__/index");`
Examples of correct code for this rule:
ts
`import thing from "thing";
require("thing");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-mocks-import": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-mocks-import": "error",
},
});`bash
`oxlint --deny vitest/no-mocks-import --vitest-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_mocks_import.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-mocks-import)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-mocks-import.html)
- [oxc project](https://github.com/oxc-project/oxc)