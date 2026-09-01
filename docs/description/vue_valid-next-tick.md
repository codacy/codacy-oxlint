# Valid Next Tick (vue)

**Pattern ID:** `vue_valid-next-tick`
**Plugin:** `vue`

## What it does

Enforce valid `nextTick` function calls.

## Why is this bad?

`nextTick` is a function that takes either a callback or returns a Promise. Misuse (accessing it as a value, passing extra arguments, both awaiting and passing a callback) is almost always a bug.

## Examples

Examples of incorrect code for this rule:
vue
`<script>
import { nextTick } from "vue";
export default {
async mounted() {
nextTick(); // missing await or callback
this.$nextTick; // not invoked
this.$nextTick(a, b); // too many args
await this.$nextTick(callback); // both await and callback
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
import { nextTick } from "vue";
export default {
async mounted() {
await nextTick();
this.$nextTick(callback);
this.$nextTick().then(callback);
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/valid-next-tick": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/valid-next-tick": "error",
},
});`bash
`oxlint --deny vue/valid-next-tick --vue-plugin`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/valid_next_tick.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/valid-next-tick.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fvalid-next-tick)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/valid-next-tick.html)
- [oxc project](https://github.com/oxc-project/oxc)