# Require Direct Export (vue)

**Pattern ID:** `vue_require-direct-export`
**Plugin:** `vue`

## What it does

This rule requires that the component object be directly exported.

## Why is this bad?

Indirect exports can make it harder to understand the component structure and may cause issues with Vue's component system.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
const A = {};
export default A;
</script>`vue
`<script>
export default function () {}
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {};
</script>`vue
`<script>
export default function (props) {
return h("div", props.msg);
}
</script>`
Examples of incorrect code for this rule with the `disallowFunctionalComponentFunction: true` option:
vue
`<script>
export default (props) => h("div", props.msg);
</script>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/require-direct-export": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/require-direct-export": "error",
},
});`bash
`oxlint --deny vue/require-direct-export --vue-plugin`

## Version

This rule was added in v1.69.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/require_direct_export.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/require-direct-export.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Frequire-direct-export)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/require-direct-export.html)
- [oxc project](https://github.com/oxc-project/oxc)