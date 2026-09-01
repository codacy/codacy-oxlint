# Related Getter Setter Pairs (typescript)

**Pattern ID:** `typescript_related-getter-setter-pairs`
**Plugin:** `typescript`

## What it does

This rule enforces that getters and setters for the same property are defined together and have related types.

## Why is this bad?

When you define a getter and setter for the same property, they should typically be defined together and work with compatible types. Having mismatched types or defining them separately can lead to confusion and potential runtime errors.

## Examples

Examples of incorrect code for this rule:
ts
`class Example {
// Getter and setter with incompatible types
get value(): string {
return this._value.toString();
}
set value(val: number) {
// Incompatible with getter
this._value = val;
}
private _value: number = 0;
}
// Getter without corresponding setter or vice versa might be flagged
class IncompleteProperty {
get readOnlyValue(): string {
return "constant";
}
// Missing setter - might be intended, but should be consistent
}`
Examples of correct code for this rule:
ts
`class Example {
// Getter and setter with compatible types
get value(): string {
return this._value;
}
set value(val: string) {
this._value = val;
}
private _value: string = "";
}
// Read-only property with only getter
class ReadOnlyProperty {
get constant(): string {
return "constant value";
}
}
// Write-only property with only setter (less common but valid)
class WriteOnlyProperty {
set logger(message: string) {
console.log(message);
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/related-getter-setter-pairs": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/related-getter-setter-pairs": "error",
},
});`bash
`oxlint --type-aware --deny typescript/related-getter-setter-pairs`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/related_getter_setter_pairs.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/related-getter-setter-pairs/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/related_getter_setter_pairs/related_getter_setter_pairs.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/related-getter-setter-pairs.html)
- [oxc project](https://github.com/oxc-project/oxc)