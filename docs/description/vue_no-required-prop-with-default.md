# No Required Prop With Default (vue)

**Pattern ID:** `vue_no-required-prop-with-default`
**Plugin:** `vue`

## What it does

Enforce props with default values to be optional.

## Why is this bad?

If a prop is declared with a default value, whether it is required or not, we can always skip it in actual use. In that situation, the default value would be applied. So, a required prop with a default value is essentially the same as an optional prop.

## Examples

Examples of incorrect code for this rule:
vue
`<script setup lang="ts">
const props = withDefaults(
defineProps<{
name: string | number;
age?: number;
}>(),
{
name: "Foo",
},
);
</script>`
Examples of correct code for this rule:
vue
`<script setup lang="ts">
const props = withDefaults(
defineProps<{
name?: string | number;
age?: number;
}>(),
{
name: "Foo",
},
);
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-required-prop-with-default": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-required-prop-with-default": "error",
},
});`bash
`oxlint --deny vue/no-required-prop-with-default --vue-plugin`

## Version

This rule was added in v1.17.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_required_prop_with_default.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-required-prop-with-default.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-required-prop-with-default)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-required-prop-with-default.html)
- [oxc project](https://github.com/oxc-project/oxc)