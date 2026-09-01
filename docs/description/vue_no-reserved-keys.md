# No Reserved Keys (vue)

**Pattern ID:** `vue_no-reserved-keys`
**Plugin:** `vue`

## What it does

Disallow overwriting reserved Vue instance keys (e.g. `$data`, `$emit`) or using `_`-prefixed keys inside `data` / `asyncData`.

## Why is this bad?

Vue exposes a number of instance properties (`$emit`, `$data`, `$props`, etc.). Defining a prop, computed, data, method or setup return key with the same name overwrites the underlying Vue API and silently breaks the component (e.g. `methods: { $emit() {} }` clobbers event emission). Vue also reserves `_`-prefixed names inside its reactivity system, so `data() { return { _foo: 1 } }` may collide with internal state.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
props: ["$data"],
methods: {
$emit() {},
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
props: ["fooData"],
methods: {
send() {},
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-reserved-keys": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-reserved-keys": "error",
},
});`bash
`oxlint --deny vue/no-reserved-keys --vue-plugin`

## Version

This rule was added in v1.69.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_reserved_keys.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-reserved-keys.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-reserved-keys)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-reserved-keys.html)
- [oxc project](https://github.com/oxc-project/oxc)