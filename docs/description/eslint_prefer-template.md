# Prefer Template (eslint)

**Pattern ID:** `eslint_prefer-template`
**Plugin:** `eslint`

## What it does

Require template literals instead of string concatenation.

## Why is this bad?

In ES2015 (ES6), we can use template literals instead of string concatenation.

## Examples

Examples of incorrect code for this rule:
js
`const str = "Hello, " + name + "!";
const str1 = "Time: " + 12 * 60 * 60 * 1000;`
Examples of correct code for this rule:
js
`const str = "Hello World!";
const str2 = `Time: ${12 * 60 * 60 * 1000}`;
const str4 = "Hello, " + "World!";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-template": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-template": "error",
},
});`bash
`oxlint --deny prefer-template`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_template.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-template)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-template)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-template.html)
- [oxc project](https://github.com/oxc-project/oxc)