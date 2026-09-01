# No Barrel File (oxc)

**Pattern ID:** `oxc_no-barrel-file`
**Plugin:** `oxc`

## What it does

Disallow the use of barrel files where the file contains `export *` statements, and the total number of modules exceeds a threshold.
The default threshold is 100.

## Why is this bad?

Barrel files that re-export many modules can significantly slow down applications and bundlers. When a barrel file exports a large number of modules, importing from it forces the runtime or bundler to process all the exported modules, even if only a few are actually used. This leads to slower startup times and larger bundle sizes.
References:
- [https://github.com/thepassle/eslint-plugin-barrel-files](https://github.com/thepassle/eslint-plugin-barrel-files)
- [https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7)

## Examples

Invalid:
javascript
`export * from "foo"; // where `foo` loads a subtree of 100 modules
import * as ns from "foo"; // where `foo` loads a subtree of 100 modules`
Valid:
javascript
`export { foo } from "foo";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/no-barrel-file": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/no-barrel-file": "error",
},
});`bash
`oxlint --deny oxc/no-barrel-file`

## Version

This rule was added in v0.3.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/no_barrel_file.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fno-barrel-file)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-barrel-file.html)
- [oxc project](https://github.com/oxc-project/oxc)