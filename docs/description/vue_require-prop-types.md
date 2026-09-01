# Require Prop Types (vue)

**Pattern ID:** `vue_require-prop-types`
**Plugin:** `vue`

## What it does

This rule enforces that a props statement contains a type definition.

## Why is this bad?

In committed code, prop definitions should always be as detailed as possible, specifying at least type(s).

## Examples

Examples of incorrect code for this rule:
vue
`<script setup>
const props = defineProps({
name: String,
});
</script>`
Examples of correct code for this rule:
vue
`<script setup>
const props = defineProps({
name: { type: String },
});
</script>
// Or with validator
<script setup>
const props = defineProps({
name: {
validator: (value) => value.length > 0,
},
});
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/require-prop-types": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/require-prop-types": "error",
},
});`bash
`oxlint --deny vue/require-prop-types --vue-plugin`

## Version

This rule was added in v1.69.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/require_prop_types.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/require-prop-types.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Frequire-prop-types)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/require-prop-types.html)
- [oxc project](https://github.com/oxc-project/oxc)