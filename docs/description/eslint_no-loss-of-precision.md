# No Loss Of Precision (eslint)

**Pattern ID:** `eslint_no-loss-of-precision`
**Plugin:** `eslint`

## What it does

Disallow precision loss in numeric literals.

## Why is this bad?

It can lead to unexpected results in certain situations. For example, when performing mathematical operations.
In JavaScript, Numbers are stored as double-precision floating-point numbers according to the IEEE 754 standard. Because of this, numbers can only retain accuracy up to a certain amount of digits. If the programmer enters additional digits, those digits will be lost in the conversion to the Number type and will result in unexpected/incorrect behavior.

## Examples

Examples of incorrect code for this rule:
javascript
`var x = 2e999;`javascript
`var x = 9007199254740993;`javascript
`var x = 5123000000000000000000000000001;`javascript
`var x = 1230000000000000000000000.0;`javascript
`var x = 0x200000_0000000_1;`
Examples of correct code for this rule:
javascript
`var x = 12345;`javascript
`var x = 123.456;`javascript
`var x = 123.0;`javascript
`var x = 123e34;`javascript
`var x = 0x1fff_ffff_fff_fff;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-loss-of-precision": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-loss-of-precision": "error",
},
});`bash
`oxlint --deny no-loss-of-precision`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_loss_of_precision.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-loss-of-precision)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-loss-of-precision)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loss-of-precision.html)
- [oxc project](https://github.com/oxc-project/oxc)