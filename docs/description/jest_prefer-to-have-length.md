# Prefer To Have Length (jest)

**Pattern ID:** `jest_prefer-to-have-length`
**Plugin:** `jest`

## What it does

In order to have a better failure message, `toHaveLength()` should be used upon asserting expectations on objects length property.

## Why is this bad?

This rule triggers a warning if `toBe()`, `toEqual()` or `toStrictEqual()` is used to assert objects length property.

## Examples

Examples of incorrect code for this rule:
javascript
`expect(files["length"]).toBe(1);
expect(files["length"]).toBe(1);
expect(files["length"])["not"].toBe(1);`
Examples of correct code for this rule:
javascript
`expect(files).toHaveLength(1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-to-have-length": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-to-have-length": "error",
},
});`bash
`oxlint --deny jest/prefer-to-have-length --jest-plugin`

## Version

This rule was added in v0.2.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_to_have_length.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-to-have-length)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-to-have-length.html)
- [oxc project](https://github.com/oxc-project/oxc)