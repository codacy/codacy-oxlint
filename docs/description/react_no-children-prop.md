# No Children Prop (react)

**Pattern ID:** `react_no-children-prop`
**Plugin:** `react`

## What it does

Checks that children are not passed using a prop.

## Why is this bad?

Children should always be actual children, not passed in as a prop. When using JSX, the children should be nested between the opening and closing tags. When not using JSX, the children should be passed as additional arguments to `React.createElement`.

## Examples

Examples of incorrect code for this rule:
jsx
`<div children='Children' />
<MyComponent children={<AnotherComponent />} />
<MyComponent children={['Child 1', 'Child 2']} />
React.createElement("div", { children: 'Children' })`
Examples of correct code for this rule:
jsx
`<div>Children</div>
<MyComponent>Children</MyComponent>
<MyComponent>
<span>Child 1</span>
<span>Child 2</span>
</MyComponent>
React.createElement("div", {}, 'Children')
React.createElement("div", 'Child 1', 'Child 2')`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-children-prop": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-children-prop": "error",
},
});`bash
`oxlint --deny react/no-children-prop --react-plugin`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_children_prop.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-children-prop)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-children-prop.html)
- [oxc project](https://github.com/oxc-project/oxc)