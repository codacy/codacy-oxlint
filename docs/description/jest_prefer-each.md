# Prefer Each (jest)

**Pattern ID:** `jest_prefer-each`
**Plugin:** `jest`

## What it does

This rule enforces using `each` rather than manual loops.

## Why is this bad?

Manual loops for tests can be less readable and more error-prone. Using `each` provides a clearer and more concise way to run parameterized tests, improving readability and maintainability.

## Examples

Examples of incorrect code for this rule:
js
`for (const item of items) {
describe(item, () => {
expect(item).toBe("foo");
});
}`
Examples of correct code for this rule:
js
`describe.each(items)("item", (item) => {
expect(item).toBe("foo");
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-each": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-each": "error",
},
});`bash
`oxlint --deny jest/prefer-each --jest-plugin`

## Version

This rule was added in v0.9.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_each.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-each.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-each)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-each.html)
- [oxc project](https://github.com/oxc-project/oxc)