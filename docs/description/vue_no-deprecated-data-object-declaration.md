# No Deprecated Data Object Declaration (vue)

**Pattern ID:** `vue_no-deprecated-data-object-declaration`
**Plugin:** `vue`

## What it does

Disallow object declarations for `data` (in Vue.js 3.0.0+).

## Why is this bad?

In Vue 3, declaring `data` as an object causes the same object to be shared between every instance of the component, which leads to cross- instance state pollution. `data` must be a function that returns a fresh object per instance.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
data: {
foo: "bar",
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
data() {
return { foo: "bar" };
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-deprecated-data-object-declaration": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-deprecated-data-object-declaration": "error",
},
});`bash
`oxlint --deny vue/no-deprecated-data-object-declaration --vue-plugin`

## Version

This rule was added in v1.62.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_deprecated_data_object_declaration.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-deprecated-data-object-declaration)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-deprecated-data-object-declaration.html)
- [oxc project](https://github.com/oxc-project/oxc)