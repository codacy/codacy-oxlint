# No Useless Catch (eslint)

**Pattern ID:** `eslint_no-useless-catch`
**Plugin:** `eslint`

## What it does

Disallow unnecessary catch clauses.

## Why is this bad?

A catch clause that only rethrows the original error is redundant, and has no effect on the runtime behavior of the program. These redundant clauses can be a source of confusion and code bloat, so it’s better to disallow these unnecessary catch clauses.

## Examples

Examples of incorrect code for this rule:
javascript
`try {
doSomethingThatMightThrow();
} catch (e) {
throw e;
}`
Examples of correct code for this rule:
javascript
`doSomethingThatMightThrow();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-useless-catch": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-useless-catch": "error",
},
});`bash
`oxlint --deny no-useless-catch`

## Version

This rule was added in v0.0.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_useless_catch.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-useless-catch)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-useless-catch)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-catch.html)
- [oxc project](https://github.com/oxc-project/oxc)