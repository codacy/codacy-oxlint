# No Empty Character Class (eslint)

**Pattern ID:** `eslint_no-empty-character-class`
**Plugin:** `eslint`

## What it does

Disallow empty character classes in regular expressions.

## Why is this bad?

Because empty character classes in regular expressions do not match anything, they might be typing mistakes.

## Examples

Examples of incorrect code for this rule:
javascript
`var foo = /^abc[]/;`
Examples of correct code for this rule:
javascript
`var foo = /^abc/;
var foo2 = /^abc[123]/;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-empty-character-class": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-empty-character-class": "error",
},
});`bash
`oxlint --deny no-empty-character-class`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_empty_character_class.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-empty-character-class)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-empty-character-class)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-character-class.html)
- [oxc project](https://github.com/oxc-project/oxc)