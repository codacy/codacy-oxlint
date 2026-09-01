# Prefer Optional Chain (typescript)

**Pattern ID:** `typescript_prefer-optional-chain`
**Plugin:** `typescript`

## What it does

Enforce using concise optional chain expressions instead of chained logical AND operators, negated logical OR operators, or empty objects.
Note that this rule is in the nursery category while we ensure it is working correctly in as many edge-case scenarios as possible. The logic for this is complex and the autofix may cause logic changes in some edge-cases.

## Why is this bad?

TypeScript 3.7 introduced optional chaining (`?.`) which provides a more concise and readable way to access properties on potentially nullish values. Using optional chaining instead of logical AND chains (`&&`) or other patterns improves code clarity.

## Examples

Examples of incorrect code for this rule:
ts
`foo && foo.bar;
foo && foo.bar && foo.bar.baz;
foo && foo["bar"];
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz;
foo && foo.bar && foo.bar.baz.buzz;
foo && foo.bar.baz && foo.bar.baz.buzz;
(foo || {}).bar;`
Examples of correct code for this rule:
ts
`foo?.bar;
foo?.bar?.baz;
foo?.["bar"];
foo?.bar?.baz?.buzz;
foo?.bar?.baz.buzz;
foo?.bar.baz?.buzz;
foo?.bar;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/prefer-optional-chain": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/prefer-optional-chain": "error",
},
});`bash
`oxlint --type-aware --deny typescript/prefer-optional-chain`

## Version

This rule was added in v1.39.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_optional_chain.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-optional-chain/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/prefer_optional_chain/prefer_optional_chain.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-optional-chain.html)
- [oxc project](https://github.com/oxc-project/oxc)