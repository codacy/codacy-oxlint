# No Named As Default Member (import)

**Pattern ID:** `import_no-named-as-default-member`
**Plugin:** `import`

## What it does

Reports the use of an exported name (named export) as a property on the default export. This occurs when trying to access a named export through the default export, which is incorrect.

## Why is this bad?

Accessing a named export via the default export is incorrect and will not work as expected. Named exports should be imported directly, while default exports are accessed without properties. This mistake can lead to runtime errors or undefined behavior.

## Examples

Given
javascript
`// ./bar.js
export function bar() {
return null;
}
export default () => {
return 1;
};`
Examples of incorrect code for this rule:
javascript
`// ./foo.js
import foo from "./bar";
const bar = foo.bar; // Incorrect: trying to access named export via default`
Examples of correct code for this rule:
javascript
`// ./foo.js
import { bar } from "./bar"; // Correct: accessing named export directly`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-named-as-default-member": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-named-as-default-member": "error",
},
});`bash
`oxlint --deny import/no-named-as-default-member --import-plugin`

## Version

This rule was added in v0.2.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_named_as_default_member.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-named-as-default-member)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default-member.html)
- [oxc project](https://github.com/oxc-project/oxc)