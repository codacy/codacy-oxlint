# No Deprecated Delete Set (vue)

**Pattern ID:** `vue_no-deprecated-delete-set`
**Plugin:** `vue`

## What it does

Disallow using deprecated `$set` / `$delete` (in Vue.js 3.0.0+).

## Why is this bad?

In Vue 3, the instance methods `$set` / `$delete` and the global `Vue.set` / `Vue.delete` were removed. Reactivity is now backed by Proxies, so plain assignment and the `delete` operator work as expected and these helpers are no longer needed.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
mounted() {
this.$set(obj, key, value);
this.$delete(obj, key);
Vue.set(obj, key, value);
Vue.delete(obj, key);
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
mounted() {
obj[key] = value;
delete obj[key];
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-deprecated-delete-set": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-deprecated-delete-set": "error",
},
});`bash
`oxlint --deny vue/no-deprecated-delete-set --vue-plugin`

## Version

This rule was added in v1.62.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_deprecated_delete_set.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-deprecated-delete-set.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-deprecated-delete-set)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-deprecated-delete-set.html)
- [oxc project](https://github.com/oxc-project/oxc)