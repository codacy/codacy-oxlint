# No Unsafe Function Type (typescript)

**Pattern ID:** `typescript_no-unsafe-function-type`
**Plugin:** `typescript`

## What it does

Disallow using the unsafe built-in Function type.

## Why is this bad?

TypeScript's built-in Function type allows being called with any number of arguments and returns type any. Function also allows classes or plain objects that happen to possess all properties of the Function class. It's generally better to specify function parameters and return types with the function type syntax.

## Examples

Examples of incorrect code for this rule:
ts
`let noParametersOrReturn: Function;
noParametersOrReturn = () => {};
let stringToNumber: Function;
stringToNumber = (text: string) => text.length;
let identity: Function;
identity = (value) => value;`
Examples of correct code for this rule:
ts
`let noParametersOrReturn: () => void;
noParametersOrReturn = () => {};
let stringToNumber: (text: string) => number;
stringToNumber = (text) => text.length;
let identity: <T>(value: T) => T;
identity = (value) => value;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-unsafe-function-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-unsafe-function-type": "error",
},
});`bash
`oxlint --deny typescript/no-unsafe-function-type`

## Version

This rule was added in v0.11.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unsafe_function_type.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unsafe-function-type/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-unsafe-function-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-function-type.html)
- [oxc project](https://github.com/oxc-project/oxc)