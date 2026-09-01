# Max Nested Calls (unicorn)

**Pattern ID:** `unicorn_max-nested-calls`
**Plugin:** `unicorn`

## What it does

Limit the depth of nested calls.
This rule counts calls and constructor calls passed into other calls or constructors. Fluent receiver chains and JSX wrappers are ignored.

## Why is this bad?

Deeply nested calls make code hard to read. Extracting intermediate results into named variables improves readability.

## Examples

Examples of incorrect code for this rule:
js
`foo(bar(baz(qux())));`
Examples of correct code for this rule:
js
`const value = baz(qux());
foo(bar(value));
// Fluent chains are ignored.
query().filter().map().toArray();`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/max-nested-calls": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/max-nested-calls": "error",
},
});`bash
`oxlint --deny unicorn/max-nested-calls`

## Version

This rule was added in v1.71.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/max_nested_calls.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/max-nested-calls.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fmax-nested-calls)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/max-nested-calls.html)
- [oxc project](https://github.com/oxc-project/oxc)