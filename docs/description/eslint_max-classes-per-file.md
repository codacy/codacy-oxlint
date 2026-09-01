# Max Classes Per File (eslint)

**Pattern ID:** `eslint_max-classes-per-file`
**Plugin:** `eslint`

## What it does

Enforce a maximum number of classes per file.

## Why is this bad?

Files containing multiple classes can often result in a less navigable and poorly structured codebase. Best practice is to keep each file limited to a single responsibility.

## Examples

Examples of incorrect code for this rule:
javascript
`class Foo {}
class Bar {}`
Examples of correct code for this rule:
js
`function foo() {
var bar = 1;
let baz = 2;
const qux = 3;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"max-classes-per-file": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"max-classes-per-file": "error",
},
});`bash
`oxlint --deny max-classes-per-file`

## Version

This rule was added in v0.3.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/max_classes_per_file.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/max-classes-per-file)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fmax-classes-per-file)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-classes-per-file.html)
- [oxc project](https://github.com/oxc-project/oxc)