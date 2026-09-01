# Arrow Body Style (eslint)

**Pattern ID:** `eslint_arrow-body-style`
**Plugin:** `eslint`

## What it does

This rule can enforce or disallow the use of braces around arrow function body. Arrow functions can use either:
- a block body `() => { ... }`
- or a concise body `() => expression` with an implicit return.

## Why is this bad?

Inconsistent use of block vs. concise bodies makes code harder to read. Concise bodies are limited to a single expression, whose value is implicitly returned.

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"arrow-body-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"arrow-body-style": "error",
},
});`bash
`oxlint --deny arrow-body-style`

## Version

This rule was added in v1.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/arrow_body_style.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/arrow-body-style)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Farrow-body-style)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/arrow-body-style.html)
- [oxc project](https://github.com/oxc-project/oxc)