# No Deprecated Vue Config Keycodes (vue)

**Pattern ID:** `vue_no-deprecated-vue-config-keycodes`
**Plugin:** `vue`

## What it does

Disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+).

## Why is this bad?

`Vue.config.keyCodes` was removed in Vue 3. Code that relies on it will silently stop working when upgrading.

## Examples

Examples of incorrect code for this rule:
js
`Vue.config.keyCodes = { enter: 13 };`
Examples of correct code for this rule:
js
`Vue.config.silent = true;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-deprecated-vue-config-keycodes": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-deprecated-vue-config-keycodes": "error",
},
});`bash
`oxlint --deny vue/no-deprecated-vue-config-keycodes --vue-plugin`

## Version

This rule was added in v1.62.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_deprecated_vue_config_keycodes.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-deprecated-vue-config-keycodes)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-deprecated-vue-config-keycodes.html)
- [oxc project](https://github.com/oxc-project/oxc)