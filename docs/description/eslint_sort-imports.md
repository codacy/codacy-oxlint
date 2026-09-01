# Sort Imports (eslint)

**Pattern ID:** `eslint_sort-imports`
**Plugin:** `eslint`

## What it does

This rule checks all import declarations and verifies that all imports are first sorted by the used member syntax and then alphabetically by the first member or alias name.
When declaring multiple imports, a sorted list of import declarations make it easier for developers to read the code and find necessary imports later.

## Why is this bad?

Consistent import sorting can be useful for readability and maintainability of code.

## Examples

Examples of incorrect code for this rule:
javascript
`import { b, a, c } from "foo.js";
import d from "foo.js";
import e from "bar.js";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"sort-imports": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"sort-imports": "error",
},
});`bash
`oxlint --deny sort-imports`

## Version

This rule was added in v0.4.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/sort_imports.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/sort-imports)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fsort-imports)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-imports.html)
- [oxc project](https://github.com/oxc-project/oxc)