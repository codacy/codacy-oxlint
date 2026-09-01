# No Abusive Eslint Disable (unicorn)

**Pattern ID:** `unicorn_no-abusive-eslint-disable`
**Plugin:** `unicorn`

## What it does

Disallows `oxlint-disable` or `eslint-disable` comments without specifying rules.

## Why is this bad?

A general `oxlint-disable` or `eslint-disable` comment suppresses all lint errors, not just the intended one, potentially hiding useful warnings and making debugging harder.

## Examples

Examples of incorrect code for this rule:
javascript
`/* eslint-disable */
console.log(message);
console.log(message); // eslint-disable-line
// eslint-disable-next-line
console.log(message);`javascript
`/* oxlint-disable */
console.log(message);
console.log(message); // oxlint-disable-line
// oxlint-disable-next-line
console.log(message);`
Examples of correct code for this rule:
javascript
`/* eslint-disable no-console */
console.log(message);
console.log(message); // eslint-disable-line no-console
// eslint-disable-next-line no-console
console.log(message);`javascript
`/* oxlint-disable no-console */
console.log(message);
console.log(message); // oxlint-disable-line no-console
// oxlint-disable-next-line no-console
console.log(message);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-abusive-eslint-disable": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-abusive-eslint-disable": "error",
},
});`bash
`oxlint --deny unicorn/no-abusive-eslint-disable`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_abusive_eslint_disable.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-abusive-eslint-disable)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.html)
- [oxc project](https://github.com/oxc-project/oxc)