# Valid Define Options (vue)

**Pattern ID:** `vue_valid-define-options`
**Plugin:** `vue`

## What it does

Enforce valid use of the `defineOptions` compiler macro.

## Why is this bad?

`defineOptions` is a compiler macro for `<script setup>`. It must be called with a single object literal containing component options that are evaluable at compile time. Misuse such as referencing locally declared variables, declaring `props`/`emits`/`expose`/`slots`, calling without arguments, or passing type arguments cannot be processed by the compiler.

## Examples

Examples of incorrect code for this rule:
vue
`<script setup>
defineOptions(); // no options object
defineOptions({ name: "A" });
defineOptions({ name: "B" }); // multiple calls
defineOptions({ props: { msg: String } }); // use `defineProps()` instead
</script>`
Examples of correct code for this rule:
vue
`<script setup>
defineOptions({ name: "foo", inheritAttrs: false });
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/valid-define-options": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/valid-define-options": "error",
},
});`bash
`oxlint --deny vue/valid-define-options --vue-plugin`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/valid_define_options.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/valid-define-options.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fvalid-define-options)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/valid-define-options.html)
- [oxc project](https://github.com/oxc-project/oxc)