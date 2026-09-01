# Require Default Prop (vue)

**Pattern ID:** `vue_require-default-prop`
**Plugin:** `vue`

## What it does

Requires default value to be set for props that are not marked as `required`.

## Why is this bad?

A prop that is neither required nor given a default is implicitly `undefined` when omitted. Forcing a default keeps the component's behavior explicit and avoids `undefined` leaking into the template and logic. `Boolean` props are exempt because they already default to `false`.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
props: {
name: String,
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
props: {
name: {
type: String,
default: "",
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
"vue/require-default-prop": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/require-default-prop": "error",
},
});`bash
`oxlint --deny vue/require-default-prop --vue-plugin`

## Version

This rule was added in v1.70.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/require_default_prop.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/require-default-prop.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Frequire-default-prop)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/require-default-prop.html)
- [oxc project](https://github.com/oxc-project/oxc)