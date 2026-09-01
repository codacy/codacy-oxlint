# No Unsafe Optional Chaining (eslint)

**Pattern ID:** `eslint_no-unsafe-optional-chaining`
**Plugin:** `eslint`

## What it does

Disallow use of optional chaining in contexts where the `undefined` value is not allowed.

## Why is this bad?

The optional chaining (`?.`) expression can short-circuit with a return value of `undefined`. Therefore, treating an evaluated optional chaining expression as a function, object, number, etc., can cause TypeError or unexpected results. For example:

## Examples

Examples of incorrect code for this rule:
javascript
`var obj = undefined;
1 in obj?.foo; // TypeError
with (obj?.foo); // TypeError
for (bar of obj?.foo); // TypeError
bar instanceof obj?.foo; // TypeError
const { bar } = obj?.foo; // TypeError`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unsafe-optional-chaining": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unsafe-optional-chaining": "error",
},
});`bash
`oxlint --deny no-unsafe-optional-chaining`

## Version

This rule was added in v0.0.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unsafe_optional_chaining.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unsafe-optional-chaining)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.html)
- [oxc project](https://github.com/oxc-project/oxc)