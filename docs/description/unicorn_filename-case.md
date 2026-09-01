# Filename Case (unicorn)

**Pattern ID:** `unicorn_filename-case`
**Plugin:** `unicorn`

## What it does

Enforces a consistent case style for filenames to improve project organization and maintainability. By default, `kebab-case` is enforced, but other styles can be configured.
Files named `index.js`, `index.ts`, etc. are exempt from this rule as they cannot reliably be renamed to other casings (mainly just a problem with PascalCase).

## Why is this bad?

Inconsistent file naming conventions make it harder to locate files, navigate projects, and enforce consistency across a codebase. Standardizing naming conventions improves readability, reduces cognitive overhead, and aligns with best practices in large-scale development.

## Examples

Examples of correct filenames for each case:

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/filename-case": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/filename-case": "error",
},
});`bash
`oxlint --deny unicorn/filename-case`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/filename_case.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Ffilename-case)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/filename-case.html)
- [oxc project](https://github.com/oxc-project/oxc)