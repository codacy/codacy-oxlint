# Prefer String Starts Ends With (typescript)

**Pattern ID:** `typescript_prefer-string-starts-ends-with`
**Plugin:** `typescript`

## What it does

Prefer `startsWith` and `endsWith` over manual string boundary checks.

## Why is this bad?

Boundary checks written with `slice`, `indexOf`, regex anchors, or manual indexing are harder to read and maintain than `startsWith`/`endsWith`.

## Examples

Examples of incorrect code for this rule:
ts
`value.slice(0, 3) === "foo";
value.slice(-3) === "bar";`
Examples of correct code for this rule:
ts
`value.startsWith("foo");
value.endsWith("bar");`

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
"typescript/prefer-string-starts-ends-with": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/prefer-string-starts-ends-with": "error",
},
});`bash
`oxlint --type-aware --deny typescript/prefer-string-starts-ends-with`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_string_starts_ends_with.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-string-starts-ends-with/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/prefer_string_starts_ends_with/prefer_string_starts_ends_with.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-string-starts-ends-with.html)
- [oxc project](https://github.com/oxc-project/oxc)