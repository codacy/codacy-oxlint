# Prefer Dom Node Remove (unicorn)

**Pattern ID:** `unicorn_prefer-dom-node-remove`
**Plugin:** `unicorn`

## What it does

Prefers the use of `child.remove()` over `parentNode.removeChild(child)`.

## Why is this bad?

The DOM function `Node#remove()` is preferred over the indirect removal of an object with `Node#removeChild()`.

## Examples

Examples of incorrect code for this rule:
javascript
`parentNode.removeChild(childNode);`
Examples of correct code for this rule:
javascript
`childNode.remove();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-dom-node-remove": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-dom-node-remove": "error",
},
});`bash
`oxlint --deny unicorn/prefer-dom-node-remove`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_dom_node_remove.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-remove.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-dom-node-remove)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-remove.html)
- [oxc project](https://github.com/oxc-project/oxc)