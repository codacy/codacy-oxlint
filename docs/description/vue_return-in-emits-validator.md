# Return In Emits Validator (vue)

**Pattern ID:** `vue_return-in-emits-validator`
**Plugin:** `vue`

## What it does

Enforce that a `return` statement is present in `emits` validators (in Vue.js 3.0.0+).

## Why is this bad?

An `emits` validator must return a boolean indicating whether the emitted payload is valid. Forgetting to return a value (or returning only falsy values) makes the validator effectively reject every emit, breaking the component contract silently.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
emits: {
foo() {
// missing return
},
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
emits: {
foo(payload) {
return typeof payload === "string";
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
"vue/return-in-emits-validator": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/return-in-emits-validator": "error",
},
});`bash
`oxlint --deny vue/return-in-emits-validator --vue-plugin`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/return_in_emits_validator.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/return-in-emits-validator.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Freturn-in-emits-validator)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/return-in-emits-validator.html)
- [oxc project](https://github.com/oxc-project/oxc)