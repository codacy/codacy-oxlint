# Consistent Each For (vitest)

**Pattern ID:** `vitest_consistent-each-for`
**Plugin:** `vitest`

## What it does

This rule enforces consistency in which method is used to create parameterized tests. This configuration affects different test function types (`test`, `it`, `describe`, `suite`).

## Why is this bad?

Without a consistent way to create parameterized tests, we rely on the developer to remember that `.for` spreads the values as different arguments while `.each` passes the array as a single argument.

## Examples

Examples of incorrect code for this rule:
js
`// { test: 'for' }
test.each([[1, 1, 2]])("test", (a, b, expected) => {
expect(a + b).toBe(expected);
});
// { describe: 'for' }
describe.each([[1], [2]])("suite %s", (n) => {
test("test", () => {});
});`
Examples of correct code for this rule:
js
`// { test: 'for' }
test.for([[1, 1, 2]])("test", ([a, b, expected]) => {
expect(a + b).toBe(expected);
});
// { describe: 'for' }
describe.for([[1], [2]])("suite %s", ([n]) => {
test("test", () => {});
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/consistent-each-for": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/consistent-each-for": "error",
},
});`bash
`oxlint --deny vitest/consistent-each-for --vitest-plugin`

## Version

This rule was added in v1.39.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/consistent_each_for.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-each-for.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fconsistent-each-for)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-each-for.html)
- [oxc project](https://github.com/oxc-project/oxc)