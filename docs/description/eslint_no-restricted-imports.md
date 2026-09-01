# No Restricted Imports (eslint)

**Pattern ID:** `eslint_no-restricted-imports`
**Plugin:** `eslint`

## What it does

This rule allows you to specify imports that you don’t want to use in your application. It applies to static imports and to dynamic `import()` with a string-literal source; computed sources like `import(bar)` are ignored.

## Why is this bad?

Some imports might not make sense in a particular environment. For example, Node.js’ fs module would not make sense in an environment that didn’t have a file system.
Some modules provide similar or identical functionality, think lodash and underscore. Your project may have standardized on a module. You want to make sure that the other alternatives are not being used as this would unnecessarily bloat the project and provide a higher maintenance cost of two dependencies when one would suffice.

## Examples

Examples of incorrect code for this rule:
js
`/* no-restricted-imports: ["error", "disallowed-import"] */
import foo from "disallowed-import";
export * from "disallowed-import";`
Examples of correct code for this rule:
js
`/* no-restricted-imports: ["error", "fs"] */
import crypto from "crypto";
export * from "bar";`

## References

- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-imports.html)
- [oxc project](https://github.com/oxc-project/oxc)