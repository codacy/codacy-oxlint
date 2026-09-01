# Valid Define Emits (vue)

**Pattern ID:** `vue_valid-define-emits`
**Plugin:** `vue`

## What it does

Enforce valid usage of the `defineEmits` compiler macro in Vue.
This rule reports `defineEmits` compiler macros in the following cases:
- `defineEmits` is referencing locally declared variables.
- `defineEmits` has both a literal type and an argument. e.g. `defineEmits<(e: 'foo')=>void>(['bar'])`
- `defineEmits` has been called multiple times.
- Custom events are defined in both `defineEmits` and `export default {}`.
- Custom events are not defined in either `defineEmits` or `export default {}`.

## Why is this bad?

Misusing `defineEmits` can lead to runtime errors, unclear component contracts, and lost type safety. Vue may still compile the code, but emitted events may break silently or be typed incorrectly.

## Examples

Examples of incorrect code for this rule:
vue
`<script setup>
const def = { notify: null };
defineEmits(def);
</script>`vue
`<script setup lang="ts">
defineEmits<(e: "notify") => void>({ submit: null });
</script>`vue
`<script setup>
defineEmits({ notify: null });
defineEmits({ submit: null });
</script>`vue
`<script>
export default {
emits: ["notify"],
};
</script>
<script setup>
defineEmits({ submit: null });
</script>`
Examples of correct code for this rule:
vue
`<script setup>
defineEmits({ notify: null });
</script>`vue
`<script setup>
defineEmits(["notify"]);
</script>`vue
`<script setup lang="ts">
defineEmits<(e: "notify") => void>();
</script>`vue
`<script>
export default {
emits: ["notify"],
};
</script>
<script setup>
defineEmits();
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/valid-define-emits": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/valid-define-emits": "error",
},
});`bash
`oxlint --deny vue/valid-define-emits --vue-plugin`

## Version

This rule was added in v1.14.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/valid_define_emits.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/valid-define-emits.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fvalid-define-emits)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/valid-define-emits.html)
- [oxc project](https://github.com/oxc-project/oxc)