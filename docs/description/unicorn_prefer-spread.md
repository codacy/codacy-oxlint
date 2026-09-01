# Prefer Spread (unicorn)

**Pattern ID:** `unicorn_prefer-spread`
**Plugin:** `unicorn`

## What it does

Enforces the use of the spread operator (`...`) over outdated patterns.

## Why is this bad?

Using the spread operator is more concise and readable.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = Array.from(set);
const foo = Array.from(new Set([1, 2]));`
Examples of correct code for this rule:
javascript
`[...set].map(() => {});
Array.from(...argumentsArray);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-spread": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-spread": "error",
},
});`bash
`oxlint --deny unicorn/prefer-spread`

## Version

This rule was added in v0.0.17.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_spread.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-spread)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-spread.html)
- [oxc project](https://github.com/oxc-project/oxc)