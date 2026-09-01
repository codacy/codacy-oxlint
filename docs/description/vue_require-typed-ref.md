# Require Typed Ref (vue)

**Pattern ID:** `vue_require-typed-ref`
**Plugin:** `vue`

## What it does

Require `ref` and `shallowRef` functions to be strongly typed.

## Why is this bad?

With TypeScript it is easy to prevent usage of `any` by using `noImplicitAny`. Unfortunately this rule is easily bypassed with Vue `ref()` function. Calling `ref()` function without a generic parameter or an initial value leads to ref having `Ref<any>` type.

## Examples

Examples of incorrect code for this rule:
typescript
`const count = ref();
const name = shallowRef();`
Examples of correct code for this rule:
typescript
`const count = ref<number>();
const a = ref(0);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/require-typed-ref": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/require-typed-ref": "error",
},
});`bash
`oxlint --deny vue/require-typed-ref --vue-plugin`

## Version

This rule was added in v1.17.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/require_typed_ref.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/require-typed-ref.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Frequire-typed-ref)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/require-typed-ref.html)
- [oxc project](https://github.com/oxc-project/oxc)