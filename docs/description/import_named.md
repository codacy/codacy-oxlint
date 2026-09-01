# Named (import)

**Pattern ID:** `import_named`
**Plugin:** `import`

## What it does

Verifies that all named imports are part of the set of named exports in the referenced module.
For `export`, verifies that all named exports exist in the referenced module.
Note: for packages, the plugin will find exported names from `jsnext:main` (deprecated) or `module`, if present in `package.json`. Redux's npm module includes this key, and thereby is lintable, for example.
A module path that is ignored or not unambiguously an ES module will not be reported when imported. Note that type imports and exports, as used by Flow, are always ignored.

## Why is this bad?

Importing or exporting names that do not exist in the referenced module can lead to runtime errors and confusion. It may suggest that certain functionality is available when it is not, making the code harder to maintain and understand. This rule helps ensure that your code accurately reflects the available exports, improving reliability.

## Examples

Given
js
`// ./foo.js
export const foo = "I'm so foo";`
Examples of incorrect code for this rule:
js
`// ./baz.js
import { notFoo } from "./foo";
// re-export
export { notFoo as defNotBar } from "./foo";
// will follow 'jsnext:main', if available
import { dontCreateStore } from "redux";`
Examples of correct code for this rule:
js
`// ./bar.js
import { foo } from "./foo";
// re-export
export { foo as bar } from "./foo";
// node_modules without jsnext:main are not analyzed by default
// (import/ignore setting)
import { SomeNonsenseThatDoesntExist } from "react";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/named": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/named": "error",
},
});`bash
`oxlint --deny import/named --import-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/named.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fnamed)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/named.html)
- [oxc project](https://github.com/oxc-project/oxc)