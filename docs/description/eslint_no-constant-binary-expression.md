# No Constant Binary Expression (eslint)

**Pattern ID:** `eslint_no-constant-binary-expression`
**Plugin:** `eslint`

## What it does

Disallow expressions where the operation doesn't affect the value.

## Why is this bad?

Comparisons which will always evaluate to true or false and logical expressions (`||`, `&&`, `??`) which either always short-circuit or never short-circuit are both likely indications of programmer error. By default, this rule also reports relational comparisons (`<`, `<=`, `>`, `>=`) where both sides are literal values.
These errors are especially common in complex expressions where operator precedence is easy to misjudge.
Additionally, this rule detects comparisons to newly constructed objects/arrays/functions/etc. In JavaScript, where objects are compared by reference, a newly constructed object can never `===` any other value. This can be surprising for programmers coming from languages where objects are compared by value.

## Examples

Examples of incorrect code for this rule:
javascript
`// One might think this would evaluate as `a + (b ?? c)`:
const x = a + b ?? c;
// But it actually evaluates as `(a + b) ?? c`. Since `a + b` can never be null,
// the `?? c` has no effect.
// Programmers coming from a language where objects are compared by value might expect this to work:
const isEmpty = x === [];
// However, this will always result in `isEmpty` being `false`.`
Examples of correct code for this rule:
javascript
`const x = a + (b ?? c);
const isEmpty = x.length === 0;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-constant-binary-expression": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-constant-binary-expression": "error",
},
});`bash
`oxlint --deny no-constant-binary-expression`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_constant_binary_expression.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-constant-binary-expression)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-constant-binary-expression)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-binary-expression.html)
- [oxc project](https://github.com/oxc-project/oxc)