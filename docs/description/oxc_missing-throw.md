# Missing Throw (oxc)

**Pattern ID:** `oxc_missing-throw`
**Plugin:** `oxc`

## What it does

Checks whether the `throw` keyword is missing in front of a `new` expression.

## Why is this bad?

The `throw` keyword is required in front of a `new` expression to throw an error. Omitting it is usually a mistake.

## Examples

Examples of incorrect code for this rule:
javascript
`function foo() {
throw Error();
}
const foo = () => {
new Error();
};`
Examples of correct code for this rule:
javascript
`function foo() {
throw new Error();
}
const foo = () => {
throw new Error();
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/missing-throw": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/missing-throw": "error",
},
});`bash
`oxlint --deny oxc/missing-throw`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/missing_throw.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fmissing-throw)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/missing-throw.html)
- [oxc project](https://github.com/oxc-project/oxc)