# Valid Typeof (eslint)

**Pattern ID:** `eslint_valid-typeof`
**Plugin:** `eslint`

## What it does

Enforce comparing `typeof` expressions against valid strings.

## Why is this bad?

For a vast majority of use cases, the result of the `typeof` operator is one of the following string literals: `"undefined"`, `"object"`, `"boolean"`, `"number"`, `"string"`, `"function"`, `"symbol"`, and `"bigint"`. It is usually a typing mistake to compare the result of a `typeof` operator to other string literals.

## Examples

Examples of incorrect code for this rule:
js
`typeof foo === "strnig";
typeof foo == "undefimed";
typeof bar != "nunber"; // spellchecker:disable-line
typeof bar !== "fucntion"; // spellchecker:disable-line`
Examples of correct code for this rule:
js
`typeof foo === "string";
typeof bar == "undefined";
typeof foo === baz;
typeof bar === typeof qux;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"valid-typeof": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"valid-typeof": "error",
},
});`bash
`oxlint --deny valid-typeof`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/valid_typeof.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/valid-typeof)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fvalid-typeof)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/valid-typeof.html)
- [oxc project](https://github.com/oxc-project/oxc)