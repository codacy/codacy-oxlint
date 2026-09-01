# No Multiple Slot Args (vue)

**Pattern ID:** `vue_no-multiple-slot-args`
**Plugin:** `vue`

## What it does

Disallow passing multiple arguments to scoped slots.

## Why is this bad?

Users have to use the arguments in fixed order and cannot omit the ones they don't need. e.g. if you have a slot that passes in 5 arguments but the user actually only need the last 2 of them, they will have to declare all 5 just to use the last 2.
More information can be found in [vuejs/vue#9468](https://github.com/vuejs/vue/issues/9468#issuecomment-462210146)

## Examples

Examples of incorrect code for this rule:
vue
`<script>
export default {
render(h) {
var children = this.$scopedSlots.default(foo, bar);
var children = this.$scopedSlots.default(...foo);
},
};
</script>`
Examples of correct code for this rule:
vue
`<script>
export default {
render(h) {
var children = this.$scopedSlots.default();
var children = this.$scopedSlots.default(foo);
var children = this.$scopedSlots.default({ foo, bar });
},
};
</script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vue"],
"rules": {
"vue/no-multiple-slot-args": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vue"],
rules: {
"vue/no-multiple-slot-args": "error",
},
});`bash
`oxlint --deny vue/no-multiple-slot-args --vue-plugin`

## Version

This rule was added in v1.15.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vue/no_multiple_slot_args.rs)
- [Upstream rule docs](https://eslint.vuejs.org/rules/no-multiple-slot-args.html)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vue%2Fno-multiple-slot-args)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vue/no-multiple-slot-args.html)
- [oxc project](https://github.com/oxc-project/oxc)