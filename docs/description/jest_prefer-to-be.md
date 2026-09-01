# Prefer To Be (jest)

**Pattern ID:** `jest_prefer-to-be`
**Plugin:** `jest`

## What it does

Recommends using `toBe` matcher for primitive literals and specific matchers for `null`, `undefined`, and `NaN`.

## Why is this bad?

When asserting against primitive literals such as numbers and strings, the equality matchers all operate the same, but read slightly differently in code.
This rule recommends using the `toBe` matcher in these situations, as it forms the most grammatically natural sentence. For `null`, `undefined`, and `NaN` this rule recommends using their specific `toBe` matchers, as they give better error messages as well.

## Examples

Examples of incorrect code for this rule:
javascript
`expect(value).not.toEqual(5);
expect(getMessage()).toStrictEqual("hello world");
expect(loadMessage()).resolves.toEqual("hello world");`
Examples of correct code for this rule:
javascript
`expect(value).not.toBe(5);
expect(getMessage()).toBe("hello world");
expect(loadMessage()).resolves.toBe("hello world");
expect(didError).not.toBe(true);
expect(catchError()).toStrictEqual({ message: "oh noes!" });`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-to-be": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-to-be": "error",
},
});`bash
`oxlint --deny jest/prefer-to-be --jest-plugin`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_to_be.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-to-be)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-to-be.html)
- [oxc project](https://github.com/oxc-project/oxc)