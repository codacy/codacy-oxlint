# Require Module Specifiers (unicorn)

**Pattern ID:** `unicorn_require-module-specifiers`
**Plugin:** `unicorn`

## What it does

Enforce a non-empty specifier list in `import` and `export` statements.

## Why is this bad?

Empty `import`/`export` specifiers add no value and can be confusing. If you want to import a module for side effects, use `import 'module'` instead.

## Examples

Examples of incorrect code for this rule:
js
`import {} from "foo";
import foo from "foo";
export {} from "foo";
export {};`
Examples of correct code for this rule:
js
`import "foo";
import foo from "foo";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/require-module-specifiers": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/require-module-specifiers": "error",
},
});`bash
`oxlint --deny unicorn/require-module-specifiers`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/require_module_specifiers.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-specifiers.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Frequire-module-specifiers)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-specifiers.html)
- [oxc project](https://github.com/oxc-project/oxc)