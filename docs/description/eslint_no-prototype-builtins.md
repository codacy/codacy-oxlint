# No Prototype Builtins (eslint)

**Pattern ID:** `eslint_no-prototype-builtins`
**Plugin:** `eslint`

## What it does

Disallow calling some `Object.prototype` methods directly on objects.

## Why is this bad?

In ECMAScript 5.1, `Object.create` was added, which enables the creation of objects with a specified [[Prototype]]. `Object.create(null)` is a common pattern used to create objects that will be used as a Map. This can lead to errors when it is assumed that objects will have properties from `Object.prototype`. This rule prevents calling some `Object.prototype` methods directly from an object. Additionally, objects can have properties that shadow the builtins on `Object.prototype`, potentially causing unintended behavior or denial-of-service security vulnerabilities. For example, it would be unsafe for a webserver to parse JSON input from a client and call `hasOwnProperty` directly on the resulting object, because a malicious client could send a JSON value like {"hasOwnProperty": 1} and cause the server to crash.
To avoid subtle bugs like this, it’s better to always call these methods from `Object.prototype`. For example, `foo.hasOwnProperty("bar")` should be replaced with `Object.prototype.hasOwnProperty.call(foo, "bar")`.

## Examples

Examples of incorrect code for this rule:
javascript
`var hasBarProperty = foo.hasOwnProperty("bar");
var isPrototypeOfBar = foo.isPrototypeOf(bar);
var barIsEnumerable = foo.propertyIsEnumerable("bar");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-prototype-builtins": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-prototype-builtins": "error",
},
});`bash
`oxlint --deny no-prototype-builtins`

## Version

This rule was added in v0.0.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_prototype_builtins.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-prototype-builtins)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-prototype-builtins)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-prototype-builtins.html)
- [oxc project](https://github.com/oxc-project/oxc)