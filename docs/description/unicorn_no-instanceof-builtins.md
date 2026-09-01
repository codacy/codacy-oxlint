# No Instanceof Builtins (unicorn)

**Pattern ID:** `unicorn_no-instanceof-builtins`
**Plugin:** `unicorn`

## What it does

Disallows the use of `instanceof` with ECMAScript built-in constructors because:
- it breaks across execution contexts (`iframe`, Web Worker, Node VM, etc.);
- it is often misleading (e.g. `instanceof Array` fails for a subclass);
- there is always a clearer and safer alternative (`Array.isArray`, `typeof`, `Buffer.isBuffer`, …).

## Why is this bad?

`instanceof` breaks across execution contexts (`iframe`, Web Worker, Node `vm`), and may give misleading results for subclasses or exotic objects.

## Examples

Examples of incorrect code for this rule:
javascript
`if (arr instanceof Array) { … }
if (el instanceof HTMLElement) { … }`
Examples of correct code for this rule:
javascript
`if (Array.isArray(arr)) { … }
if (el?.nodeType === 1) { … }`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-instanceof-builtins": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-instanceof-builtins": "error",
},
});`bash
`oxlint --deny unicorn/no-instanceof-builtins`

## Version

This rule was added in v0.16.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_instanceof_builtins.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-builtins.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-instanceof-builtins)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-builtins.html)
- [oxc project](https://github.com/oxc-project/oxc)