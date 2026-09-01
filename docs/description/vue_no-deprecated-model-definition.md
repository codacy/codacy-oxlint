# No Deprecated Model Definition (vue)

**Pattern ID:** `vue_no-deprecated-model-definition`
**Plugin:** `vue`

## What it does

Disallow deprecated `model` definition (in Vue.js 3.0.0+).

## Why is this bad?

Vue 3 removed the per-component `model` option. Instead, `v-model` works through the `modelValue` prop and the `update:modelValue` event, so a `model: { prop, event }` block is no longer needed.
With `{ "allowVue3Compat": true }`, a `model` block is allowed if it already uses the Vue 3-compatible `modelValue` / `update:modelValue` (or kebab-case `model-value` / `update:model-value`) pair, easing migration.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
model: {
prop: "foo",
event: "update",
},
};
</script>`
Examples of correct code for this rule with the `{ "allowVue3Compat": true }` option:
vue
`<script>
export default {
model: {
prop: "modelValue",
event: "update:modelValue",
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-deprecated-model-definition": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-deprecated-model-definition": "error",
},
});`bash
`oxlint --deny vue/no-deprecated-model-definition --vue-plugin`

## Version

This rule was added in v1.63.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_deprecated_model_definition.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-deprecated-model-definition.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-deprecated-model-definition)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-deprecated-model-definition.html)
- [oxc project](https://github.com/oxc-project/oxc)