# No Console (eslint)

**Pattern ID:** `eslint_no-console`
**Plugin:** `eslint`

## What it does

Disallow the use of console.

## Why is this bad?

In JavaScript that is designed to be executed in the browser, it’s considered a best practice to avoid using methods on console. Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client. In general, calls using console should be stripped before being pushed to production.

## Examples

Examples of incorrect code for this rule:
javascript
`console.log("Log a debug level message.");
console.warn("Log a warn level message.");
console.error("Log an error level message.");
console.log = foo();`
Examples of correct code for this rule:
javascript
`// custom console
Console.log("Hello world!");`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-console": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-console": "error",
},
});`bash
`oxlint --deny no-console`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_console.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-console)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-console)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-console.html)
- [oxc project](https://github.com/oxc-project/oxc)