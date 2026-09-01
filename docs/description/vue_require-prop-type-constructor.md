# Require Prop Type Constructor (vue)

**Pattern ID:** `vue_require-prop-type-constructor`
**Plugin:** `vue`

## What it does

Require `props` type values to be a constructor function (e.g. `String`, `Number`, `Boolean`) rather than a string, number, or other literal.

## Why is this bad?

Vue uses the prop type for runtime validation and dev-time warnings. A string like `'String'` looks like the constructor but is never matched against an actual value, silently disabling the check.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
props: {
foo: "String",
bar: { type: "Number" },
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
props: {
foo: String,
bar: { type: Number },
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/require-prop-type-constructor": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/require-prop-type-constructor": "error",
},
});`bash
`oxlint --deny vue/require-prop-type-constructor --vue-plugin`

## Version

This rule was added in v1.68.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/require_prop_type_constructor.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Frequire-prop-type-constructor)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/require-prop-type-constructor.html)
- [oxc project](https://github.com/oxc-project/oxc)