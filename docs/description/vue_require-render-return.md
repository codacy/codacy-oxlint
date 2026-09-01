# Require Render Return (vue)

**Pattern ID:** `vue_require-render-return`
**Plugin:** `vue`

## What it does

Enforce that a `render` function always returns a value.

## Why is this bad?

A Vue component's `render` function must produce a VNode tree. If a code path falls through without returning, Vue receives `undefined` and silently renders nothing.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
render() {
if (foo) {
return h("div");
}
// falls through without returning
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
render() {
return h("div");
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/require-render-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/require-render-return": "error",
},
});`bash
`oxlint --deny vue/require-render-return --vue-plugin`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/require_render_return.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/require-render-return.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Frequire-render-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/require-render-return.html)
- [oxc project](https://github.com/oxc-project/oxc)