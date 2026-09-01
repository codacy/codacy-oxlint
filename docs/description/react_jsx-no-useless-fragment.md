# Jsx No Useless Fragment (react)

**Pattern ID:** `react_jsx-no-useless-fragment`
**Plugin:** `react`

## What it does

Disallow unnecessary fragments.

## Why is this bad?

Fragments are a useful tool when you need to group multiple children without adding a node to the DOM tree. However, sometimes you might end up with a fragment with a single child. When this child is an element, string, or expression, it's not necessary to use a fragment.

## Examples

Examples of incorrect code for this rule:
jsx
`<>foo</>
<div><>foo</></div>`
Examples of correct code for this rule:
jsx
`<>foo <div></div></>
<div>foo</div>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-no-useless-fragment": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-no-useless-fragment": "error",
},
});`bash
`oxlint --deny react/jsx-no-useless-fragment --react-plugin`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_no_useless_fragment.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-no-useless-fragment)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-useless-fragment.html)
- [oxc project](https://github.com/oxc-project/oxc)