# No Unreadable Array Destructuring (unicorn)

**Pattern ID:** `unicorn_no-unreadable-array-destructuring`
**Plugin:** `unicorn`

## What it does

Disallows destructuring values from an array in ways that are difficult to read.

## Why is this bad?

Destructuring can be very useful, but it can also make some code harder to read. This rule prevents ignoring consecutive values (e.g. `let [,,foo] = array`) when destructuring from an array.

## Examples

Examples of incorrect code for this rule:
javascript
`const [, , foo] = parts;
const [, , ...rest] = parts;`
Examples of correct code for this rule:
javascript
`const [foo] = parts;
const foo = parts[3];
const rest = parts.slice(2);
// One is fine
const [, foo] = parts;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-unreadable-array-destructuring": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-unreadable-array-destructuring": "error",
},
});`bash
`oxlint --deny unicorn/no-unreadable-array-destructuring`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_unreadable_array_destructuring.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-unreadable-array-destructuring)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unreadable-array-destructuring.html)
- [oxc project](https://github.com/oxc-project/oxc)