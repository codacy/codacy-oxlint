# No Sequences (eslint)

**Pattern ID:** `eslint_no-sequences`
**Plugin:** `eslint`

## What it does

Disallows the use of the comma operator.

## Why is this bad?

The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. However, this frequently obscures side effects, and its use is often an accident.

## Examples

Examples of incorrect code for this rule:
javascript
`((foo = doSomething()), val);
(0, eval("doSomething();"));
// Arrow function body needs double parentheses
const fn = () => (doSomething(), val);
// with allowInParentheses: false
foo = (doSomething(), val);`
Examples of correct code for this rule:
javascript
`foo = (doSomething(), val);
(0, eval)("doSomething();");
// Single extra parentheses is enough for conditions
do {} while ((doSomething(), !!test));
for (i = 0, j = 10; i < j; i++, j--) {}
// Arrow function body needs double parentheses
const fn = () => (doSomething(), val);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-sequences": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-sequences": "error",
},
});`bash
`oxlint --deny no-sequences`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_sequences.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-sequences)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-sequences)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sequences.html)
- [oxc project](https://github.com/oxc-project/oxc)