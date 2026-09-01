# No Empty File (unicorn)

**Pattern ID:** `unicorn_no-empty-file`
**Plugin:** `unicorn`

## What it does

Disallows files that do not contain any meaningful code.
This includes files that consist only of:
- Whitespace
- Comments
- Directives (e.g., `"use strict"`)
- Empty statements (`;`)
- Empty blocks (`{}`)
- Hashbangs (`#!/usr/bin/env node`)

## Why is this bad?

Files with no executable or exportable content are typically unintentional or left over from refactoring. They clutter the codebase and may confuse tooling or developers by appearing to serve a purpose when they do not.

## Examples

Examples of incorrect code for this rule:
js
``js
`// Comment`js
`/* Comment */`js
`"use strict";`js
``js
`{
}`js
`#!/usr/bin/env node`
Examples of correct code for this rule:
js
`const x = 0;`js
`"use strict";
const x = 0;`js
`const x = 0;`js
`{
const x = 0;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-empty-file": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-empty-file": "error",
},
});`bash
`oxlint --deny unicorn/no-empty-file`

## Version

This rule was added in v0.0.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_empty_file.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-empty-file)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-empty-file.html)
- [oxc project](https://github.com/oxc-project/oxc)