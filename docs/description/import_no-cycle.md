# No Cycle (import)

**Pattern ID:** `import_no-cycle`
**Plugin:** `import`

## What it does

Disallow cyclic dependencies. The rule ensures that there is no resolvable path back to this module via its dependencies.
This includes cycles of depth 1 (imported module imports me), up to an effectively infinite value when the `maxDepth` option is not set.

## Why is this bad?

Dependency cycles lead to confusing architectures where bugs become hard to find. It is common to import an `undefined` value that is caused by a cyclic dependency.

## Examples

Examples of incorrect code for this rule:
javascript
`// dep-b.js
import "./dep-a.js";
export function b() {
/* ... */
}`javascript
`// dep-a.js
import { b } from "./dep-b.js"; // reported: Dependency cycle detected.
export function a() {
/* ... */
}`
In this example, `dep-a.js` and `dep-b.js` import each other, creating a circular dependency, which is problematic.
Examples of correct code for this rule:
javascript
`// dep-b.js
export function b() {
/* ... */
}`javascript
`// dep-a.js
import { b } from "./dep-b.js"; // no circular dependency
export function a() {
/* ... */
}`
In this corrected version, `dep-b.js` no longer imports `dep-a.js`, breaking the cycle.

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-cycle": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-cycle": "error",
},
});`bash
`oxlint --deny import/no-cycle --import-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_cycle.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-cycle)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-cycle.html)
- [oxc project](https://github.com/oxc-project/oxc)