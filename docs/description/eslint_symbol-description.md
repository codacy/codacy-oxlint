# Symbol Description (eslint)

**Pattern ID:** `eslint_symbol-description`
**Plugin:** `eslint`

## What it does

Require symbol descriptions.

## Why is this bad?

The Symbol function may have an optional description.
js
`var foo = Symbol("some description");
var someString = "some description";
var bar = Symbol(someString);`
Using `description` promotes easier debugging: when a symbol is logged the description is used:
js
`var foo = Symbol("some description");
console.log(foo);
// prints - Symbol(some description)`

## Examples

Examples of incorrect code for this rule:
javascript
`var foo = Symbol();`
Examples of correct code for this rule:
javascript
`var foo = Symbol("some description");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"symbol-description": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"symbol-description": "error",
},
});`bash
`oxlint --deny symbol-description`

## Version

This rule was added in v0.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/symbol_description.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/symbol-description)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fsymbol-description)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/symbol-description.html)
- [oxc project](https://github.com/oxc-project/oxc)