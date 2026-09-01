# No Lifecycle After Await (vue)

**Pattern ID:** `vue_no-lifecycle-after-await`
**Plugin:** `vue`

## What it does

Disallow asynchronously registered lifecycle hooks.

## Why is this bad?

Lifecycle hooks must be registered synchronously during `setup()` execution. If a lifecycle hook is called after an `await` statement, it may be registered too late and might not work as expected.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
import { onMounted } from "vue";
export default {
async setup() {
await doSomething();
onMounted(() => {
/* ... */
}); // error
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
import { onMounted } from "vue";
export default {
async setup() {
onMounted(() => {
/* ... */
}); // ok
await doSomething();
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-lifecycle-after-await": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-lifecycle-after-await": "error",
},
});`bash
`oxlint --deny vue/no-lifecycle-after-await --vue-plugin`

## Version

This rule was added in v1.39.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_lifecycle_after_await.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-lifecycle-after-await)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-lifecycle-after-await.html)
- [oxc project](https://github.com/oxc-project/oxc)