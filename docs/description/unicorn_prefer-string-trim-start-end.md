# Prefer String Trim Start End (unicorn)

**Pattern ID:** `unicorn_prefer-string-trim-start-end`
**Plugin:** `unicorn`

## What it does

`String#trimLeft()` and `String#trimRight()` are aliases of `String#trimStart()` and `String#trimEnd()`. This is to ensure consistency and use [direction](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)-independent wording.

## Why is this bad?

The `trimLeft` and `trimRight` names are confusing and inconsistent with the rest of the language.

## Examples

Examples of incorrect code for this rule:
javascript
`str.trimLeft();
str.trimRight();`
Examples of correct code for this rule:
javascript
`str.trimStart();
str.trimEnd();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-string-trim-start-end": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-string-trim-start-end": "error",
},
});`bash
`oxlint --deny unicorn/prefer-string-trim-start-end`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_string_trim_start_end.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-string-trim-start-end)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.html)
- [oxc project](https://github.com/oxc-project/oxc)