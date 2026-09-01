# No Deprecated (typescript)

**Pattern ID:** `typescript_no-deprecated`
**Plugin:** `typescript`

## What it does

Disallow using code marked as `@deprecated`.

## Why is this bad?

The JSDoc `@deprecated` tag can be used to document some piece of code being deprecated. It's best to avoid using code marked as deprecated. This rule reports on any references to code marked as `@deprecated`.
TypeScript recognizes the `@deprecated` tag, allowing editors to visually indicate deprecated code — usually with a strikethrough. However, TypeScript doesn't report type errors for deprecated code on its own.

## Examples

Examples of incorrect code for this rule:
ts
`/** @deprecated Use apiV2 instead. */
declare function apiV1(): Promise<string>;
declare function apiV2(): Promise<string>;
await apiV1(); // Using deprecated function
import { parse } from "node:url";
// 'parse' is deprecated. Use the WHATWG URL API instead.
const url = parse("/foo");`
Examples of correct code for this rule:
ts
`/** @deprecated Use apiV2 instead. */
declare function apiV1(): Promise<string>;
declare function apiV2(): Promise<string>;
await apiV2(); // Using non-deprecated function
// Modern Node.js API, uses `new URL()`
const url2 = new URL("/foo", "http://www.example.com");`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-deprecated": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-deprecated": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-deprecated`

## Version

This rule was added in v1.26.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_deprecated.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-deprecated/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_deprecated/no_deprecated.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-deprecated.html)
- [oxc project](https://github.com/oxc-project/oxc)