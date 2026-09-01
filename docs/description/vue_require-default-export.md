# Require Default Export (vue)

**Pattern ID:** `vue_require-default-export`
**Plugin:** `vue`

## What it does

Require components to be the default export.

## Why is this bad?

Using SFCs (Single File Components) without a default export is not supported in Vue 3. Components should be exported as the default export.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
const foo = "foo";
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
data() {
return {
foo: "foo",
};
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/require-default-export": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/require-default-export": "error",
},
});`bash
`oxlint --deny vue/require-default-export --vue-plugin`

## Version

This rule was added in v1.21.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/require_default_export.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/require-default-export.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Frequire-default-export)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/require-default-export.html)
- [oxc project](https://github.com/oxc-project/oxc)