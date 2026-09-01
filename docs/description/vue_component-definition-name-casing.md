# Component Definition Name Casing (vue)

**Pattern ID:** `vue_component-definition-name-casing`
**Plugin:** `vue`

## What it does

Enforce specific casing for component definition names.

## Why is this bad?

Defining component names without a consistent casing makes templates harder to read and harder to grep. Picking either `PascalCase` or `kebab-case` and sticking with it across the codebase removes a class of bikeshedding and search misses.

## Examples

Examples of incorrect code for this rule (default `PascalCase`):
vue
`<script>
export default {
name: "foo-bar",
};
</script>`
Examples of correct code for this rule (default `PascalCase`):
vue
`<script>
export default {
name: "FooBar",
};
</script>`

## Configuration

This rule accepts one of the following string values:
type: `"PascalCase" | "kebab-case"`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/component-definition-name-casing": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/component-definition-name-casing": "error",
},
});`bash
`oxlint --deny vue/component-definition-name-casing --vue-plugin`

## Version

This rule was added in v1.68.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/component_definition_name_casing.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fcomponent-definition-name-casing)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/component-definition-name-casing.html)
- [oxc project](https://github.com/oxc-project/oxc)