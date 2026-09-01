# No Export In Script Setup (vue)

**Pattern ID:** `vue_no-export-in-script-setup`
**Plugin:** `vue`

## What it does

Disallow `export` in `<script setup>`

## Why is this bad?

The previous version of `<script setup>` RFC used `export` to define variables used in templates, but the new `<script setup>` RFC has been updated to define without using `export`. See [Vue RFCs - 0040-script-setup](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md) for more details.

## Examples

Examples of incorrect code for this rule:
vue
`<script setup>
export let msg = "Hello!";
</script>`
Examples of correct code for this rule:
vue
`<script setup>
let msg = "Hello!";
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-export-in-script-setup": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-export-in-script-setup": "error",
},
});`bash
`oxlint --deny vue/no-export-in-script-setup --vue-plugin`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_export_in_script_setup.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-export-in-script-setup.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-export-in-script-setup)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-export-in-script-setup.html)
- [oxc project](https://github.com/oxc-project/oxc)