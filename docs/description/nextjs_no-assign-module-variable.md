# No Assign Module Variable (nextjs)

**Pattern ID:** `nextjs_no-assign-module-variable`
**Plugin:** `nextjs`

## What it does

Prevents the assignment or declaration of variables named `module` in Next.js applications.

## Why is this bad?

The variable name `module` is reserved in Next.js for internal use and module system functionality. Declaring your own `module` variable can conflict with Next.js's internal module system, lead to unexpected behavior in your application, and cause issues with code splitting and hot module replacement.

## Examples

Examples of incorrect code for this rule:
javascript
`// Declaring module variable
let module = {};
// Using module in variable declaration
const module = {
exports: {},
};
// Assigning to module
module = { id: "my-module" };`
Examples of correct code for this rule:
javascript
`// Use a different variable name
let myModule = {};
// Use a more descriptive name
const customModule = {
exports: {},
};
// Access actual module object (when available)
console.log(module.exports);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-assign-module-variable": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-assign-module-variable": "error",
},
});`bash
`oxlint --deny nextjs/no-assign-module-variable --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_assign_module_variable.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-assign-module-variable)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-assign-module-variable)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-assign-module-variable.html)
- [oxc project](https://github.com/oxc-project/oxc)