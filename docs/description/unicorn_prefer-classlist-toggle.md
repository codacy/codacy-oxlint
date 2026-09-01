# Prefer Classlist Toggle (unicorn)

**Pattern ID:** `unicorn_prefer-classlist-toggle`
**Plugin:** `unicorn`

## What it does

Prefers the use of `element.classList.toggle(className, condition)` over conditional add/remove patterns.

## Why is this bad?

The `toggle()` method is more concise and expressive than using conditional logic to switch between `add()` and `remove()`.

## Examples

Examples of incorrect code for this rule:
javascript
`if (condition) {
element.classList.add("className");
} else {
element.classList.remove("className");
}
condition ? element.classList.add("className") : element.classList.remove("className");
element.classList[condition ? "add" : "remove"]("className");`
Examples of correct code for this rule:
javascript
`element.classList.toggle("className", condition);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-classlist-toggle": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-classlist-toggle": "error",
},
});`bash
`oxlint --deny unicorn/prefer-classlist-toggle`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_classlist_toggle.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-classlist-toggle.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-classlist-toggle)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-classlist-toggle.html)
- [oxc project](https://github.com/oxc-project/oxc)