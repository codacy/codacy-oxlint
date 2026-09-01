# Bad Char At Comparison (oxc)

**Pattern ID:** `oxc_bad-char-at-comparison`
**Plugin:** `oxc`

## What it does

This rule warns when a character accessed with `charAt`, `at`, or bracket notation is compared with a string of length greater than 1.

## Why is this bad?

Character access returns a string of length at most 1. If the return value is compared with a string of length greater than 1, the comparison will always be false.

## Examples

Examples of incorrect code for this rule:
javascript
`a.charAt(4) === "a2";
"abc".at(4) === "a2";
"abc"[4] === "a2";
a.charAt(4) === "/n";`
Examples of correct code for this rule:
javascript
`a.charAt(4) === "a";
a.charAt(4) === "\n";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/bad-char-at-comparison": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/bad-char-at-comparison": "error",
},
});`bash
`oxlint --deny oxc/bad-char-at-comparison`

## Version

This rule was added in v0.0.22.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/bad_char_at_comparison.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fbad-char-at-comparison)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-char-at-comparison.html)
- [oxc project](https://github.com/oxc-project/oxc)