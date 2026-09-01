# Consistent Vitest Vi (vitest)

**Pattern ID:** `vitest_consistent-vitest-vi`
**Plugin:** `vitest`

## What it does

This rule triggers an error when an unexpected Vitest accessor is used.

## Why is this bad?

Not having a consistent vitest accessor can lead to confusion when `vi` and `vitest` are used interchangeably.

## Examples

Examples of incorrect code for this rule:
js
`vitest.mock("./src/calculator.ts", { spy: true });
vi.stubEnv("NODE_ENV", "production");`
Examples of correct code for this rule:
js
`vi.mock("./src/calculator.ts", { spy: true });
vi.stubEnv("NODE_ENV", "production");`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/consistent-vitest-vi": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/consistent-vitest-vi": "error",
},
});`bash
`oxlint --deny vitest/consistent-vitest-vi --vitest-plugin`

## Version

This rule was added in v1.37.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/consistent_vitest_vi.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-vitest-vi.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fconsistent-vitest-vi)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-vitest-vi.html)
- [oxc project](https://github.com/oxc-project/oxc)