# No Self Assign (eslint)

**Pattern ID:** `eslint_no-self-assign`
**Plugin:** `eslint`

## What it does

Disallow assignments where both sides are exactly the same.

## Why is this bad?

Self assignments have no effect, so probably those are an error due to incomplete refactoring. Those indicate that what you should do is still remaining.

## Examples

Examples of incorrect code for this rule:
javascript
`foo = foo;
[a, b] = [a, b];
[a, ...b] = [x, ...b];
({ a, b } = { a, x });
foo &&= foo;
foo ||= foo;
foo ??= foo;`javascript
`obj.a = obj.a;
obj.a.b = obj.a.b;
obj["a"] = obj["a"];
obj[a] = obj[a];`
Examples of correct code for this rule:
javascript
`foo = bar;
[a, b] = [b, a];
// This pattern is warned by the `no-use-before-define` rule.
let foo = foo;
// The default values have an effect.
[foo = 1] = [foo];
// This ignores if there is a function call.
obj.a().b = obj.a().b;
a().b = a().b;
// `&=` and `|=` have an effect on non-integers.
foo &= foo;
foo |= foo;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-self-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-self-assign": "error",
},
});`bash
`oxlint --deny no-self-assign`

## Version

This rule was added in v0.0.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_self_assign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-self-assign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-self-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)