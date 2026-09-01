# No Reserved Component Names (vue)

**Pattern ID:** `vue_no-reserved-component-names`
**Plugin:** `vue`

## What it does

Disallow Vue component names that collide with HTML / SVG element names (and optionally Vue built-in component names).

## Why is this bad?

Using a reserved name silently shadows the standard element / built-in component, producing confusing behavior at runtime.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
name: "div",
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
name: "MyComponent",
};
</script>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-reserved-component-names": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-reserved-component-names": "error",
},
});`bash
`oxlint --deny vue/no-reserved-component-names --vue-plugin`

## Version

This rule was added in v1.68.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_reserved_component_names.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-reserved-component-names)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-reserved-component-names.html)
- [oxc project](https://github.com/oxc-project/oxc)