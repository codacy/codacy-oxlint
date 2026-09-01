# No Array Index Key (react)

**Pattern ID:** `react_no-array-index-key`
**Plugin:** `react`

## What it does

Warn if an element uses an Array index in its key.

## Why is this bad?

It's a bad idea to use the array index since it doesn't uniquely identify your elements. In cases where the array is sorted or an element is added to the beginning of the array, the index will be changed even though the element representing that index may be the same. This results in unnecessary renders.

## Examples

Examples of incorrect code for this rule:
jsx
`things.map((thing, index) => <Hello key={index} />);`
Examples of correct code for this rule:
jsx
`things.map((thing, index) => <Hello key={thing.id} />);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-array-index-key": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-array-index-key": "error",
},
});`bash
`oxlint --deny react/no-array-index-key --react-plugin`

## Version

This rule was added in v0.13.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_array_index_key.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-array-index-key)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-array-index-key.html)
- [oxc project](https://github.com/oxc-project/oxc)