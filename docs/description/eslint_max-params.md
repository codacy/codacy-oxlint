# Max Params (eslint)

**Pattern ID:** `eslint_max-params`
**Plugin:** `eslint`

## What it does

Enforce a maximum number of parameters in function definitions which by default is three.

## Why is this bad?

Functions that take numerous parameters can be difficult to read and write because it requires the memorization of what each parameter is, its type, and the order they should appear in. As a result, many coders adhere to a convention that caps the number of parameters a function can take.

## Examples

Examples of incorrect code for this rule:
javascript
`function foo(bar, baz, qux, qxx) {
doSomething();
}`javascript
`let foo = (bar, baz, qux, qxx) => {
doSomething();
};`
Examples of correct code for this rule:
javascript
`function foo(bar, baz, qux) {
doSomething();
}`javascript
`let foo = (bar, baz, qux) => {
doSomething();
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"max-params": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"max-params": "error",
},
});`bash
`oxlint --deny max-params`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/max_params.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/max-params)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fmax-params)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-params.html)
- [oxc project](https://github.com/oxc-project/oxc)