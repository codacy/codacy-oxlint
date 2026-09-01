# Default Case (eslint)

**Pattern ID:** `eslint_default-case`
**Plugin:** `eslint`

## What it does

Enforces that all `switch` statements include a `default` case, unless explicitly marked with a configured comment.

## Why is this bad?

Without a `default` case, it is unclear whether the omission was intentional or an oversight. Adding a `default` or a special comment makes the code more explicit and reduces mistakes.
You may optionally include a `// no default` after the last case if there is no default case. The comment may be in any desired case, such as `// No Default`.
Example configuration:
json
`{
"default-case": ["error", { "commentPattern": "^skip\\sdefault" }]
}`

## Examples

Examples of incorrect code for this rule:
js
`switch (foo) {
case 1:
break;
}`
Examples of correct code for this rule:
js
`switch (a) {
case 1:
break;
default:
break;
}
switch (a) {
case 1:
break;
// no default
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"default-case": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"default-case": "error",
},
});`bash
`oxlint --deny default-case`

## Version

This rule was added in v0.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/default_case.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/default-case)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fdefault-case)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case.html)
- [oxc project](https://github.com/oxc-project/oxc)