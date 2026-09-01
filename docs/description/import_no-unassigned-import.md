# No Unassigned Import (import)

**Pattern ID:** `import_no-unassigned-import`
**Plugin:** `import`

## What it does

This rule aims to remove modules with side-effects by reporting when a module is imported but not assigned.

## Why is this bad?

With both CommonJS' require and the ES modules' import syntax, it is possible to import a module but not to use its result. This can be done explicitly by not assigning the module to a variable. Doing so can mean either of the following things:
- The module is imported but not used
- The module has side-effects. Having side-effects, makes it hard to know whether the module is actually used or can be removed. It can also make it harder to test or mock parts of your application.

## Examples

Examples of incorrect code for this rule:
js
`import "should";
require("should");`
Examples of correct code for this rule:
js
`import _ from "foo";
import _, { foo } from "foo";
import _, { foo as bar } from "foo";
const _ = require("foo");
const { foo } = require("foo");
const { foo: bar } = require("foo");
bar(require("foo"));`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-unassigned-import": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-unassigned-import": "error",
},
});`bash
`oxlint --deny import/no-unassigned-import --import-plugin`

## Version

This rule was added in v0.16.11.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_unassigned_import.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-unassigned-import)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-unassigned-import.html)
- [oxc project](https://github.com/oxc-project/oxc)