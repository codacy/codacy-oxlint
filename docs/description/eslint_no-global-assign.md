# No Global Assign (eslint)

**Pattern ID:** `eslint_no-global-assign`
**Plugin:** `eslint`

## What it does

Disallow modifications to read-only global variables.

## Why is this bad?

In almost all cases, you don't want to assign a value to these global variables as doing so could result in losing access to important functionality.

## Examples

Examples of incorrect code for this rule:
javascript
`Object = null;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-global-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-global-assign": "error",
},
});`bash
`oxlint --deny no-global-assign`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_global_assign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-global-assign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-global-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-global-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)