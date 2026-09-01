# Prefer Query Selector (unicorn)

**Pattern ID:** `unicorn_prefer-query-selector`
**Plugin:** `unicorn`

## What it does

Prefer `.querySelector()` over `.getElementById()`. And prefer `.querySelectorAll()` over `.getElementsByClassName()`, `.getElementsByTagName()`, and `.getElementsByName()`.

## Why is this bad?

- Using `.querySelector()` and `.querySelectorAll()` is more flexible and allows for more specific selectors.
- It's better to use the same method to query DOM elements. This helps keep consistency and it lends itself to future improvements (e.g. more specific selectors).

## Examples

Examples of incorrect code for this rule:
javascript
`document.getElementById("foo");
document.getElementsByClassName("foo bar");
document.getElementsByTagName("main");
document.getElementsByClassName(fn());
document.getElementsByName("foo");`
Examples of correct code for this rule:
javascript
`document.querySelector("#foo");
document.querySelector(".bar");
document.querySelector("main #foo .bar");
document.querySelectorAll(".foo.bar");
document.querySelectorAll("li a");
document.querySelector("li").querySelectorAll("a");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-query-selector": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-query-selector": "error",
},
});`bash
`oxlint --deny unicorn/prefer-query-selector`

## Version

This rule was added in v0.0.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_query_selector.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-query-selector)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-query-selector.html)
- [oxc project](https://github.com/oxc-project/oxc)