# No Unnecessary Type Assertion (typescript)

**Pattern ID:** `typescript_no-unnecessary-type-assertion`
**Plugin:** `typescript`

## What it does

This rule disallows type assertions that do not change the type of an expression.

## Why is this bad?

Type assertions that don't actually change the type of an expression are unnecessary and can be safely removed. They add visual noise without providing any benefit and may indicate confusion about TypeScript's type system.

## Examples

Examples of incorrect code for this rule:
ts
`const str: string = "hello";
const redundant = str as string; // unnecessary, str is already string
function getString(): string {
return "hello";
}
const result = getString() as string; // unnecessary, getString() already returns string
const num = 42;
const alsoRedundant = num as 42; // unnecessary if TypeScript can infer literal type
// Unnecessary assertion to wider type
const literal = "hello" as string;`
Examples of correct code for this rule:
ts
`const unknown: unknown = "hello";
const str = unknown as string; // necessary to narrow type
const element = document.getElementById("myElement") as HTMLInputElement; // necessary for specific element type
const obj = { name: "John" };
const name = obj.name as const; // necessary for literal type
// No assertion needed
const str2: string = "hello";
const num: number = 42;`

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
"typescript/no-unnecessary-type-assertion": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unnecessary-type-assertion": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unnecessary-type-assertion`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unnecessary_type_assertion.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unnecessary-type-assertion/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unnecessary_type_assertion/no_unnecessary_type_assertion.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-assertion.html)
- [oxc project](https://github.com/oxc-project/oxc)