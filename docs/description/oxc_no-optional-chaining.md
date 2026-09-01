# No Optional Chaining (oxc)

**Pattern ID:** `oxc_no-optional-chaining`
**Plugin:** `oxc`

## What it does

Disallow [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

## Why is this bad?

You may want to use this rule if you need to maintain compatibility with older environments. However, optional chaining has been supported in all major browsers since 2020 and is generally safe to use today.
In some cases, transpiling optional chaining can result in verbose helper code that impacts bundle size and performance. This rule is useful when you need to avoid the overhead of transpiled optional chaining. This is only relevant if you are polyfilling to support browsers from pre-2020.
In most codebases at this point, you should not use this rule.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = obj?.foo;
obj.fn?.();`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/no-optional-chaining": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/no-optional-chaining": "error",
},
});`bash
`oxlint --deny oxc/no-optional-chaining`

## Version

This rule was added in v0.5.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/no_optional_chaining.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fno-optional-chaining)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-optional-chaining.html)
- [oxc project](https://github.com/oxc-project/oxc)