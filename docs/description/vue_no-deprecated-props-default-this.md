# No Deprecated Props Default This (vue)

**Pattern ID:** `vue_no-deprecated-props-default-this`
**Plugin:** `vue`

## What it does

Disallow deprecated `this` access in props default function (in Vue.js 3.0.0+).

## Why is this bad?

In Vue.js 3.0.0+, props default factory functions no longer have access to `this`. They are invoked before the component instance is created, so `this` is `undefined`. The factory should rely on its first argument (the raw props passed by the parent) instead.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
props: {
a: String,
b: {
default() {
return this.a;
},
},
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
props: {
a: String,
b: {
default(props) {
return props.a;
},
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
"vue/no-deprecated-props-default-this": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-deprecated-props-default-this": "error",
},
});`bash
`oxlint --deny vue/no-deprecated-props-default-this --vue-plugin`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_deprecated_props_default_this.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-deprecated-props-default-this)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-deprecated-props-default-this.html)
- [oxc project](https://github.com/oxc-project/oxc)