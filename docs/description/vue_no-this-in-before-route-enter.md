# No This In Before Route Enter (vue)

**Pattern ID:** `vue_no-this-in-before-route-enter`
**Plugin:** `vue`

## What it does

Disallow `this` usage in a `beforeRouteEnter` method.
This rule is only relevant when using `vue-router`.

## Why is this bad?

Inside a `beforeRouteEnter` method, there is no access to `this`. See [the vue-router docs](https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards). This behavior isn't obvious, and so this lint rule can help prevent runtime errors in some cases.

## Examples

Examples of incorrect code for this rule:
js
`export default {
beforeRouteEnter(to, from, next) {
this.a; // Error: 'this' is not available
next();
},
};`
Examples of correct code for this rule:
js
`export default {
beforeRouteEnter(to, from, next) {
// anything without `this`
},
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-this-in-before-route-enter": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-this-in-before-route-enter": "error",
},
});`bash
`oxlint --deny vue/no-this-in-before-route-enter --vue-plugin`

## Version

This rule was added in v1.37.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_this_in_before_route_enter.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-this-in-before-route-enter)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-this-in-before-route-enter.html)
- [oxc project](https://github.com/oxc-project/oxc)