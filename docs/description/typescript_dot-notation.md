# Dot Notation (typescript)

**Pattern ID:** `typescript_dot-notation`
**Plugin:** `typescript`

## What it does

Enforce dot notation whenever property access can be written safely as `obj.prop`.

## Why is this bad?

Dot notation is generally more readable and concise than bracket notation for static property names.

## Examples

Examples of incorrect code for this rule:
ts
`obj["name"];
foo["bar"];`
Examples of correct code for this rule:
ts
`obj.name;
foo.bar;
obj[key];
obj["not-an-identifier"];`

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
"typescript/dot-notation": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/dot-notation": "error",
},
});`bash
`oxlint --type-aware --deny typescript/dot-notation`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/dot_notation.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/dot-notation/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/dot_notation/dot_notation.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/dot-notation.html)
- [oxc project](https://github.com/oxc-project/oxc)