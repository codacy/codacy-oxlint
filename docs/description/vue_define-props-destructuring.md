# Define Props Destructuring (vue)

**Pattern ID:** `vue_define-props-destructuring`
**Plugin:** `vue`

## What it does

This rule enforces a consistent style for handling Vue 3 Composition API props, allowing you to choose between requiring destructuring or prohibiting it.

## Why is this bad?

By default, the rule requires you to use destructuring syntax when `defineProps` is assigned to a variable and warns against combining `withDefaults` with destructuring.

## Examples

Examples of incorrect code for this rule:
vue
`<script setup lang="ts">
const props = defineProps(["foo"]);
const propsWithDefaults = withDefaults(defineProps(["foo"]), { foo: "default" });
const { baz } = withDefaults(defineProps(["baz"]), { baz: "default" });
const props = defineProps<{ foo?: string }>();
const propsWithDefaults = withDefaults(defineProps<{ foo?: string }>(), { foo: "default" });
</script>`
Examples of correct code for this rule:
vue
`<script setup lang="ts">
const { foo } = defineProps(["foo"]);
const { bar = "default" } = defineProps(["bar"]);
const { foo } = defineProps<{ foo?: string }>();
const { bar = "default" } = defineProps<{ bar?: string }>();
</script>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/define-props-destructuring": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/define-props-destructuring": "error",
},
});`bash
`oxlint --deny vue/define-props-destructuring --vue-plugin`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/define_props_destructuring.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/define-props-destructuring.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fdefine-props-destructuring)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/define-props-destructuring.html)
- [oxc project](https://github.com/oxc-project/oxc)