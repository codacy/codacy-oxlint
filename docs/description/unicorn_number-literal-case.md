# Number Literal Case (unicorn)

**Pattern ID:** `unicorn_number-literal-case`
**Plugin:** `unicorn`

## What it does

This rule enforces proper case for numeric literals.

## Why is this bad?

When both an identifier and a numeric literal are in lower case, it can be hard to differentiate between them.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = 0XFF;
const foo = 0xff;
const foo = 0Xff;
const foo = 0Xffn;
const foo = 0B10;
const foo = 0B10n;
const foo = 0O76;
const foo = 0O76n;
const foo = 2E-5;`
Examples of correct code for this rule:
javascript
`const foo = 0xFF;
const foo = 0b10;
const foo = 0o76;
const foo = 0xFFn;
const foo = 2e+5;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/number-literal-case": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/number-literal-case": "error",
},
});`bash
`oxlint --deny unicorn/number-literal-case`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/number_literal_case.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fnumber-literal-case)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/number-literal-case.html)
- [oxc project](https://github.com/oxc-project/oxc)