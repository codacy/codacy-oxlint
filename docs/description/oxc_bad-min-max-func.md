# Bad Min Max Func (oxc)

**Pattern ID:** `oxc_bad-min-max-func`
**Plugin:** `oxc`

## What it does

Checks whether the clamp function `Math.min(Math.max(x, y), z)` always evaluates to a constant result because the arguments are in the wrong order.

## Why is this bad?

The `Math.min(Math.max(x, y), z)` function is used to clamp a value between two other values. If the arguments are in the wrong order, the function will always evaluate to a constant result.

## Examples

Examples of incorrect code for this rule:
javascript
`Math.min(Math.max(100, x), 0);
Math.max(1000, Math.min(0, z));`
Examples of correct code for this rule:
javascript
`Math.max(0, Math.min(100, x));
Math.min(1000, Math.max(0, z));`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/bad-min-max-func": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/bad-min-max-func": "error",
},
});`bash
`oxlint --deny oxc/bad-min-max-func`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/bad_min_max_func.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fbad-min-max-func)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-min-max-func.html)
- [oxc project](https://github.com/oxc-project/oxc)