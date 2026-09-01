# Empty Brace Spaces (unicorn)

**Pattern ID:** `unicorn_empty-brace-spaces`
**Plugin:** `unicorn`

## What it does

Removes the extra spaces or new line characters inside a pair of braces that does not contain additional code. This ensures that braces are clean and do not contain unnecessary spaces or newlines.

## Why is this bad?

Extra spaces inside braces can negatively impact the readability of the code. Keeping braces clean and free of unnecessary characters improves consistency and makes the code easier to understand and maintain.

## Examples

Examples of incorrect code for this rule:
javascript
`const a = {  };
class A {
}`
Examples of correct code for this rule:
javascript
`const a = {};
class A {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/empty-brace-spaces": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/empty-brace-spaces": "error",
},
});`bash
`oxlint --deny unicorn/empty-brace-spaces`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/empty_brace_spaces.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fempty-brace-spaces)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/empty-brace-spaces.html)
- [oxc project](https://github.com/oxc-project/oxc)