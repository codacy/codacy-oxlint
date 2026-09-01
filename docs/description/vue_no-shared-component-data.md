# No Shared Component Data (vue)

**Pattern ID:** `vue_no-shared-component-data`
**Plugin:** `vue`

## What it does

Enforce that the `data` property of a Vue component definition is a function.

## Why is this bad?

When `data` is declared as an object literal, the same object is shared across every instance of the component, which causes cross-instance state pollution. Returning a fresh object from a function avoids that.
This rule targets component definitions reached through `Vue.component(...)`, `Vue.extend(...)`, `Vue.mixin(...)`, `app.component(...)`, `app.mixin(...)`, `component(...)`, `createApp(...)`, `defineComponent(...)`, `defineNuxtComponent(...)`, and `export default {}` inside `.vue` files. `new Vue({...})` is not covered (the instance does not share `data` between components).

## Examples

Examples of incorrect code for this rule:
vue
`<script>
Vue.component("some-comp", {
data: {
foo: "bar",
},
});
</script>`
Examples of correct code for this rule:
vue
`<script>
Vue.component("some-comp", {
data() {
return { foo: "bar" };
},
});
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-shared-component-data": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-shared-component-data": "error",
},
});`bash
`oxlint --deny vue/no-shared-component-data --vue-plugin`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_shared_component_data.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-shared-component-data.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-shared-component-data)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-shared-component-data.html)
- [oxc project](https://github.com/oxc-project/oxc)