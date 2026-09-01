# Bad Object Literal Comparison (oxc)

**Pattern ID:** `oxc_bad-object-literal-comparison`
**Plugin:** `oxc`

## What it does

Checks for comparisons between object and array literals.

## Why is this bad?

Comparing a variable to an object or array literal will always return false as object and array literals are never equal to each other.
If you want to check if an object or array is empty, use `Object.entries()` or `Object.keys()` and their lengths.

## Examples

Examples of incorrect code for this rule:
javascript
`if (x === {}) {
}
if (arr !== []) {
}`
Examples of correct code for this rule:
javascript
`if (typeof x === "object" && Object.keys(x).length === 0) {
}
if (Array.isArray(x) && x.length === 0) {
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/bad-object-literal-comparison": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/bad-object-literal-comparison": "error",
},
});`bash
`oxlint --deny oxc/bad-object-literal-comparison`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/bad_object_literal_comparison.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fbad-object-literal-comparison)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-object-literal-comparison.html)
- [oxc project](https://github.com/oxc-project/oxc)