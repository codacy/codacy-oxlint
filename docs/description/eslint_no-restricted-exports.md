# No Restricted Exports (eslint)

**Pattern ID:** `eslint_no-restricted-exports`
**Plugin:** `eslint`

## What it does

This rule disallows specified names from being used as exported names.
By default, this rule doesn’t disallow any names. Only the names you specify in the configuration will be disallowed.

## Why is this bad?

In a project, certain names may be disallowed from being used as exported names for various reasons.

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-restricted-exports": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-restricted-exports": "error",
},
});`bash
`oxlint --deny no-restricted-exports`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_restricted_exports.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-restricted-exports)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-restricted-exports)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-exports.html)
- [oxc project](https://github.com/oxc-project/oxc)