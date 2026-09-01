# Unambiguous (import)

**Pattern ID:** `import_unambiguous`
**Plugin:** `import`

## What it does

Warn if a `module` could be mistakenly parsed as a `script` instead of as a pure [ES module](https://nodejs.org/api/esm.html#modules-ecmascript-modules).

## Why is this bad?

For ESM-only environments, ambiguous files may lead to unexpected results and problems.

## Examples

Examples of incorrect code for this rule:
js
`function x() {}
(function x() {
return 42;
})();`
Examples of correct code for this rule:
js
`import "foo";
function x() {
return 42;
}
export function x() {
return 42;
}
(function x() {
return 42;
})();
export {}; // simple way to mark side-effects-only file as 'module' without any imports/exports`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/unambiguous": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/unambiguous": "error",
},
});`bash
`oxlint --deny import/unambiguous --import-plugin`

## Version

This rule was added in v0.11.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/unambiguous.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Funambiguous)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/unambiguous.html)
- [oxc project](https://github.com/oxc-project/oxc)