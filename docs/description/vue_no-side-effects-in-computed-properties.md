# No Side Effects In Computed Properties (vue)

**Pattern ID:** `vue_no-side-effects-in-computed-properties`
**Plugin:** `vue`

## What it does

Disallow side effects in computed properties.

## Why is this bad?

It is considered a very bad practice to introduce side effects inside computed properties. It makes the code unpredictable and hard to understand.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
computed: {
fullName() {
this.firstName = "lorem"; // side effect
return `${this.firstName} ${this.lastName}`;
},
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
computed: {
fullName() {
return `${this.firstName} ${this.lastName}`;
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
"vue/no-side-effects-in-computed-properties": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-side-effects-in-computed-properties": "error",
},
});`bash
`oxlint --deny vue/no-side-effects-in-computed-properties --vue-plugin`

## Version

This rule was added in v1.70.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_side_effects_in_computed_properties.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-side-effects-in-computed-properties)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-side-effects-in-computed-properties.html)
- [oxc project](https://github.com/oxc-project/oxc)