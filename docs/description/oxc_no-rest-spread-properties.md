# No Rest Spread Properties (oxc)

**Pattern ID:** `oxc_no-rest-spread-properties`
**Plugin:** `oxc`

## What it does

Disallow [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread#readme).

## Why is this bad?

Object rest/spread properties are a relatively new JavaScript feature that may not be supported in all target environments. If you need to support older browsers or JavaScript engines that don't support these features, using them can cause runtime errors. This rule helps maintain compatibility with older environments by preventing the use of these modern syntax features.

## Examples

Examples of incorrect code for this rule:
javascript
`let { x, ...y } = z;
let z = { x, ...y };`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/no-rest-spread-properties": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/no-rest-spread-properties": "error",
},
});`bash
`oxlint --deny oxc/no-rest-spread-properties`

## Version

This rule was added in v0.4.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/no_rest_spread_properties.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fno-rest-spread-properties)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-rest-spread-properties.html)
- [oxc project](https://github.com/oxc-project/oxc)