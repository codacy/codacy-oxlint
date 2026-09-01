# No Namespace (import)

**Pattern ID:** `import_no-namespace`
**Plugin:** `import`

## What it does

Enforce a convention of not using namespaced (a.k.a. "wildcard" *) imports.

## Why is this bad?

Namespaced imports, while sometimes used, are generally considered less ideal in modern JavaScript development for several reasons:
- Specificity and Namespace Pollution:
- Specificity: Namespaced imports import the entire module, bringing in everything, even if you only need a few specific functions or classes. This can lead to potential naming conflicts if different modules have the same names for different functions.
- Pollution: Importing an entire namespace pollutes your current scope with potentially unnecessary functions and variables. It increases the chance of accidental use of an unintended function or variable, leading to harder-to-debug errors.
- Maintainability:
- Clarity: Namespaced imports can make it harder to understand which specific functions or classes are being used in your code. This is especially true in larger projects with numerous imports.
- Refactoring: If a function or class name changes within the imported module, you might need to update several parts of your code if you are using namespaced imports. This becomes even more challenging when dealing with multiple namespaces.
- Modern Practice:
- Explicit Imports: Modern JavaScript practices encourage explicit imports for specific components. This enhances code readability and maintainability.
- Tree-Shaking: Tools like Webpack and Rollup use tree-shaking to remove unused code from your bundles. Namespaced imports can prevent efficient tree-shaking, leading to larger bundle sizes.

## Examples

Examples of incorrect code for this rule:
js
`import * as user from "user-lib";
import some, * as user from "./user";`
Examples of correct code for this rule:
js
`import { getUserName, isUser } from "user-lib";
import user from "user-lib";
import defaultExport, { isUser } from "./user";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-namespace": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-namespace": "error",
},
});`bash
`oxlint --deny import/no-namespace --import-plugin`

## Version

This rule was added in v0.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_namespace.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-namespace)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-namespace.html)
- [oxc project](https://github.com/oxc-project/oxc)