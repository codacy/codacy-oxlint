# No Shadow Restricted Names (eslint)

**Pattern ID:** `eslint_no-shadow-restricted-names`
**Plugin:** `eslint`

## What it does

Disallows the redefining of global variables such as `undefined`, `NaN`, `Infinity`, `eval`, `globalThis` and `arguments`.

## Why is this bad?

Value properties of the Global Object `NaN`, `Infinity`, `undefined`, `globalThis` as well as the strict mode restricted identifiers `eval` and `arguments` are considered to be restricted names in JavaScript. Defining them to mean something else can have unintended consequences and confuse others reading the code. For example, there’s nothing preventing you from writing:
javascript
`var undefined = "foo";`
Then any code used within the same scope would not get the global `undefined`, but rather the local version with a very different meaning.

## Examples

Examples of incorrect code for this rule:
javascript
`function NaN() {}
!function (Infinity) {};
var undefined = 5;
try {
} catch (eval) {}
const globalThis = "foo";`javascript
`import NaN from "foo";
import { undefined } from "bar";
class Infinity {}`
Examples of correct code for this rule:
javascript
`var Object;
function f(a, b) {}
// Exception: `undefined` may be shadowed if the variable is never assigned a value.
var undefined;`javascript
`import { undefined as undef } from "bar";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-shadow-restricted-names": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-shadow-restricted-names": "error",
},
});`bash
`oxlint --deny no-shadow-restricted-names`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_shadow_restricted_names.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-shadow-restricted-names)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.html)
- [oxc project](https://github.com/oxc-project/oxc)