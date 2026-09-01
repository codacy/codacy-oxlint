# Branches Sharing Code (oxc)

**Pattern ID:** `oxc_branches-sharing-code`
**Plugin:** `oxc`

## What it does

Checks if the `if` and `else` blocks contain shared code that can be moved out of the blocks.

## Why is this bad?

Duplicate code is less maintainable. Extracting common code from branches makes the code more DRY (Don't Repeat Yourself) and easier to maintain.

## Examples

Examples of incorrect code for this rule:
javascript
`if (condition) {
console.log("Hello");
return 13;
} else {
console.log("Hello");
return 42;
}
if (condition) {
doSomething();
cleanup();
} else {
doSomethingElse();
cleanup();
}`
Examples of correct code for this rule:
javascript
`console.log("Hello");
if (condition) {
return 13;
} else {
return 42;
}
if (condition) {
doSomething();
} else {
doSomethingElse();
}
cleanup();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/branches-sharing-code": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/branches-sharing-code": "error",
},
});`bash
`oxlint --deny oxc/branches-sharing-code`

## Version

This rule was added in v1.22.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/branches_sharing_code.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fbranches-sharing-code)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/branches-sharing-code.html)
- [oxc project](https://github.com/oxc-project/oxc)