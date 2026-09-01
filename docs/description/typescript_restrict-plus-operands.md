# Restrict Plus Operands (typescript)

**Pattern ID:** `typescript_restrict-plus-operands`
**Plugin:** `typescript`

## What it does

This rule requires both operands of addition to be the same type and be number, string, or any.

## Why is this bad?

JavaScript's + operator can be used for both numeric addition and string concatenation. When the operands are of different types, JavaScript's type coercion rules can lead to unexpected results. This rule helps prevent these issues by requiring both operands to be of compatible types.

## Examples

Examples of incorrect code for this rule:
ts
`declare const num: number;
declare const str: string;
declare const bool: boolean;
declare const obj: object;
// Mixed types
const result1 = num + str; // number + string
const result2 = str + bool; // string + boolean
const result3 = num + bool; // number + boolean
const result4 = obj + str; // object + string
// Literals with different types
const result5 = 42 + "hello"; // number literal + string literal
const result6 = true + 5; // boolean literal + number literal`
Examples of correct code for this rule:
ts
`declare const num1: number;
declare const num2: number;
declare const str1: string;
declare const str2: string;
// Same types
const sum = num1 + num2; // number + number
const concat = str1 + str2; // string + string
// Explicit conversions
const result1 = num1 + String(num2); // Convert to string first
const result2 = String(num1) + str1; // Convert to string first
const result3 = Number(str1) + num1; // Convert to number first
// Template literals for string concatenation
const result4 = `${num1}${str1}`; // Clear intent to concatenate
// Literals of same type
const numResult = 42 + 58; // number + number
const strResult = "hello" + "world"; // string + string`

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
"typescript/restrict-plus-operands": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/restrict-plus-operands": "error",
},
});`bash
`oxlint --type-aware --deny typescript/restrict-plus-operands`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/restrict_plus_operands.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/restrict-plus-operands/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/restrict_plus_operands/restrict_plus_operands.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-plus-operands.html)
- [oxc project](https://github.com/oxc-project/oxc)