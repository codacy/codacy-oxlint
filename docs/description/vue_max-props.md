# Max Props (vue)

**Pattern ID:** `vue_max-props`
**Plugin:** `vue`

## What it does

Enforce a maximum number of props defined for a given Vue component.

## Why is this bad?

A large number of props on a component can indicate that it is trying to do too much and may be difficult to maintain or understand.
By limiting the number of props, developers are encouraged to avoid overly complex components and instead create smaller, more focused components that are easier to reason about.

## Examples

Examples of incorrect code for this rule with the default `{ "maxProps": 1 }` option:
js
`<script setup>
defineProps({
prop1: String,
prop2: String,
})
</script>`
Examples of correct code for this rule with the default `{ "maxProps": 1 }` option:
js
`<script setup>
defineProps({
prop1: String,
})
</script>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/max-props": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/max-props": "error",
},
});`bash
`oxlint --deny vue/max-props --vue-plugin`

## Version

This rule was added in v1.19.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/max_props.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/max-props.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fmax-props)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/max-props.html)
- [oxc project](https://github.com/oxc-project/oxc)