# Operator Assignment (eslint)

**Pattern ID:** `eslint_operator-assignment`
**Plugin:** `eslint`

## What it does

This rule requires or disallows assignment operator shorthand where possible. It encourages the use of shorthand assignment operators like `+=`, `-=`, `*=`, `/=`, etc. to make the code more concise and readable.

## Why is this bad?

JavaScript provides shorthand operators that combine variable assignment and simple mathematical operations. Failing to use these shorthand operators can lead to unnecessarily verbose code and can be seen as a missed opportunity for clarity and simplicity.

## Examples

Examples of incorrect code for this rule with the default `always` option:
js
`x = x + y;
x = y * x;
x[0] = x[0] / y;
x.y = x.y << z;`
Examples of correct code for this rule with the default `always` option:
js
`x = y;
x += y;
x = y * z;
x = x * y * z;
x[0] /= y;
x[foo()] = x[foo()] % 2;
x = y + x; // `+` is not always commutative (e.g. x = "abc")`
Examples of incorrect code for this rule with the `never` option:
js
`x *= y;
x ^= (y + z) / foo();`
Examples of correct code for this rule with the `never` option:
js
`x = x + y;
x.y = x.y / a.b;`

## Configuration

This rule accepts one of the following string values:
type: `"always" | "never"`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"operator-assignment": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"operator-assignment": "error",
},
});`bash
`oxlint --deny operator-assignment`

## Version

This rule was added in v0.15.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/operator_assignment.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/operator-assignment)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Foperator-assignment)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/operator-assignment.html)
- [oxc project](https://github.com/oxc-project/oxc)