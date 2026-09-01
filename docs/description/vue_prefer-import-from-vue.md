# Prefer Import From Vue (vue)

**Pattern ID:** `vue_prefer-import-from-vue`
**Plugin:** `vue`

## What it does

Enforce imports from `vue` instead of `@vue/*`.

## Why is this bad?

Imports from the following modules are almost always wrong. You should import from vue instead.
- `@vue/runtime-dom`
- `@vue/runtime-core`
- `@vue/reactivity`
- `@vue/shared`

## Examples

Examples of incorrect code for this rule:
js
`import { createApp } from "@vue/runtime-dom";
import { Component } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";`
Examples of correct code for this rule:
js
`import { createApp, ref, Component } from "vue";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/prefer-import-from-vue": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/prefer-import-from-vue": "error",
},
});`bash
`oxlint --deny vue/prefer-import-from-vue --vue-plugin`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/prefer_import_from_vue.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/prefer-import-from-vue.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fprefer-import-from-vue)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/prefer-import-from-vue.html)
- [oxc project](https://github.com/oxc-project/oxc)