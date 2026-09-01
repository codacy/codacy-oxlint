# Prefer To Have Been Called (jest)

**Pattern ID:** `jest_prefer-to-have-been-called`
**Plugin:** `jest`

## What it does

Suggests using `toHaveBeenCalled()` or `not.toHaveBeenCalled()` over `toHaveBeenCalledTimes(0)` or `toBeCalledTimes(0)`.

## Why is this bad?

`toHaveBeenCalled()` is more explicit and readable than `toHaveBeenCalledTimes(0)`.

## Examples

Examples of incorrect code for this rule:
js
`expect(mock).toHaveBeenCalledTimes(0);
expect(mock).toBeCalledTimes(0);
expect(mock).not.toHaveBeenCalledTimes(0);`
Examples of correct code for this rule:
js
`expect(mock).not.toHaveBeenCalled();
expect(mock).toHaveBeenCalled();
expect(mock).toHaveBeenCalledTimes(1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-to-have-been-called": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-to-have-been-called": "error",
},
});`bash
`oxlint --deny jest/prefer-to-have-been-called --jest-plugin`

## Version

This rule was added in v1.34.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_to_have_been_called.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-been-called.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-to-have-been-called)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-to-have-been-called.html)
- [oxc project](https://github.com/oxc-project/oxc)