# Id Match (eslint)

**Pattern ID:** `eslint_id-match`
**Plugin:** `eslint`

## What it does

Enforces a naming convention for identifiers by requiring each checked name to match a configured regular expression.

## Why is this bad?

Inconsistent identifier names make code harder to read and maintain.
This rule is most commonly used to enforce a project-wide convention such as `camelCase`, `snake_case`, or names without underscores.
The configured pattern is compiled with Rust regex syntax. Most common naming patterns work the same way as JavaScript regular expressions, but JavaScript-specific features such as lookaround assertions and backreferences are not supported. Unicode escapes also use Rust syntax, so `\uXXXX` should be written as `\u{XXXX}`.

## Examples

Examples of incorrect code for this rule:
js
`/* id-match: ["error", "^[^_]+$"] */
var first_name = "John";
/* id-match: ["error", "^[^_]+$", { "properties": true }] */
obj.first_name = "John";`
Examples of correct code for this rule:
js
`/* id-match: ["error", "^[^_]+$"] */
var firstName = "John";
/* id-match: ["error", "^[^_]+$", { "ignoreDestructuring": true }] */
const { first_name } = user;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"id-match": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"id-match": "error",
},
});`bash
`oxlint --deny id-match`

## Version

This rule was added in v1.66.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/id_match.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/id-match)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fid-match)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-match.html)
- [oxc project](https://github.com/oxc-project/oxc)