# No Extra Boolean Cast (eslint)

**Pattern ID:** `eslint_no-extra-boolean-cast`
**Plugin:** `eslint`

## What it does

This rule disallows unnecessary boolean casts.

## Why is this bad?

In contexts such as an if statement's test where the result of the expression will already be coerced to a Boolean, casting to a Boolean via double negation (`!!`) or a `Boolean` call is unnecessary.

## Examples

Examples of incorrect code for this rule:
javascript
`var foo = !!!bar;
var foo = Boolean(!!bar);
if (!!foo) {
}
if (Boolean(foo)) {
}
// with "enforceForInnerExpressions" option enabled
if (!!foo || bar) {
}`
Examples of correct code for this rule:
javascript
`var foo = !bar;
var foo = Boolean(bar);
if (foo) {
}
if (foo) {
}
// with "enforceForInnerExpressions" option enabled
if (foo || bar) {
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-extra-boolean-cast": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-extra-boolean-cast": "error",
},
});`bash
`oxlint --deny no-extra-boolean-cast`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_extra_boolean_cast.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-extra-boolean-cast)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-boolean-cast.html)
- [oxc project](https://github.com/oxc-project/oxc)