# Prefer Import Meta Properties (unicorn)

**Pattern ID:** `unicorn_prefer-import-meta-properties`
**Plugin:** `unicorn`

## What it does

Prefer `import.meta.{dirname,filename}` over legacy techniques for getting file paths.

## Why is this bad?

Starting with Node.js 20.11, `import.meta.dirname` and `import.meta.filename` have been introduced in ES modules. `import.meta.filename` is equivalent to `url.fileURLToPath(import.meta.url)`. `import.meta.dirname` is equivalent to `path.dirname(import.meta.filename)`. This rule replaces legacy patterns with `import.meta.dirname` and `import.meta.filename`.

## Examples

Examples of incorrect code for this rule:
js
`import path from "node:path";
import { fileURLToPath } from "url";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.dirname(import.meta.filename);
const dirname = fileURLToPath(new URL(".", import.meta.url));`
Examples of correct code for this rule:
js
`const filename = import.meta.filename;
const dirname = import.meta.dirname;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-import-meta-properties": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-import-meta-properties": "error",
},
});`bash
`oxlint --deny unicorn/prefer-import-meta-properties`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_import_meta_properties.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-import-meta-properties.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-import-meta-properties)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-import-meta-properties.html)
- [oxc project](https://github.com/oxc-project/oxc)