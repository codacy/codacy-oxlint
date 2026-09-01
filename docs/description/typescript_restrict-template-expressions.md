# Restrict Template Expressions (typescript)

**Pattern ID:** `typescript_restrict-template-expressions`
**Plugin:** `typescript`

## What it does

This rule restricts the types allowed in template literal expressions.

## Why is this bad?

Template literals will call `toString()` on the interpolated values. Some types don't have meaningful string representations (like objects that become `"[object Object]"`) or may not have a `toString` method at all. This rule helps ensure that only appropriate types are used in template expressions.

## Examples

Examples of incorrect code for this rule:
ts
`declare const obj: object;
declare const sym: symbol;
declare const fn: () => void;
declare const arr: unknown[];
// Objects become "[object Object]"
const str1 = `Value: ${obj}`;
// Symbols might not be what you expect
const str2 = `Symbol: ${sym}`;
// Functions become their source code or "[Function]"
const str3 = `Function: ${fn}`;
// Arrays might not format as expected
const str4 = `Array: ${arr}`;
// undefined/null become "undefined"/"null" which might be confusing
declare const maybeValue: string | undefined;
const str5 = `Value: ${maybeValue}`; // Could be "Value: undefined"`
Examples of correct code for this rule:
ts
`declare const str: string;
declare const num: number;
declare const bool: boolean;
declare const obj: object;
// Safe types
const result1 = `String: ${str}`;
const result2 = `Number: ${num}`;
const result3 = `Boolean: ${bool}`;
// Explicit conversions for complex types
const result4 = `Object: ${JSON.stringify(obj)}`;
const result5 = `Array: ${arr.join(", ")}`;
// Handle undefined/null explicitly
declare const maybeValue: string | undefined;
const result6 = `Value: ${maybeValue ?? "N/A"}`;
const result7 = `Value: ${maybeValue || "default"}`;
// Type guards for unknown values
declare const unknown: unknown;
const result8 = typeof unknown === "string" ? `Value: ${unknown}` : "Invalid";`

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
"typescript/restrict-template-expressions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/restrict-template-expressions": "error",
},
});`bash
`oxlint --type-aware --deny typescript/restrict-template-expressions`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/restrict_template_expressions.rs)
- [Upstream rule docs](https://typescript-es
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-template-expressions.html)
- [oxc project](https://github.com/oxc-project/oxc)