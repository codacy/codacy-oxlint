# Newline After Import (import)

**Pattern ID:** `import_newline-after-import`
**Plugin:** `import`

## What it does

Enforces having one or more empty lines after the last top-level import statement or require call.

## Why is this bad?

Without a blank line, import/require declarations blend into the following logic, which hurts readability and makes changes harder to scan. A blank line clearly separates dependencies from implementation.

## Examples

Examples of incorrect code for this rule:
js
`import * as foo from "foo";
const FOO = "BAR";`js
`import * as foo from "foo";
const FOO = "BAR";
import { bar } from "bar-lib";`js
`const FOO = require("./foo");
const BAZ = 1;
const BAR = require("./bar");`
Examples of correct code for this rule:
js
`import defaultExport from "./foo";
const FOO = "BAR";`js
`import defaultExport from "./foo";
import { bar } from "bar-lib";
const FOO = "BAR";`js
`const FOO = require("./foo");
const BAR = require("./bar");
const BAZ = 1;`
With count set to 2 this will be considered valid:
js
`import defaultExport from "./foo";
const FOO = "BAR";`js
`import defaultExport from "./foo";
const FOO = "BAR";`
With count set to 2 these will be considered invalid:
js
`import defaultExport from "./foo";
const FOO = "BAR";`js
`import defaultExport from "./foo";
const FOO = "BAR";`
With count set to 2 and exactCount set to true this will be considered valid:
js
`import defaultExport from "./foo";
const FOO = "BAR";`
With count set to 2 and exactCount set to true these will be considered invalid:
js
`import defaultExport from "./foo";
const FOO = "BAR";`js
`import defaultExport from "./foo";
const FOO = "BAR";`js
`import defaultExport from "./foo";
const FOO = "BAR";`js
`import defaultExport from "./foo";
const FOO = "BAR";`
With considerComments set to false this will be considered valid:
js
`import defaultExport from "./foo";
// some comment here.
const FOO = "BAR";`
With considerComments set to true this will be considered valid:
js
`import defaultExport from "./foo";
// some comment here.
const FOO = "BAR";`
With considerComments set to true this will be considered invalid:
js
`import defaultExport from "./foo";
// some comment here.
const FOO = "BAR";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/newline-after-import": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/newline-after-import": "error",
},
});`bash
`oxlint --deny import/newline-after-import --import-plugin`

## Version

This rule was added in v1.66.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/newline_after_import.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fnewline-after-import)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/newline-after-import.html)
- [oxc project](https://github.com/oxc-project/oxc)