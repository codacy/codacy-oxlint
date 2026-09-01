# No Computed Properties In Data (vue)

**Pattern ID:** `vue_no-computed-properties-in-data`
**Plugin:** `vue`

## What it does

Disallow accessing computed properties inside `data()`.

## Why is this bad?

`data()` runs before computed properties are initialized, so `this.<computedName>` evaluates to `undefined` and leaves silently broken state in the component instance.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
data() {
const foo = this.foo; // `foo` is a computed property
return {};
},
computed: {
foo() {},
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
data() {
const foo = this.foo; // `foo` is a prop, not a computed
return {};
},
props: ["foo"],
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-computed-properties-in-data": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-computed-properties-in-data": "error",
},
});`bash
`oxlint --deny vue/no-computed-properties-in-data --vue-plugin`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_computed_properties_in_data.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-computed-properties-in-data.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-computed-properties-in-data)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-computed-properties-in-data.html)
- [oxc project](https://github.com/oxc-project/oxc)