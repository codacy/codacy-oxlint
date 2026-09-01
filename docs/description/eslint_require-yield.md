# Require Yield (eslint)

**Pattern ID:** `eslint_require-yield`
**Plugin:** `eslint`

## What it does

This rule generates warnings for generator functions that do not have the yield keyword.

## Examples

Examples of incorrect code for this rule:
javascript
`function* foo() {
return 10;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"require-yield": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"require-yield": "error",
},
});`bash
`oxlint --deny require-yield`

## Version

This rule was added in v0.0.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/require_yield.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/require-yield)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Frequire-yield)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-yield.html)
- [oxc project](https://github.com/oxc-project/oxc)