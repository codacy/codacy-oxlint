# Logical Assignment Operators (eslint)

**Pattern ID:** `eslint_logical-assignment-operators`
**Plugin:** `eslint`

## What it does

This rule requires or disallows logical assignment operator shorthand.

## Why is this bad?

ES2021 introduces the assignment operator shorthand for the logical operators `||`, `&&` and `??`. Before, this was only allowed for mathematical operations such as `+` or `*` (see the rule `operator-assignment`). The shorthand can be used if the assignment target and the left expression of a logical expression are the same. For example `a = a || b` can be shortened to `a ||= b`.

## Examples

Examples of incorrect code for this rule with the default `always` option:
js
`a = a || b;
a = a && b;
a = a ?? b;
a || (a = b);
a && (a = b);
a ?? (a = b);
a = a || b || c;
a = a && b && c;
a = a ?? b ?? c;`
Examples of correct code for this rule with the default `always` option:
js
`a = b;
a += b;
a ||= b;
a = b || c;
a || (b = c);
if (a) a = b;
a = a || b || c;`
Examples of incorrect code for this rule with the `never` option:
js
`a ||= b;
a &&= b;
a ??= b;`
Examples of correct code for this rule with the `never` option:
js
`a = a || b;
a = a && b;
a = a ?? b;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"logical-assignment-operators": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"logical-assignment-operators": "error",
},
});`bash
`oxlint --deny logical-assignment-operators`

## Version

This rule was added in v1.63.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/logical_assignment_operators.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/logical-assignment-operators)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Flogical-assignment-operators)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/logical-assignment-operators.html)
- [oxc project](https://github.com/oxc-project/oxc)