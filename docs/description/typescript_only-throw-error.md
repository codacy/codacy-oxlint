# Only Throw Error (typescript)

**Pattern ID:** `typescript_only-throw-error`
**Plugin:** `typescript`

## What it does

This rule disallows throwing non-Error values.

## Why is this bad?

It's considered good practice to only throw Error objects (or subclasses of Error). This is because Error objects automatically capture a stack trace, which is useful for debugging. Additionally, some tools and environments expect thrown values to be Error objects.

## Examples

Examples of incorrect code for this rule:
ts
`throw "error"; // throwing string
throw 42; // throwing number
throw true; // throwing boolean
throw { message: "error" }; // throwing plain object
throw null; // throwing null
throw undefined; // throwing undefined
const error = "Something went wrong";
throw error; // throwing non-Error variable`
Examples of correct code for this rule:
ts
`throw new Error("Something went wrong");
throw new TypeError("Invalid type");
throw new RangeError("Value out of range");
// Custom Error subclasses
class CustomError extends Error {
constructor(message: string) {
super(message);
this.name = "CustomError";
}
}
throw new CustomError("Custom error occurred");
// Variables that are Error objects
const error = new Error("Error message");
throw error;`

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
"typescript/only-throw-error": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/only-throw-error": "error",
},
});`bash
`oxlint --type-aware --deny typescript/only-throw-error`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/only_throw_error.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/only-throw-error/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/only_throw_error/only_throw_error.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/only-throw-error.html)
- [oxc project](https://github.com/oxc-project/oxc)