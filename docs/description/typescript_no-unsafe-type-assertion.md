# No Unsafe Type Assertion (typescript)

**Pattern ID:** `typescript_no-unsafe-type-assertion`
**Plugin:** `typescript`

## What it does

Disallows unsafe type assertions that narrow a type.

## Why is this bad?

Type assertions that narrow a type bypass TypeScript's type-checking and can lead to runtime errors. Type assertions that broaden a type are safe because TypeScript essentially knows less about a type. Instead of using type assertions to narrow a type, it's better to rely on type guards, which help avoid potential runtime errors caused by unsafe type assertions.

## Examples

Examples of incorrect code for this rule:
ts
`function f() {
return Math.random() < 0.5 ? 42 : "oops";
}
const z = f() as number;
const items = [1, "2", 3, "4"];
const number = items[0] as number;`
Examples of correct code for this rule:
ts
`function f() {
return Math.random() < 0.5 ? 42 : "oops";
}
const z = f() as number | string | boolean;
const items = [1, "2", 3, "4"];
const number = items[0] as number | string | undefined;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-unsafe-type-assertion": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unsafe-type-assertion": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unsafe-type-assertion`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unsafe_type_assertion.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unsafe-type-assertion/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unsafe_type_assertion/no_unsafe_type_assertion.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-type-assertion.html)
- [oxc project](https://github.com/oxc-project/oxc)