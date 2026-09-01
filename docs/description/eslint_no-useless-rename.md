# No Useless Rename (eslint)

**Pattern ID:** `eslint_no-useless-rename`
**Plugin:** `eslint`

## What it does

Disallow renaming import, export, and destructured assignments to the same name.

## Why is this bad?

It is unnecessary to rename a variable to the same name.

## Examples

Examples of incorrect code for this rule:
javascript
`import { foo as foo } from "foo";
const { bar: bar } = obj;
export { baz as baz };`
Examples of correct code for this rule:
javascript
`import { foo } from "foo";
const { bar: renamed } = obj;
export { baz };`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-useless-rename": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-useless-rename": "error",
},
});`bash
`oxlint --deny no-useless-rename`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_useless_rename.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-useless-rename)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-useless-rename)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-rename.html)
- [oxc project](https://github.com/oxc-project/oxc)