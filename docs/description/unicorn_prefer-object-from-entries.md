# Prefer Object From Entries (unicorn)

**Pattern ID:** `unicorn_prefer-object-from-entries`
**Plugin:** `unicorn`

## What it does

Encourages using `Object.fromEntries` when converting an array of key-value pairs into an object.

## Why is this bad?

Manually constructing objects from key-value pairs using `reduce` or `forEach` is more verbose, error-prone, and harder to understand. The `Object.fromEntries` method is clearer, more declarative, and built for exactly this purpose.

## Examples

Examples of incorrect code for this rule:
js
`const result = pairs.reduce((obj, [key, value]) => {
obj[key] = value;
return obj;
}, {});
const result = {};
pairs.forEach(([key, value]) => {
result[key] = value;
});`
Examples of correct code for this rule:
js
`const result = Object.fromEntries(pairs);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-object-from-entries": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-object-from-entries": "error",
},
});`bash
`oxlint --deny unicorn/prefer-object-from-entries`

## Version

This rule was added in v0.16.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_object_from_entries.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-object-from-entries)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-object-from-entries.html)
- [oxc project](https://github.com/oxc-project/oxc)