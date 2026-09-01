# Valid Define Props (vue)

**Pattern ID:** `vue_valid-define-props`
**Plugin:** `vue`

## What it does

Enforce valid usage of the `defineProps` compiler macro in Vue.
This rule reports `defineProps` compiler macros in the following cases:
- `defineProps` is referencing locally declared variables.
- `defineProps` has both a literal type and an argument. e.g. `defineProps<{ /*props*/ }>({ /*props*/ })`
- `defineProps` has been called multiple times.
- Props are defined in both `defineProps` and `export default {}`.
- Props are not defined in either `defineProps` or `export default {}`.

## Why is this bad?

Misusing `defineProps` can lead to runtime errors, and lost type safety. Vue may still compile the code, but properties may break silently or be typed incorrectly.

## Examples

Examples of incorrect code for this rule:
vue
`<script setup>
const def = { msg: String };
defineProps(def);
</script>`vue
`<script setup lang="ts">
defineProps<{ msg?: string }>({ msg: String });
</script>`vue
`<script setup>
defineProps({ msg: String });
defineProps({ count: Number });
</script>`vue
`<script>
export default {
props: { msg: String },
};
</script>
<script setup>
defineProps({ count: Number });
</script>`
Examples of correct code for this rule:
vue
`<script setup>
defineProps({ msg: String });
</script>`vue
`<script setup>
defineProps(["msg"]);
</script>`vue
`<script setup lang="ts">
defineProps<{ msg?: string }>();
</script>`vue
`<script>
export default {
props: { msg: String },
};
</script>
<script setup>
defineProps();
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/valid-define-props": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/valid-define-props": "error",
},
});`bash
`oxlint --deny vue/valid-define-props --vue-plugin`

## Version

This rule was added in v1.15.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/valid_define_props.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/valid-define-props.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fvalid-define-props)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/valid-define-props.html)
- [oxc project](https://github.com/oxc-project/oxc)