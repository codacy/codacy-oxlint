# Prefer Modern Dom Apis (unicorn)

**Pattern ID:** `unicorn_prefer-modern-dom-apis`
**Plugin:** `unicorn`

## What it does

Enforces the use of:
- `childNode.replaceWith(newNode)` over `parentNode.replaceChild(newNode, oldNode)`
- `referenceNode.before(newNode)` over `parentNode.insertBefore(newNode, referenceNode)`
- `referenceNode.before('text')` over `referenceNode.insertAdjacentText('beforebegin', 'text')`
- `referenceNode.before(newNode)` over `referenceNode.insertAdjacentElement('beforebegin', newNode)`

## Why is this bad?

There are some advantages of using the newer DOM APIs, like:
- Traversing to the parent node is not necessary.
- Appending multiple nodes at once.
- Both `DOMString` and DOM node objects can be manipulated.

## Examples

Examples of incorrect code for this rule:
javascript
`oldChildNode.replaceWith(newChildNode);`
Examples of correct code for this rule:
javascript
`parentNode.replaceChild(newChildNode, oldChildNode);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-modern-dom-apis": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-modern-dom-apis": "error",
},
});`bash
`oxlint --deny unicorn/prefer-modern-dom-apis`

## Version

This rule was added in v0.0.20.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_modern_dom_apis.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-modern-dom-apis)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.html)
- [oxc project](https://github.com/oxc-project/oxc)