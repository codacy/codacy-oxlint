# No Inline Comments (eslint)

**Pattern ID:** `eslint_no-inline-comments`
**Plugin:** `eslint`

## What it does

Disallows comments on the same line as code.

## Why is this bad?

Comments placed at the end of a line of code can make code harder to read. They can easily be missed when scanning vertically, and they make lines longer. Moving comments to their own lines makes them more prominent and reduces line length.

## Examples

Examples of incorrect code for this rule:
js
`var a = 1; // inline comment
var b = 2; /* another inline comment */`
Examples of correct code for this rule:
js
`// comment on its own line
var a = 1;
/* block comment on its own line */
var b = 2;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-inline-comments": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-inline-comments": "error",
},
});`bash
`oxlint --deny no-inline-comments`

## Version

This rule was added in v1.34.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_inline_comments.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-inline-comments)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-inline-comments)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inline-comments.html)
- [oxc project](https://github.com/oxc-project/oxc)