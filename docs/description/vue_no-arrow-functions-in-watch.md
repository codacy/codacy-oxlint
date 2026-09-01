# No Arrow Functions In Watch (vue)

**Pattern ID:** `vue_no-arrow-functions-in-watch`
**Plugin:** `vue`

## What it does

This rule disallows using arrow functions when defining a watcher.

## Why is this bad?

Arrow functions bind `this` lexically, which means they don't have access to the Vue component instance. In Vue watchers, you often need access to `this` to interact with component data, methods, or other properties. Using regular functions or method shorthand ensures proper `this` binding.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
watch: {
foo: () => {},
bar: {
handler: () => {},
},
baz: [
(val) => {},
{
handler: () => {},
},
],
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
watch: {
foo() {},
bar: function () {},
baz: {
handler: function () {},
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
"vue/no-arrow-functions-in-watch": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-arrow-functions-in-watch": "error",
},
});`bash
`oxlint --deny vue/no-arrow-functions-in-watch --vue-plugin`

## Version

This rule was added in v1.39.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_arrow_functions_in_watch.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-arrow-functions-in-watch)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-arrow-functions-in-watch.html)
- [oxc project](https://github.com/oxc-project/oxc)