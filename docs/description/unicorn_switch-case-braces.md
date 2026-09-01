# Switch Case Braces (unicorn)

**Pattern ID:** `unicorn_switch-case-braces`
**Plugin:** `unicorn`

## What it does

Requires empty switch cases to omit braces, while non-empty cases must use braces. This reduces visual clutter for empty cases and enforces proper scoping for non-empty ones.

## Why is this bad?

Using braces unnecessarily for empty cases adds visual noise, while omitting braces in non-empty cases can lead to scoping issues.

## Examples

Examples of incorrect code for this rule:
javascript
`switch (num) {
case 1: {
}
case 2:
console.log("Case 2");
break;
}`
Examples of correct code for this rule:
javascript
`switch (num) {
case 1:
case 2: {
console.log("Case 2");
break;
}
}`
Example config:
json
`"unicorn/switch-case-braces": ["error", "avoid"]`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/switch-case-braces": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/switch-case-braces": "error",
},
});`bash
`oxlint --deny unicorn/switch-case-braces`

## Version

This rule was added in v0.0.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/switch_case_braces.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fswitch-case-braces)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/switch-case-braces.html)
- [oxc project](https://github.com/oxc-project/oxc)