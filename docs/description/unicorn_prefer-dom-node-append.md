# Prefer Dom Node Append (unicorn)

**Pattern ID:** `unicorn_prefer-dom-node-append`
**Plugin:** `unicorn`

## What it does

Enforces the use of, for example, `document.body.append(div);` over `document.body.appendChild(div);` for DOM nodes.

## Why is this bad?

There are some advantages of using `Node#append()`, like the ability to append multiple nodes and to append both `DOMString` and DOM node objects.

## Examples

Examples of incorrect code for this rule:
javascript
`foo.appendChild(bar);`
Examples of correct code for this rule:
javascript
`foo.append(bar);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-dom-node-append": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-dom-node-append": "error",
},
});`bash
`oxlint --deny unicorn/prefer-dom-node-append`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_dom_node_append.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-dom-node-append)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.html)
- [oxc project](https://github.com/oxc-project/oxc)