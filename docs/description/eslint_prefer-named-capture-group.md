# Prefer Named Capture Group (eslint)

**Pattern ID:** `eslint_prefer-named-capture-group`
**Plugin:** `eslint`

## What it does

Enforces the use of named capture groups in regular expressions.

## Why is this bad?

Unnamed capturing groups (`(...)`) are referenced only by position, which makes the regex harder to read and maintain. When the pattern changes, index-based references silently break. Named groups (`(?<name>...)`) make the intent explicit and allow references by name (e.g. `match.groups.year`), which is more robust.

## Examples

Examples of incorrect code for this rule:
js
`const re = /([0-9]{4})-([0-9]{2})/;
const match = re.exec(str);
const year = match[1]; // fragile index`
Examples of correct code for this rule:
js
`const re = /(?<year>[0-9]{4})-(?<month>[0-9]{2})/;
const match = re.exec(str);
const year = match.groups.year; // explicit name
// Non-capturing groups are always fine
const parts = /(?:[0-9]{4})/;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-named-capture-group": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-named-capture-group": "error",
},
});`bash
`oxlint --deny prefer-named-capture-group`

## Version

This rule was added in v1.68.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_named_capture_group.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-named-capture-group)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-named-capture-group.html)
- [oxc project](https://github.com/oxc-project/oxc)