# Scope (jsx-a11y)

**Pattern ID:** `jsx-a11y_scope`
**Plugin:** `jsx-a11y`

## What it does

The scope prop should be used only on `<th>` elements.

## Why is this bad?

The scope attribute makes table navigation much easier for screen reader users, provided that it is used correctly. Incorrectly used, scope can make table navigation much harder and less efficient. A screen reader operates under the assumption that a table has a header and that this header specifies a scope. Because of the way screen readers function, having an accurate header makes viewing a table far more accessible and more efficient for people who use the device.

## Examples

Examples of incorrect code for this rule:
jsx
`<div scope />`
Examples of correct code for this rule:
jsx
`<th scope="col" />
<th scope={scope} />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/scope": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/scope": "error",
},
});`bash
`oxlint --deny jsx-a11y/scope --jsx-a11y-plugin`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/scope.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fscope)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/scope.html)
- [oxc project](https://github.com/oxc-project/oxc)