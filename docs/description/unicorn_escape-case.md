# Escape Case (unicorn)

**Pattern ID:** `unicorn_escape-case`
**Plugin:** `unicorn`

## What it does

Enforces defining escape sequence values with uppercase characters rather than lowercase ones. This promotes readability by making the escaped value more distinguishable from the identifier.

## Why is this bad?

Using lowercase characters in escape sequences makes them less readable and harder to distinguish from surrounding code. Most style guides recommend uppercase for consistency and clarity.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = "\xa9";
const foo = "\ud834";
const foo = "\u{1d306}";
const foo = "\ca";`
Examples of correct code for this rule:
javascript
`const foo = "\xA9";
const foo = "\uD834";
const foo = "\u{1D306}";
const foo = "\cA";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/escape-case": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/escape-case": "error",
},
});`bash
`oxlint --deny unicorn/escape-case`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/escape_case.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fescape-case)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/escape-case.html)
- [oxc project](https://github.com/oxc-project/oxc)