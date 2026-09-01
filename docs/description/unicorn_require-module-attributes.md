# Require Module Attributes (unicorn)

**Pattern ID:** `unicorn_require-module-attributes`
**Plugin:** `unicorn`

## What it does

This rule enforces a non-empty attribute list in `import`/`export` statements and `import()` expressions.

## Why is this bad?

Import attributes are meant to provide metadata about how a module should be loaded (e.g., `with { type: "json" }`). An empty attribute object provides no information and should be removed.

## Examples

Examples of incorrect code for this rule:
js
`import foo from "foo" with {};
export { foo } from "foo" with {};
const foo = await import("foo", {});
const foo = await import("foo", { with: {} });`
Examples of correct code for this rule:
js
`import foo from "foo";
export { foo } from "foo";
const foo = await import("foo");
const foo = await import("foo");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/require-module-attributes": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/require-module-attributes": "error",
},
});`bash
`oxlint --deny unicorn/require-module-attributes`

## Version

This rule was added in v1.35.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/require_module_attributes.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-attributes.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Frequire-module-attributes)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-attributes.html)
- [oxc project](https://github.com/oxc-project/oxc)