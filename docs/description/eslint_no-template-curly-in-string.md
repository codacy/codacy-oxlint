# No Template Curly In String (eslint)

**Pattern ID:** `eslint_no-template-curly-in-string`
**Plugin:** `eslint`

## What it does

Disallow template literal placeholder syntax in regular strings. This rule ensures that expressions like `${variable}` are only used within template literals, avoiding incorrect usage in regular strings.

## Why is this bad?

ECMAScript 6 allows programmers to create strings containing variables or expressions using template literals. This is done by embedding expressions like `${variable}` between backticks. If regular quotes (`'` or `"`) are used with template literal syntax, it results in the literal string `"${variable}"` instead of evaluating the expression. This rule helps to avoid this mistake, ensuring that expressions are correctly evaluated inside template literals.

## Examples

Examples of incorrect code for this rule:
javascript
`"Hello ${name}!";
"Hello ${name}!";
"Time: ${12 * 60 * 60 * 1000}";`
Examples of correct code for this rule:
javascript
``Hello ${name}!`;
`Time: ${12 * 60 * 60 * 1000}`;
templateFunction`Hello ${name}`;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-template-curly-in-string": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-template-curly-in-string": "error",
},
});`bash
`oxlint --deny no-template-curly-in-string`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_template_curly_in_string.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-template-curly-in-string)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-template-curly-in-string.html)
- [oxc project](https://github.com/oxc-project/oxc)