# No Deprecated Events Api (vue)

**Pattern ID:** `vue_no-deprecated-events-api`
**Plugin:** `vue`

## What it does

Disallow using deprecated Events API (`$on`, `$off`, `$once`) in Vue.js 3.0.0+.

## Why is this bad?

In Vue.js 3.0.0+, the internal event APIs `$on`, `$off`, and `$once` have been removed. These methods were used for event handling between components but are no longer available.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
mounted() {
this.$on("event", () => {});
this.$off("event");
this.$once("event", () => {});
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
import mitt from "mitt";
const emitter = mitt();
export default {
mounted() {
emitter.on("event", () => {});
emitter.off("event");
emitter.once("event", () => {});
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-deprecated-events-api": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-deprecated-events-api": "error",
},
});`bash
`oxlint --deny vue/no-deprecated-events-api --vue-plugin`

## Version

This rule was added in v1.62.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_deprecated_events_api.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-deprecated-events-api.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-deprecated-events-api)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-deprecated-events-api.html)
- [oxc project](https://github.com/oxc-project/oxc)