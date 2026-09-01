# No Base To String (typescript)

**Pattern ID:** `typescript_no-base-to-string`
**Plugin:** `typescript`

## What it does

This rule requires `toString()` and `toLocaleString()` calls to only be called on objects which provide useful information when stringified.

## Why is this bad?

JavaScript's `toString()` method returns '[object Object]' on plain objects, which is not useful information. This rule prevents `toString()` and `toLocaleString()` from being called on objects that return less useful strings.

## Examples

Examples of incorrect code for this rule:
ts
`// These will evaluate to '[object Object]'
({}).toString();
({ foo: "bar" }).toString();
({ foo: "bar" }).toLocaleString();
// This will evaluate to 'Symbol()'
Symbol("foo").toString();`
Examples of correct code for this rule:
ts
`const someString = "Hello world";
someString.toString();
const someNumber = 42;
someNumber.toString();
const someBoolean = true;
someBoolean.toString();
class CustomToString {
toString() {
return "CustomToString";
}
}
new CustomToString().toString();`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-base-to-string": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-base-to-string": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-base-to-string`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_base_to_string.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-base-to-string/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_base_to_string/no_base_to_string.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-base-to-string.html)
- [oxc project](https://github.com/oxc-project/oxc)