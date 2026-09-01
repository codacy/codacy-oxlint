# Rule Suppression (react)

**Pattern ID:** `react_rule-suppression`
**Plugin:** `react`

## What it does

Reports ESLint/Oxlint suppressions of React rules (for example `eslint-disable-next-line react-hooks/exhaustive-deps`) inside a component or hook. The React Compiler skips functions containing such suppressions, since the suppressed violation may make compilation unsafe.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/rule-suppression`.

## Why is this bad?

Suppressing a React rule hides a violation the compiler must assume is real; the whole function loses optimization until the suppression is removed and the underlying error fixed.

## Examples

Examples of incorrect code for this rule:
jsx
`function Component({ value }) {
// eslint-disable-next-line react-hooks/exhaustive-deps
const doubled = value * 2;
return <div>{doubled}</div>;
}`
Examples of correct code for this rule:
jsx
`function Component({ value }) {
const doubled = value * 2;
return <div>{doubled}</div>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/rule-suppression": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/rule-suppression": "error",
},
});`bash
`oxlint --deny react/rule-suppression --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/rule_suppression.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/rule-suppression.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Frule-suppression)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/rule-suppression.html)
- [oxc project](https://github.com/oxc-project/oxc)