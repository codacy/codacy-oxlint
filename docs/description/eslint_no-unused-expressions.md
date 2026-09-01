# No Unused Expressions (eslint)

**Pattern ID:** `eslint_no-unused-expressions`
**Plugin:** `eslint`

## What it does

This rule disallows unused expressions.

## Why is this bad?

Unused expressions are usually a mistake. They can be a symptom of a bug or a misunderstanding of the code.

## Examples

Examples of incorrect code for this rule:
ts
`Set<number>;
1 as number;
window!;`
Examples of correct code for this rule:
ts
`const foo = new Set<number>();`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unused-expressions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unused-expressions": "error",
},
});`bash
`oxlint --deny no-unused-expressions`

## Version

This rule was added in v0.14.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unused_expressions.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unused-expressions)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unused-expressions)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-expressions.html)
- [oxc project](https://github.com/oxc-project/oxc)