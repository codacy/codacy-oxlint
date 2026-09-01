# No Dupe Keys (vue)

**Pattern ID:** `vue_no-dupe-keys`
**Plugin:** `vue`

## What it does

Disallow duplication of field names.

## Why is this bad?

Duplicate keys in Vue component options (props, data, computed, methods, setup) can cause unexpected behavior because they may overwrite each other at runtime, and they cause name collisions in the template.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
props: ["foo"],
computed: {
foo() {},
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
props: ["foo"],
computed: {
bar() {},
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-dupe-keys": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-dupe-keys": "error",
},
});`bash
`oxlint --deny vue/no-dupe-keys --vue-plugin`

## Version

This rule was added in v1.70.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_dupe_keys.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-dupe-keys.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-dupe-keys)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-dupe-keys.html)
- [oxc project](https://github.com/oxc-project/oxc)