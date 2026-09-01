# No Unsafe Negation (eslint)

**Pattern ID:** `eslint_no-unsafe-negation`
**Plugin:** `eslint`

## What it does

Disallows negating the left operand of relational operators to prevent logical errors caused by misunderstanding operator precedence or accidental use of negation.
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

Negating the left operand of relational operators can result in unexpected behavior due to operator precedence, leading to logical errors. For instance, `!a in b` may be interpreted as `(!a) in b` instead of `!(a in b)`, which is not the intended logic.

## Examples

Examples of incorrect code for this rule:
javascript
`if (!key in object) {}
if (!obj instanceof Ctor) {}`
Examples of correct code for this rule:
javascript
`if (!(key in object)) {}
if (!(obj instanceof Ctor)) {}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unsafe-negation": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unsafe-negation": "error",
},
});`bash
`oxlint --deny no-unsafe-negation`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unsafe_negation.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unsafe-negation)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unsafe-negation)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-negation.html)
- [oxc project](https://github.com/oxc-project/oxc)