# Prefer Single Call (unicorn)

**Pattern ID:** `unicorn_prefer-single-call`
**Plugin:** `unicorn`

## What it does

Enforces combining multiple `Array#{push,unshift}()`, `Element#classList.{add,remove}()`, and `importScripts()` into a single call.
Supersedes the deprecated `unicorn/no-array-push-push` rule.

## Why is this bad?

Calling the same variadic method on the same receiver multiple times consecutively can be merged into a single call, which is more concise and can be marginally more performant.

## Examples

Examples of incorrect code for this rule:
javascript
`foo.push(1);
foo.push(2);
foo.unshift(1);
foo.unshift(2);
element.classList.add("foo");
element.classList.add("bar");
importScripts("foo.js");
importScripts("bar.js");`
Examples of correct code for this rule:
javascript
`foo.push(1, 2);
foo.unshift(2, 1);
element.classList.add("foo", "bar");
importScripts("foo.js", "bar.js");`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-single-call": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-single-call": "error",
},
});`bash
`oxlint --deny unicorn/prefer-single-call`

## Version

This rule was added in v1.70.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_single_call.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-call.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-single-call)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-single-call.html)
- [oxc project](https://github.com/oxc-project/oxc)