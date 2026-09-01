# Default (import)

**Pattern ID:** `import_default`
**Plugin:** `import`

## What it does

If a default import is requested, this rule will report if there is no default export in the imported module.

## Why is this bad?

Using a default import when there is no default export can lead to confusion and runtime errors. It can make the code harder to understand and maintain, as it may suggest that a module has a default export when it does not, leading to unexpected behavior.

## Examples

Examples of incorrect code for this rule:
javascript
`// ./bar.js
export function bar() {
return null;
}
// ./foo.js
import bar from "./bar"; // no default export found in ./bar`
Examples of correct code for this rule:
javascript
`// ./bar.js
export default function bar() {
return null;
}
// ./foo.js
import { bar } from "./bar"; // correct usage of named import`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/default": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/default": "error",
},
});`bash
`oxlint --deny import/default --import-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/default.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fdefault)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/default.html)
- [oxc project](https://github.com/oxc-project/oxc)