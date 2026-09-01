# No Reserved Props (vue)

**Pattern ID:** `vue_no-reserved-props`
**Plugin:** `vue`

## What it does

Disallow reserved attribute names (e.g. `key`, `ref`) from being used as prop names.

## Why is this bad?

Vue treats a number of attributes specially (`key` and `ref` in Vue 3; additionally `is`, `slot`, `slot-scope`, `class` and `style` in Vue 2). Declaring a prop with one of these names collides with the framework's own handling and breaks the component.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
props: {
ref: String,
key: String,
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
props: {
foo: String,
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-reserved-props": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-reserved-props": "error",
},
});`bash
`oxlint --deny vue/no-reserved-props --vue-plugin`

## Version

This rule was added in v1.69.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_reserved_props.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-reserved-props.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-reserved-props)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-reserved-props.html)
- [oxc project](https://github.com/oxc-project/oxc)