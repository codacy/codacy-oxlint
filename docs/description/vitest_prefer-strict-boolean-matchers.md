# Prefer Strict Boolean Matchers (vitest)

**Pattern ID:** `vitest_prefer-strict-boolean-matchers`
**Plugin:** `vitest`

## What it does

Enforce using `toBe(true)` and `toBe(false)` over matchers that coerce types to boolean.

## Why is this bad?

Truthy/falsy matchers coerce values to boolean and can hide type mistakes. Strict boolean assertions make intent explicit and avoid accidental coercion.

## Examples

Examples of incorrect code for this rule:
javascript
`expect(foo).toBeTruthy();
expectTypeOf(foo).toBeTruthy();
expect(foo).toBeFalsy();
expectTypeOf(foo).toBeFalsy();`
Examples of correct code for this rule:
javascript
`expect(foo).toBe(true);
expectTypeOf(foo).toBe(true);
expect(foo).toBe(false);
expectTypeOf(foo).toBe(false);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-strict-boolean-matchers": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-strict-boolean-matchers": "error",
},
});`bash
`oxlint --deny vitest/prefer-strict-boolean-matchers --vitest-plugin`

## Version

This rule was added in v1.57.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_strict_boolean_matchers.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-boolean-matchers.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-strict-boolean-matchers)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-strict-boolean-matchers.html)
- [oxc project](https://github.com/oxc-project/oxc)