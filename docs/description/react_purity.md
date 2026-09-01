# Purity (react)

**Pattern ID:** `react_purity`
**Plugin:** `react`

## What it does

Validates that components and hooks are pure by checking that they do not call known-impure functions such as `Math.random()`, `Date.now()`, or `performance.now()` during render.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/purity`.

## Why is this bad?

Impure renders return different output for the same props and state, breaking memoization, concurrent rendering, and replayability.

## Examples

Examples of incorrect code for this rule:
jsx
`function Component() {
const rand = Math.random();
return <div>{rand}</div>;
}`
Examples of correct code for this rule:
jsx
`import { useState } from "react";
function Component() {
const [rand, setRand] = useState(0);
return <button onClick={() => setRand(Math.random())}>{rand}</button>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/purity": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/purity": "error",
},
});`bash
`oxlint --deny react/purity --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/purity.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/purity.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fpurity)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/purity.html)
- [oxc project](https://github.com/oxc-project/oxc)