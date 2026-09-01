# Void Dom Elements No Children (react)

**Pattern ID:** `react_void-dom-elements-no-children`
**Plugin:** `react`

## What it does

Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children.

## Why is this bad?

There are some HTML elements that are only self-closing (e.g. img, br, hr). These are collectively known as void DOM elements. This rule checks that children are not passed to void DOM elements.

## Examples

Examples of incorrect code for this rule:
jsx
`<br>Children</br>
<br children='Children' />
<br dangerouslySetInnerHTML={{ __html: 'HTML' }} />
React.createElement('br', undefined, 'Children')
React.createElement('br', { children: 'Children' })
React.createElement('br', { dangerouslySetInnerHTML: { __html: 'HTML' } })`
Examples of correct code for this rule:
jsx
`<div>Children</div>
<div children='Children' />
<div dangerouslySetInnerHTML={{ __html: 'HTML' }} />
React.createElement('div', undefined, 'Children')
React.createElement('div', { children: 'Children' })
React.createElement('div', { dangerouslySetInnerHTML: { __html: 'HTML' } })`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/void-dom-elements-no-children": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/void-dom-elements-no-children": "error",
},
});`bash
`oxlint --deny react/void-dom-elements-no-children --react-plugin`

## Version

This rule was added in v0.2.11.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/void_dom_elements_no_children.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fvoid-dom-elements-no-children)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/void-dom-elements-no-children.html)
- [oxc project](https://github.com/oxc-project/oxc)