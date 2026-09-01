# No Async In Computed Properties (vue)

**Pattern ID:** `vue_no-async-in-computed-properties`
**Plugin:** `vue`

## What it does

Disallow asynchronous actions in computed properties.

## Why is this bad?

Asynchronous actions inside computed properties may lead to an unexpected behavior. A computed property's value should be a synchronous function of its dependencies.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
computed: {
pro() {
return Promise.all([new Promise((resolve, reject) => {})]);
},
foo: async function () {
return await someFunc();
},
bar() {
return fetch(url).then((response) => {});
},
tim() {
setTimeout(() => {}, 0);
},
inst() {
return new Promise((resolve, reject) => {});
},
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
computed: {
foo() {
return this.bar;
},
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-async-in-computed-properties": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-async-in-computed-properties": "error",
},
});`bash
`oxlint --deny vue/no-async-in-computed-properties --vue-plugin`

## Version

This rule was added in v1.71.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_async_in_computed_properties.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-async-in-computed-properties)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-async-in-computed-properties.html)
- [oxc project](https://github.com/oxc-project/oxc)