# No Hex Escape (unicorn)

**Pattern ID:** `unicorn_no-hex-escape`
**Plugin:** `unicorn`

## What it does

Enforces a convention of using [Unicode escapes](https://mathiasbynens.be/notes/javascript-escapes#unicode) instead of [hexadecimal escapes](https://mathiasbynens.be/notes/javascript-escapes#hexadecimal) for consistency and clarity.

## Why is this bad?

Using hexadecimal escapes can be less readable and harder to understand when compared to Unicode escapes.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = "\x1B";
const foo = `\x1B${bar}`;`
Examples of correct code for this rule:
javascript
`const foo = "\u001B";
const foo = `\u001B${bar}`;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-hex-escape": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-hex-escape": "error",
},
});`bash
`oxlint --deny unicorn/no-hex-escape`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_hex_escape.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-hex-escape)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-hex-escape.html)
- [oxc project](https://github.com/oxc-project/oxc)