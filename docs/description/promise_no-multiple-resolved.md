# No Multiple Resolved (promise)

**Pattern ID:** `promise_no-multiple-resolved`
**Plugin:** `promise`

## What it does

This rule warns of paths that resolve multiple times in executor functions of Promise constructors.

## Why is this bad?

Multiple resolve/reject calls:
- Violate the Promise/A+ specification
- Have no effect on the Promise's behavior
- Make the code's intent unclear
- May indicate logical errors in the implementation

## Examples

Examples of incorrect code for this rule:
javascript
`new Promise((resolve, reject) => {
fn((error, value) => {
if (error) {
reject(error);
}
resolve(value); // Both `reject` and `resolve` may be called.
});
});`
Examples of correct code for this rule:
javascript
`new Promise((resolve, reject) => {
fn((error, value) => {
if (error) {
reject(error);
} else {
resolve(value);
}
});
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/no-multiple-resolved": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/no-multiple-resolved": "error",
},
});`bash
`oxlint --deny promise/no-multiple-resolved --promise-plugin`

## Version

This rule was added in v1.19.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/no_multiple_resolved.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fno-multiple-resolved)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/no-multiple-resolved.html)
- [oxc project](https://github.com/oxc-project/oxc)