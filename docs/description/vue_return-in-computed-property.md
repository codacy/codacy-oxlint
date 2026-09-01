# Return In Computed Property (vue)

**Pattern ID:** `vue_return-in-computed-property`
**Plugin:** `vue`

## What it does

Enforce that a `return` statement is present in every computed property.

## Why is this bad?

A Vue computed property is a getter that must produce a value. Forgetting to return turns the value into `undefined`, which silently breaks templates and reactive code that depend on the computed.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
computed: {
foo() {
// missing return
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
"vue/return-in-computed-property": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/return-in-computed-property": "error",
},
});`bash
`oxlint --deny vue/return-in-computed-property --vue-plugin`

## Version

This rule was added in v1.63.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/return_in_computed_property.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/return-in-computed-property.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Freturn-in-computed-property)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/return-in-computed-property.html)
- [oxc project](https://github.com/oxc-project/oxc)