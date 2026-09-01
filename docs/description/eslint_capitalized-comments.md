# Capitalized Comments (eslint)

**Pattern ID:** `eslint_capitalized-comments`
**Plugin:** `eslint`

## What it does

Enforces or disallows capitalization of the first letter of a comment.

## Why is this bad?

Inconsistent capitalization of comments can make code harder to read. This rule helps enforce a consistent style across the codebase.

## Examples

Examples of incorrect code for this rule with the default `"always"` option:
js
`// lowercase comment
/* lowercase block comment */`
Examples of correct code for this rule with the default `"always"` option:
js
`// Capitalized comment
/* Capitalized block comment */
// 123 - comments starting with non-letters are ignored`

## Configuration

Configuration for the capitalized-comments rule.
The first element specifies whether comments should `"always"` or `"never"` begin with a capital letter. The second element is an optional object containing additional options.

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"capitalized-comments": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"capitalized-comments": "error",
},
});`bash
`oxlint --deny capitalized-comments`

## Version

This rule was added in v1.34.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/capitalized_comments.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/capitalized-comments)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fcapitalized-comments)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/capitalized-comments.html)
- [oxc project](https://github.com/oxc-project/oxc)