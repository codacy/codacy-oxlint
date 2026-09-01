# No Require Imports (typescript)

**Pattern ID:** `typescript_no-require-imports`
**Plugin:** `typescript`

## What it does

Forbids the use of CommonJS `require` calls.

## Why is this bad?

`require` imports, while functional in Node.js and older JavaScript environments, are generally considered less desirable than ES modules (`import`) for several key reasons in modern JavaScript development:
-
Static vs. Dynamic: `require` is a runtime function. It executes when the code runs, which means errors related to missing modules or incorrect paths are only discovered during runtime. ES modules (`import`) are static imports. Their resolution and potential errors are checked during the compilation or bundling process, making them easier to catch during development.
-
Code Organization and Readability: `require` statements are scattered throughout the code, potentially making it harder to quickly identify the dependencies of a given module. `import` statements are typically grouped at the top of a file, improving code organization and readability.
-
Tree Shaking and Optimization: Modern bundlers like Webpack and Rollup use tree-shaking to remove unused code from the final bundle. Tree-shaking works significantly better with ES modules because their dependencies are declared statically and explicitly. `require` makes it harder for bundlers to accurately identify and remove unused code, resulting in larger bundle sizes and slower load times.
-
Cyclic Dependencies: Handling cyclic dependencies (where module A imports B, and B imports A) is significantly more challenging with `require`. ES modules, through their declarative nature and the use of dynamic imports (`import()`), provide better mechanisms to handle cyclic imports and manage asynchronous loading.
-
Maintainability and Refactoring: Changing module names or paths is simpler with ES modules because the changes are declared directly and the compiler or bundler catches any errors. With `require`, you might have to track down all instances of a specific `require` statement for a particular module, making refactoring more error-prone.
-
Modern JavaScript Standards: import is the standard way to import modules in modern JavaScript, aligned with current best practices and language specifications. Using require necessitates additional build steps or tools to translate it to a format that the browser or modern JavaScript environments can understand.
-
Error Handling: ES modules provide a more structured way to handle errors during module loading using `try...catch` blocks with dynamic imports, enhancing error management. `require` errors can be less predictable.
In summary, while `require` works, the benefits of ES modules in terms of static analysis, better bundling, improved code organization, and easier maintainability make it the preferred method for importing modules in modern JavaScript projects.

## Examples

Examples of incorrect code for this rule:
ts
`const lib1 = require("lib1");
const { lib2 } = require("lib2");
import lib3 = require("lib3");`
Examples of correct code for this rule:
ts
`import * as lib1 from "lib1";
import { lib2 } from "lib2";
import * as lib3 from "lib3";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-require-imports": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-require-imports": "error",
},
});`bash
`oxlint --deny typescript/no-require-imports`

## Version

This rule was added in v0.13.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/r
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-require-imports.html)
- [oxc project](https://github.com/oxc-project/oxc)