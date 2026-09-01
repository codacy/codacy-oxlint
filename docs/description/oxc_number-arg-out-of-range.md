# Number Arg Out Of Range (oxc)

**Pattern ID:** `oxc_number-arg-out-of-range`
**Plugin:** `oxc`

## What it does

Checks whether the radix or precision arguments of number-related functions exceed the limit.

## Why is this bad?

The radix argument of `Number.prototype.toString` should be between 2 and 36. The precision argument of `Number.prototype.toFixed` and `Number.prototype.toExponential` should be between 0 and 20. The precision argument of `Number.prototype.toPrecision` should be between 1 and 21.

## Examples

Examples of incorrect code for this rule:
javascript
`var x = 42;
var s_radix_64 = x.toString(64);
var s = x.toString(1);`
Examples of correct code for this rule:
javascript
`var x = 42;
var s_radix_16 = x.toString(16);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/number-arg-out-of-range": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/number-arg-out-of-range": "error",
},
});`bash
`oxlint --deny oxc/number-arg-out-of-range`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/number_arg_out_of_range.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fnumber-arg-out-of-range)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/number-arg-out-of-range.html)
- [oxc project](https://github.com/oxc-project/oxc)