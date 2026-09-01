# No Extraneous Class (typescript)

**Pattern ID:** `typescript_no-extraneous-class`
**Plugin:** `typescript`

## What it does

This rule reports when a class has no non-static members, such as for a class used exclusively as a static namespace. This rule also reports classes that have only a constructor and no fields. Those classes can generally be replaced with a standalone function.

## Why is this bad?

Users who come from a OOP paradigm may wrap their utility functions in an extra class, instead of putting them at the top level of an ECMAScript module. Doing so is generally unnecessary in JavaScript and TypeScript projects.
- Wrapper classes add extra cognitive complexity to code without adding any structural improvements - Whatever would be put on them, such as utility functions, are already organized by virtue of being in a module.
- As an alternative, you can `import * as ...` the module to get all of them in a single object.
- IDEs can't provide as good suggestions for static class or namespace imported properties when you start typing property names
- It's more difficult to statically analyze code for unused variables, etc. when they're all on the class (see: [Finding dead code (and dead types) in TypeScript](https://effectivetypescript.com/2020/10/20/tsprune/)).
This rule also reports classes that have only a constructor and no fields. Those classes can generally be replaced with a standalone function.

## Examples

Examples of incorrect code for this rule:
ts
`class StaticConstants {
static readonly version = 42;
static isProduction() {
return process.env.NODE_ENV === "production";
}
}
class HelloWorldLogger {
constructor() {
console.log("Hello, world!");
}
}
abstract class Foo {}`
Examples of correct code for this rule:
ts
`const version = 42;
const isProduction = () => process.env.NODE_ENV === "production";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-extraneous-class": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-extraneous-class": "error",
},
});`bash
`oxlint --deny typescript/no-extraneous-class`

## Version

This rule was added in v0.7.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_extraneous_class.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-extraneous-class/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-extraneous-class)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extraneous-class.html)
- [oxc project](https://github.com/oxc-project/oxc)