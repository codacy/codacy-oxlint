# Next Tick Style (vue)

**Pattern ID:** `vue_next-tick-style`
**Plugin:** `vue`

## What it does

Enforce Promise or callback style in `nextTick`.

## Why is this bad?

In Vue.js, `nextTick` can be used either by passing a callback or by using the returned Promise. Mixing these styles makes the code harder to read and inconsistent. Choose one style consistently.

## Examples

Examples of incorrect code for this rule with default `"promise"` option:
js
`this.$nextTick(() => {});
Vue.nextTick(() => {});
import { nextTick } from "vue";
nextTick(() => {});`
Examples of correct code for this rule with default `"promise"` option:
js
`this.$nextTick().then(() => {});
await Vue.nextTick();
import { nextTick } from "vue";
await nextTick();`
Examples of incorrect code for this rule with `"callback"` option:
js
`await this.$nextTick();
Vue.nextTick().then(() => {});`
Examples of correct code for this rule with `"callback"` option:
js
`this.$nextTick(() => {});
Vue.nextTick(() => {});`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/next-tick-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/next-tick-style": "error",
},
});`bash
`oxlint --deny vue/next-tick-style --vue-plugin`

## Version

This rule was added in v1.69.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/next_tick_style.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/next-tick-style.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fnext-tick-style)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/next-tick-style.html)
- [oxc project](https://github.com/oxc-project/oxc)