# Todo (react)

**Pattern ID:** `react_todo`
**Plugin:** `react`

## What it does

Reports code that React Compiler cannot yet analyze because it uses features the compiler has not implemented. These are skipped optimizations (bail-outs), not rule violations.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/todo`.

## Why is this bad?

The affected component or hook is left unoptimized. Enable this rule only when you want visibility into what the compiler skips; upstream ships it as an off-by-default hint.

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/todo": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/todo": "error",
},
});`bash
`oxlint --deny react/todo --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/todo.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/todo.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Ftodo)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/todo.html)
- [oxc project](https://github.com/oxc-project/oxc)