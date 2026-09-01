# Prop Name Casing (vue)

**Pattern ID:** `vue_prop-name-casing`
**Plugin:** `vue`

## What it does

Enforce a specific casing (camelCase or snake_case) for Vue component prop names.

## Why is this bad?

Inconsistent prop name casing makes templates harder to read and grep for. Pinning props to a single casing across the codebase keeps the declaration site and the call site aligned.

## Examples

Examples of incorrect code for this rule (default `camelCase`):
vue
`<script>
export default {
props: {
greeting_text: String,
},
};
</script>`
Examples of correct code for this rule (default `camelCase`):
vue
`<script>
export default {
props: {
greetingText: String,
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/prop-name-casing": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/prop-name-casing": "error",
},
});`bash
`oxlint --deny vue/prop-name-casing --vue-plugin`

## Version

This rule was added in v1.69.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/prop_name_casing.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/prop-name-casing.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fprop-name-casing)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/prop-name-casing.html)
- [oxc project](https://github.com/oxc-project/oxc)