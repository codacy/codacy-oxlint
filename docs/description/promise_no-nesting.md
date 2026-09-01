# No Nesting (promise)

**Pattern ID:** `promise_no-nesting`
**Plugin:** `promise`

## What it does

Disallow nested `then()` or `catch()` statements.

## Why is this bad?

Nesting promises makes code harder to read and understand.

## Examples

Examples of incorrect code for this rule:
javascript
`doThing().then(() => a.then());
doThing().then(function () {
a.then();
});
doThing().then(() => {
b.catch();
});
doThing().catch((val) => doSomething(val).catch(errors));`
Examples of correct code for this rule:
javascript
`doThing().then(() => 4);
doThing().then(function () {
return 4;
});
doThing().catch(() => 4);`javascript
`doThing()
.then(() => Promise.resolve(1))
.then(() => Promise.resolve(2));`
This example is not a rule violation as unnesting here would result in `a` being undefined in the expression `getC(a, b)`.
javascript
`doThing().then((a) => getB(a).then((b) => getC(a, b)));`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/no-nesting": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/no-nesting": "error",
},
});`bash
`oxlint --deny promise/no-nesting --promise-plugin`

## Version

This rule was added in v0.15.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/no_nesting.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fno-nesting)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/no-nesting.html)
- [oxc project](https://github.com/oxc-project/oxc)