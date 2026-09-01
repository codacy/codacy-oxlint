# Prefer Dom Node Dataset (unicorn)

**Pattern ID:** `unicorn_prefer-dom-node-dataset`
**Plugin:** `unicorn`

## What it does

Use `.dataset` on DOM elements over `getAttribute(…)`, `.setAttribute(…)`, `.removeAttribute(…)` and `.hasAttribute(…)`.

## Why is this bad?

The `dataset` property is a map of strings that contains all the `data-*` attributes from the element. It is a convenient way to access all of them at once.

## Examples

Examples of incorrect code for this rule:
javascript
`element.setAttribute("data-unicorn", "🦄");`
Examples of correct code for this rule:
javascript
`element.dataset.unicorn = "🦄";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-dom-node-dataset": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-dom-node-dataset": "error",
},
});`bash
`oxlint --deny unicorn/prefer-dom-node-dataset`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_dom_node_dataset.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-dom-node-dataset)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.html)
- [oxc project](https://github.com/oxc-project/oxc)