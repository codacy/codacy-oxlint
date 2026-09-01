# Consistent Template Literal Escape (unicorn)

**Pattern ID:** `unicorn_consistent-template-literal-escape`
**Plugin:** `unicorn`

## What it does

Enforce consistent style for escaping `${` in template literals.

## Why is this bad?

Using `\${` instead of `${` can improve readability and prevent confusion.

## Examples

Examples of incorrect code for this rule:
js
`const foo = `$\{a}`;`js
`const foo = `\$\{a}`;`
Examples of correct code for this rule:
js
`const foo = `\${a}`;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/consistent-template-literal-escape": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/consistent-template-literal-escape": "error",
},
});`bash
`oxlint --deny unicorn/consistent-template-literal-escape`

## Version

This rule was added in v1.60.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/consistent_template_literal_escape.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-template-literal-escape.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fconsistent-template-literal-escape)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-template-literal-escape.html)
- [oxc project](https://github.com/oxc-project/oxc)