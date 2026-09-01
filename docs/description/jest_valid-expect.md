# Valid Expect (jest)

**Pattern ID:** `jest_valid-expect`
**Plugin:** `jest`

## What it does

Checks that `expect()` is called correctly.

## Why is this bad?

`expect()` is a function that is used to assert values in tests. It should be called with a single argument, which is the value to be tested. If you call `expect()` with no arguments, or with more than one argument, it will not work as expected.

## Examples

Examples of incorrect code for this rule:
javascript
`expect();
expect("something");
expect(true).toBeDefined;
expect(Promise.resolve("Hi!")).resolves.toBe("Hi!");`
Examples of correct code for this rule:
javascript
`expect("something").toEqual("something");
expect(true).toBeDefined();
await expect(Promise.resolve("Hi!")).resolves.toBe("Hi!");`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/valid-expect": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/valid-expect": "error",
},
});`bash
`oxlint --deny jest/valid-expect --jest-plugin`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/valid_expect.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fvalid-expect)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/valid-expect.html)
- [oxc project](https://github.com/oxc-project/oxc)