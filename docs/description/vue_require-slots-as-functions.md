# Require Slots As Functions (vue)

**Pattern ID:** `vue_require-slots-as-functions`
**Plugin:** `vue`

## What it does

Enforce properties of `$slots` to be used as functions.

## Why is this bad?

In Vue.js 3, `this.$slots.<name>` is a function (slot render function), not an array of vnodes like in Vue.js 2. Treating slot properties as values (e.g. `this.$slots.default.filter(...)`) breaks at runtime.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
render(h) {
var children = this.$slots.default
return h('div', children.filter(...))
}
}
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
render(h) {
var children = this.$slots.default();
return h("div", children);
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/require-slots-as-functions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/require-slots-as-functions": "error",
},
});`bash
`oxlint --deny vue/require-slots-as-functions --vue-plugin`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/require_slots_as_functions.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/require-slots-as-functions.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Frequire-slots-as-functions)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/require-slots-as-functions.html)
- [oxc project](https://github.com/oxc-project/oxc)