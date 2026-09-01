# No Import Compiler Macros (vue)

**Pattern ID:** `vue_no-import-compiler-macros`
**Plugin:** `vue`

## What it does

Disallow importing Vue compiler macros.

## Why is this bad?

Compiler Macros like:
- `defineProps`
- `defineEmits`
- `defineExpose`
- `withDefaults`
- `defineModel`
- `defineOptions`
- `defineSlots`
are globally available in Vue 3's `<script setup>` and do not require explicit imports.

## Examples

Examples of incorrect code for this rule:
vue
`<script setup>
import { defineProps, withDefaults } from "vue";
</script>`
Examples of correct code for this rule:
vue
`<script setup>
import { ref } from "vue";
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-import-compiler-macros": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-import-compiler-macros": "error",
},
});`bash
`oxlint --deny vue/no-import-compiler-macros --vue-plugin`

## Version

This rule was added in v1.21.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_import_compiler_macros.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-import-compiler-macros.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-import-compiler-macros)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-import-compiler-macros.html)
- [oxc project](https://github.com/oxc-project/oxc)