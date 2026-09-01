# No Implicit Coercion (eslint)

**Pattern ID:** `eslint_no-implicit-coercion`
**Plugin:** `eslint`

## What it does

Disallow shorthand type conversions using operators like `!!`, unary `+`, and `"" +`.

## Why is this bad?

Implicit type coercions using operators can be less clear than using explicit type conversion functions like `Boolean()`, `Number()`, and `String()`. Using explicit conversions makes the intent clearer and the code more readable.

## Examples

Examples of incorrect code for this rule:
javascript
`var b = !!foo;
var n = +foo;
var s = "" + foo;`
Examples of correct code for this rule:
javascript
`var b = Boolean(foo);
var n = Number(foo);
var s = String(foo);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-implicit-coercion": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-implicit-coercion": "error",
},
});`bash
`oxlint --deny no-implicit-coercion`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_implicit_coercion.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-implicit-coercion)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-implicit-coercion)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-coercion.html)
- [oxc project](https://github.com/oxc-project/oxc)