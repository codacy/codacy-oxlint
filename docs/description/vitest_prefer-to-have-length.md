# Prefer To Have Length (vitest)

**Pattern ID:** `vitest_prefer-to-have-length`
**Plugin:** `vitest`

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
"plugins": ["vitest"],
"rules": {
"vitest/prefer-to-have-length": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-to-have-length": "error",
},
});`bash
`oxlint --deny vitest/prefer-to-have-length --vitest-plugin`

## Version

This rule was added in v0.2.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_to_have_length.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-to-have-length)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-have-length.html)
- [oxc project](https://github.com/oxc-project/oxc)