# No Void (eslint)

**Pattern ID:** `eslint_no-void`
**Plugin:** `eslint`

## What it does

Disallows the use of the `void` operator.

## Why is this bad?

The `void` operator is often used to get `undefined`, but this is unnecessary because `undefined` can be used directly instead.

## Examples

Examples of incorrect code for this rule:
ts
`void 0;
var foo = void 0;`
Examples of correct code for this rule:
ts
`"var foo = bar()";
"foo.void()";
"foo.void = bar";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-void": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-void": "error",
},
});`bash
`oxlint --deny no-void`

## Version

This rule was added in v0.2.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_void.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-void)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-void)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-void.html)
- [oxc project](https://github.com/oxc-project/oxc)