# Bad Bitwise Operator (oxc)

**Pattern ID:** `oxc_bad-bitwise-operator`
**Plugin:** `oxc`

## What it does

This rule applies when bitwise operators are used where logical operators are expected.

## Why is this bad?

Bitwise operators have different results from logical operators and a `TypeError` exception may be thrown because short-circuit evaluation is not applied. (In short-circuit evaluation, right operand evaluation is skipped according to left operand value, e.g. `x` is `false` in `x && y`.)
It is obvious that logical operators are expected in the following code patterns:
javascript
`e && e.x;
e || {};
e || "";`

## Examples

Examples of incorrect code for this rule:
javascript
`if (obj & obj.prop) {
console.log(obj.prop);
}
options = options | {};
input |= "";`
Examples of correct code for this rule:
javascript
`if (obj && obj.prop) {
console.log(obj.prop);
}
options = options || {};
input ||= "";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/bad-bitwise-operator": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/bad-bitwise-operator": "error",
},
});`bash
`oxlint --deny oxc/bad-bitwise-operator`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/bad_bitwise_operator.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fbad-bitwise-operator)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-bitwise-operator.html)
- [oxc project](https://github.com/oxc-project/oxc)