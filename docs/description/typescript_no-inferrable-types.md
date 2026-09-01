# No Inferrable Types (typescript)

**Pattern ID:** `typescript_no-inferrable-types`
**Plugin:** `typescript`

## What it does

Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.

## Why is this bad?

Explicitly typing variables or parameters that are initialized to a literal value is unnecessary because TypeScript can infer the type from the value.

## Examples

Examples of incorrect code for this rule:
ts
`const a: number = 5;
const b: string = "foo";
const c: boolean = true;
const fn = (a: number = 5, b: boolean = true, c: string = "foo") => {};`
Examples of correct code for this rule:
ts
`const a = 5;
const b = "foo";
const c = true;
const fn = (a = 5, b = true, c = "foo") => {};`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-inferrable-types": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-inferrable-types": "error",
},
});`bash
`oxlint --deny typescript/no-inferrable-types`

## Version

This rule was added in v0.14.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_inferrable_types.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-inferrable-types/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-inferrable-types)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-inferrable-types.html)
- [oxc project](https://github.com/oxc-project/oxc)