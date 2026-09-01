# Define Emits Declaration (vue)

**Pattern ID:** `vue_define-emits-declaration`
**Plugin:** `vue`

## What it does

Enforce consistent declaration style for `defineEmits` in Vue. This rule only works in `<script setup>` with `lang="ts"`.

## Why is this bad?

Inconsistent code style can be confusing and make code harder to read through.

## Examples

Examples of incorrect code for this rule:
vue
`// "vue/define-emits-declaration": ["error", "type-based"]
<script setup lang="ts">
const emit = defineEmits(["change", "update"]);
const emit2 = defineEmits({
change: (id) => typeof id === "number",
update: (value) => typeof value === "string",
});
</script>
// "vue/define-emits-declaration": ["error", "type-literal"]
<script setup lang="ts">
const emit = defineEmits<{
(e: "change", id: number): void;
(e: "update", value: string): void;
}>();
</script>
// "vue/define-emits-declaration": ["error", "runtime"]
<script setup lang="ts">
const emit = defineEmits<{
(e: "change", id: number): void;
(e: "update", value: string): void;
}>();
</script>`
Examples of correct code for this rule:
vue
`// "vue/define-emits-declaration": ["error", "type-based"]
<script setup lang="ts">
const emit = defineEmits<{
(e: "change", id: number): void;
(e: "update", value: string): void;
}>();
const emit2 = defineEmits<{
change: [id: number];
update: [value: string];
}>();
</script>
// "vue/define-emits-declaration": ["error", "type-literal"]
<script setup lang="ts">
const emit = defineEmits<{
change: [id: number];
update: [value: string];
}>();
</script>
// "vue/define-emits-declaration": ["error", "runtime"]
<script setup lang="ts">
const emit = defineEmits<{
(e: "change", id: number): void;
(e: "update", value: string): void;
}>();
const emit2 = defineEmits({
change: (id) => typeof id === "number",
update: (value) => typeof value === "string",
});
</script>`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/define-emits-declaration": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/define-emits-declaration": "error",
},
});`bash
`oxlint --deny vue/define-emits-declaration --vue-plugin`

## Version

This rule was added in v1.15.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/define_emits_declaration.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/define-emits-declaration.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fdefine-emits-declaration)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/define-emits-declaration.html)
- [oxc project](https://github.com/oxc-project/oxc)