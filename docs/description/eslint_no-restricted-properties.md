# No Restricted Properties (eslint)

**Pattern ID:** `eslint_no-restricted-properties`
**Plugin:** `eslint`

## What it does

This rule allows you to disallow access to certain properties on certain objects.

## Why is this bad?

Certain properties on objects may be disallowed in a codebase. This is useful for deprecating an API or restricting usage of a module’s methods. For example, you may want to disallow using describe.only when using Mocha or telling people to use Object.assign instead of _.extend.
If you want to disallow APIs marked with `@deprecated`, consider using the type-aware `typescript/no-deprecated` rule instead.

## Examples

With options:
json
`"no-restricted-properties": ["error", {
"object": "JSON",
"property": "parse"
}]`
Examples of incorrect code for this rule:
js
`/* no-restricted-properties: ["error", { "object": "JSON", "property": "parse" }] */
JSON.parse('{ "json": "here" }'); // 'JSON.parse' is restricted from being used.`
Examples of correct code for this rule:
js
`/* no-restricted-properties: ["error", { "object": "JSON", "property": "parse" }] */
JSON.stringify({ json: "here" });`
With options:
json
`"no-restricted-properties": ["error", {
"property": "extend",
"allowObjects": ["safeUtils"]
}]`
Examples of incorrect code for this rule:
js
`/* no-restricted-properties: ["error", { "property": "extend", "allowObjects": ["safeUtils"] }] */
unsafeUtils.extend(value); // 'extend' is restricted from being used. Property 'extend' is only allowed on these objects: safeUtils.`
Examples of correct code for this rule:
js
`/* no-restricted-properties: ["error", { "property": "extend", "allowObjects": ["safeUtils"] }] */
safeUtils.extend(value);`
With options:
json
`"no-restricted-properties": ["error", {
"object": "legacyApi",
"allowProperties": ["stableMethod"]
}]`
Examples of incorrect code for this rule:
js
`/* no-restricted-properties: ["error", { "object": "legacyApi", "allowProperties": ["stableMethod"] }] */
legacyApi.unstableMethod(); // 'legacyApi' is restricted from being used. Only these properties are allowed: stableMethod.`
Examples of correct code for this rule:
js
`/* no-restricted-properties: ["error", { "object": "legacyApi", "allowProperties": ["stableMethod"] }] */
legacyApi.stableMethod();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-restricted-properties": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-restricted-properties": "error",
},
});`bash
`oxlint --deny no-restricted-properties`

## Version

This rule was added in v1.63.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_restricted_properties.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-restricted-properties)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-restricted-properties)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-properties.html)
- [oxc project](https://github.com/oxc-project/oxc)