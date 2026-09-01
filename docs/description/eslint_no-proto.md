# No Proto (eslint)

**Pattern ID:** `eslint_no-proto`
**Plugin:** `eslint`

## What it does

Disallow the use of the `__proto__` property.

## Why is this bad?

The `__proto__` property has been deprecated as of ECMAScript 3.1 and shouldn’t be used in new code. Use `Object.getPrototypeOf` and `Object.setPrototypeOf` instead.
For more information, see [the MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto).

## Examples

Examples of incorrect code for this rule:
javascript
`var a = obj.__proto__;
var a = obj["__proto__"];
obj.__proto__ = b;
obj["__proto__"] = b;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-proto": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-proto": "error",
},
});`bash
`oxlint --deny no-proto`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_proto.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-proto)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-proto)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-proto.html)
- [oxc project](https://github.com/oxc-project/oxc)