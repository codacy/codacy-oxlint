# No Deprecated Destroyed Lifecycle (vue)

**Pattern ID:** `vue_no-deprecated-destroyed-lifecycle`
**Plugin:** `vue`

## What it does

Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks in Vue.js 3.0.0+.

## Why is this bad?

In Vue.js 3.0.0+, the `destroyed` and `beforeDestroy` lifecycle hooks have been renamed to `unmounted` and `beforeUnmount` respectively. Using the old names is deprecated and may cause confusion or compatibility issues.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
beforeDestroy() {},
destroyed() {},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
beforeUnmount() {},
unmounted() {},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-deprecated-destroyed-lifecycle": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-deprecated-destroyed-lifecycle": "error",
},
});`bash
`oxlint --deny vue/no-deprecated-destroyed-lifecycle --vue-plugin`

## Version

This rule was added in v1.35.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_deprecated_destroyed_lifecycle.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-deprecated-destroyed-lifecycle)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-deprecated-destroyed-lifecycle.html)
- [oxc project](https://github.com/oxc-project/oxc)