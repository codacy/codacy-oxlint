# No Throw Literal (eslint)

**Pattern ID:** `eslint_no-throw-literal`
**Plugin:** `eslint`

## What it does

Disallows throwing literals or non-Error objects as exceptions.
WARNING
This rule has been deprecated, please instead use [typescript/only-throw-error](https://oxc.rs/docs/guide/usage/linter/rules/typescript/only-throw-error.html). The typescript rule is more reliable than the Javascript version, as it has less false positive, and can catch more cases.

## Why is this bad?

It is considered good practice to only throw the Error object itself or an object using the Error object as base objects for user-defined exceptions. The fundamental benefit of Error objects is that they automatically keep track of where they were built and originated.

## Examples

Examples of incorrect code for this rule:
js
`throw "error";
throw 0;
throw undefined;
throw null;
var err = new Error();
throw "an " + err;
// err is recast to a string literal
var err = new Error();
throw `${err}`;`
Examples of correct code for this rule:
js
`throw new Error();
throw new Error("error");
var e = new Error("error");
throw e;
try {
throw new Error("error");
} catch (e) {
throw e;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-throw-literal": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-throw-literal": "error",
},
});`bash
`oxlint --deny no-throw-literal`

## Version

This rule was added in v0.9.10.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_throw_literal.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-throw-literal)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-throw-literal)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-throw-literal.html)
- [oxc project](https://github.com/oxc-project/oxc)