# Prefer Dom Node Text Content (unicorn)

**Pattern ID:** `unicorn_prefer-dom-node-text-content`
**Plugin:** `unicorn`

## What it does

Enforces the use of `.textContent` over `.innerText` for DOM nodes.

## Why is this bad?

There are some disadvantages of using `.innerText`.
- `.innerText` returns rendered text and ignores hidden content, while `.textContent` returns the node's full text content.
- `.innerText` can trigger reflow because it takes CSS styles into account.
- `.innerText` is defined only for HTMLElement objects, while `.textContent` is defined for all Node objects.

## Examples

Examples of incorrect code for this rule:
javascript
`const text = foo.innerText;`
Examples of correct code for this rule:
javascript
`const text = foo.textContent;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-dom-node-text-content": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-dom-node-text-content": "error",
},
});`bash
`oxlint --deny unicorn/prefer-dom-node-text-content`

## Version

This rule was added in v0.0.21.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_dom_node_text_content.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-text-content.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-dom-node-text-content)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-text-content.html)
- [oxc project](https://github.com/oxc-project/oxc)