# Approx Constant (oxc)

**Pattern ID:** `oxc_approx-constant`
**Plugin:** `oxc`

## What it does

Disallows the use of approximate constants, instead preferring the use of the constants in the `Math` object.

## Why is this bad?

Approximate constants are not as accurate as the constants in the `Math` object. Using the `Math` constants improves code readability and accuracy. See [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) for more information.

## Examples

Examples of incorrect code for this rule:
javascript
`let log10e = 0.434294;`
Examples of correct code for this rule:
javascript
`let log10e = Math.LOG10E;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/approx-constant": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/approx-constant": "error",
},
});`bash
`oxlint --deny oxc/approx-constant`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/approx_constant.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fapprox-constant)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/approx-constant.html)
- [oxc project](https://github.com/oxc-project/oxc)