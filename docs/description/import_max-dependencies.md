# Max Dependencies (import)

**Pattern ID:** `import_max-dependencies`
**Plugin:** `import`

## What it does

Forbid modules to have too many dependencies (`import` statements only).

## Why is this bad?

This is a useful rule because a module with too many dependencies is a code smell, and usually indicates the module is doing too much and/or should be broken up into smaller modules.
NOTE: This rule only counts `import` statements, and does not count dependencies from CommonJS `require()` statements. This is a difference from the original eslint-import-plugin rule.

## Examples

Given `{ "max": 2 }`
Examples of incorrect code for this rule:
javascript
`import a from "./a";
import b from "./b";
import c from "./c"; // Too many dependencies: 3 (max: 2)`
Examples of correct code for this rule:
javascript
`import a from "./a";
import b from "./b"; // Allowed: 2 dependencies (max: 2)`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/max-dependencies": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/max-dependencies": "error",
},
});`bash
`oxlint --deny import/max-dependencies --import-plugin`

## Version

This rule was added in v0.5.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/max_dependencies.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fmax-dependencies)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/max-dependencies.html)
- [oxc project](https://github.com/oxc-project/oxc)