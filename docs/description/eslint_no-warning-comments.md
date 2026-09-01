# No Warning Comments (eslint)

**Pattern ID:** `eslint_no-warning-comments`
**Plugin:** `eslint`

## What it does

Disallows warning comments such as TODO, FIXME, XXX in code.

## Why is this bad?

Developers often add comments like TODO or FIXME to mark incomplete work or areas that need attention. While useful during development, these comments can indicate unfinished code that shouldn't be shipped to production. This rule helps catch such comments before they make it into production code.

## Examples

Examples of incorrect code for this rule:
javascript
`// TODO: implement this feature
function doSomething() {}
// FIXME: this is broken
const x = 1;
/* XXX: hack */
let y = 2;`
Examples of correct code for this rule:
javascript
`// This is a regular comment
function doSomething() {}
// Note: This explains something
const x = 1;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-warning-comments": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-warning-comments": "error",
},
});`bash
`oxlint --deny no-warning-comments`

## Version

This rule was added in v1.24.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_warning_comments.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-warning-comments)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-warning-comments)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-warning-comments.html)
- [oxc project](https://github.com/oxc-project/oxc)