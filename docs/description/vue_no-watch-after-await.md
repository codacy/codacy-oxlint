# No Watch After Await (vue)

**Pattern ID:** `vue_no-watch-after-await`
**Plugin:** `vue`

## What it does

Disallow asynchronously-registered `watch`.

## Why is this bad?

`watch` and `watchEffect` registered after an `await` expression in `setup()` may not work as expected because they are registered after the component instance has finished setting up.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
import { watch } from "vue";
export default {
async setup() {
await doSomething();
watch(foo, () => {
/* ... */
}); // error
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
import { watch } from "vue";
export default {
async setup() {
watch(foo, () => {
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
"vue/no-watch-after-await": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-watch-after-await": "error",
},
});`bash
`oxlint --deny vue/no-watch-after-await --vue-plugin`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_watch_after_await.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-watch-after-await.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-watch-after-await)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-watch-after-await.html)
- [oxc project](https://github.com/oxc-project/oxc)