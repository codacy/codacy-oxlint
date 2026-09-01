# No Misleading Character Class (eslint)

**Pattern ID:** `eslint_no-misleading-character-class`
**Plugin:** `eslint`

## What it does

This rule reports regular expressions which include multiple code point characters in character class syntax. This includes:
- Characters with combining marks (e.g., `Á` where `A` is followed by a combining acute accent)
- Characters with emoji modifiers (e.g., `👶🏻`)
- Pairs of regional indicator symbols (e.g., `🇯🇵`)
- Characters joined by zero-width joiner (ZWJ) (e.g., `👨👩👦`)
- Surrogate pairs without the Unicode flag (e.g., `/^[👍]$/`)

## Why is this bad?

Unicode includes characters which are made by multiple code points. RegExp character class syntax (`/[abc]/`) cannot handle characters which are made by multiple code points as a character; those characters will be dissolved to each code point. For example, `❇️` is made by `❇` (`U+2747`) and VARIATION SELECTOR-16 (`U+FE0F`). If this character is in a RegExp character class, it will match either `❇` (`U+2747`) or VARIATION SELECTOR-16 (`U+FE0F`) rather than `❇️`.
This can lead to regular expressions that do not match what the author intended, especially for emoji, regional indicators, and characters with combining marks.

## Examples

Examples of incorrect code for this rule:
javascript
`/^[Á]$/u;
/^[❇️]$/u;
/^[👶🏻]$/u;
/^[🇯🇵]$/u;
/^[👨👩👦]$/u;
/^[👍]$/;
new RegExp("[🎵]");`
Examples of correct code for this rule:
javascript
`/^[abc]$/;
/^[👍]$/u;
/[\u00B7\u0300-\u036F]/u;
new RegExp("^[\u{1F1EF}\u{1F1F5}]", "u");`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-misleading-character-class": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-misleading-character-class": "error",
},
});`bash
`oxlint --deny no-misleading-character-class`

## Version

This rule was added in v1.17.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_misleading_character_class.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-misleading-character-class)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-misleading-character-class)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-misleading-character-class.html)
- [oxc project](https://github.com/oxc-project/oxc)