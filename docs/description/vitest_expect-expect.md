# Expect Expect (vitest)

**Pattern ID:** `vitest_expect-expect`
**Plugin:** `vitest`

## What it does

This rule triggers when there is no call made to `expect` in a test, ensure that there is at least one `expect` call made in a test.

## Why is this bad?

People may forget to add assertions.

## Examples

Examples of incorrect code for this rule:
javascript
`it("should be a test", () => {
console.log("no assertion");
});
test("should assert something", () => {});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/expect-expect": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/expect-expect": "error",
},
});`bash
`oxlint --deny vitest/expect-expect --vitest-plugin`

## Version

This rule was added in v0.0.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/expect_expect.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fexpect-expect)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/expect-expect.html)
- [oxc project](https://github.com/oxc-project/oxc)