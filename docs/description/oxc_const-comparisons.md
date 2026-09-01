# Const Comparisons (oxc)

**Pattern ID:** `oxc_const-comparisons`
**Plugin:** `oxc`

## What it does

Checks for redundant or logically impossible comparisons. This includes:
- Ineffective double comparisons against constants.
- Impossible comparisons involving constants.
- Redundant comparisons where both operands are the same (e.g., a < a).

## Why is this bad?

Such comparisons can lead to confusing or incorrect logic in the program. In many cases:
- Only one of the comparisons has any effect on the result, suggesting that the programmer might have made a mistake, such as flipping one of the comparison operators or using the wrong variable.
- Comparisons like a < a or a >= a are always false or true respectively, making the logic redundant and potentially misleading.

## Examples

Examples of incorrect code for this rule:
javascript
`status_code <= 400 && status_code > 500;
status_code < 200 && status_code <= 299;
status_code > 500 && status_code >= 500;
a < a; // Always false
a >= a; // Always true`
Examples of correct code for this rule:
javascript
`status_code >= 400 && status_code < 500;
500 <= status_code && 600 > status_code;
500 <= status_code && status_code <= 600;
a < b;
a <= b;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/const-comparisons": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/const-comparisons": "error",
},
});`bash
`oxlint --deny oxc/const-comparisons`

## Version

This rule was added in v0.0.22.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/const_comparisons.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fconst-comparisons)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/const-comparisons.html)
- [oxc project](https://github.com/oxc-project/oxc)