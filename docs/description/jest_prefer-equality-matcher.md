# Prefer Equality Matcher (jest)

**Pattern ID:** `jest_prefer-equality-matcher`
**Plugin:** `jest`

## What it does

Jest has built-in matchers for expecting equality, which allow for more readable tests and error messages if an expectation fails.

## Why is this bad?

Testing equality expressions with generic matchers like `toBe(true)` makes tests harder to read and understand. When tests fail, the error messages are less helpful because they don't show what the actual values were. Using specific equality matchers provides clearer test intent and better debugging information.

## Examples

Examples of incorrect code for this rule:
javascript
`expect(x === 5).toBe(true);
expect(name === "Carl").not.toEqual(true);
expect(myObj !== thatObj).toStrictEqual(true);`
Examples of correct code for this rule:
javascript
`expect(x).toBe(5);
expect(name).not.toEqual("Carl");
expect(myObj).toStrictEqual(thatObj);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-equality-matcher": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-equality-matcher": "error",
},
});`bash
`oxlint --deny jest/prefer-equality-matcher --jest-plugin`

## Version

This rule was added in v0.2.9.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_equality_matcher.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-equality-matcher)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-equality-matcher.html)
- [oxc project](https://github.com/oxc-project/oxc)