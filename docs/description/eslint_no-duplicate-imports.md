# No Duplicate Imports (eslint)

**Pattern ID:** `eslint_no-duplicate-imports`
**Plugin:** `eslint`

## What it does

Disallow duplicate module imports.

## Why is this bad?

Using a single import statement per module will make the code clearer because you can see everything being imported from that module on one line.

## Examples

Examples of incorrect code for this rule:
In the following example the module import on line 1 is repeated on line 3. These can be combined to make the list of imports more succinct.
js
`import { merge } from "module";
import something from "another-module";
import { find } from "module";`
Examples of correct code for this rule:
js
`import { merge, find } from "module";
import something from "another-module";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-duplicate-imports": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-duplicate-imports": "error",
},
});`bash
`oxlint --deny no-duplicate-imports`

## Version

This rule was added in v0.13.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_duplicate_imports.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-duplicate-imports)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-duplicate-imports)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-imports.html)
- [oxc project](https://github.com/oxc-project/oxc)