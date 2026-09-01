# Prefer To Contain (jest)

**Pattern ID:** `jest_prefer-to-contain`
**Plugin:** `jest`

## What it does

In order to have a better failure message, `toContain()` should be used upon asserting expectations on an array containing an object.

## Why is this bad?

This rule triggers a warning if `toBe()`, `toEqual()` or `toStrictEqual()` is used to assert object inclusion in an array

## Examples

Examples of incorrect code for this rule:
javascript
`expect(a.includes(b)).toBe(true);
expect(a.includes(b)).not.toBe(true);
expect(a.includes(b)).toBe(false);
expect(a.includes(b)).toEqual(true);
expect(a.includes(b)).toStrictEqual(true);`
Examples of correct code for this rule:
javascript
`expect(a).toContain(b);
expect(a).not.toContain(b);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-to-contain": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-to-contain": "error",
},
});`bash
`oxlint --deny jest/prefer-to-contain --jest-plugin`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_to_contain.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-to-contain)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-to-contain.html)
- [oxc project](https://github.com/oxc-project/oxc)