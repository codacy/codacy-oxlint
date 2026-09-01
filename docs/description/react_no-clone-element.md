# No Clone Element (react)

**Pattern ID:** `react_no-clone-element`
**Plugin:** `react`

## What it does

Prevents the usage of `React.cloneElement`, which is considered an anti-pattern in React.

## Why is this bad?

It is recommended not to use `React.cloneElement` because it can lead to code that is harder to follow and understand. It is generally uncommon and fragile, and there are various alternatives recommended by [the React documentation](https://react.dev/reference/react/cloneElement#alternatives).
Note that this rule is based on `@eslint-react/no-clone-element` from `@eslint-react`, not a rule from `eslint-plugin-react`.

## Examples

Examples of incorrect code for this rule:
jsx
`import { cloneElement } from "react";
function List({ children }) {
const [selectedIndex, setSelectedIndex] = useState(0);
return (
<div className="List">
{Children.map(children, (child, index) =>
cloneElement(child, {
isHighlighted: index === selectedIndex,
}),
)}
</div>
);
}`
Examples of correct code for this rule:
jsx
`// Using a map with a `renderItem` function prop instead.
function List({ items, renderItem }) {
const [selectedIndex, setSelectedIndex] = useState(0);
return (
<div className="List">
{items.map((item, index) => {
const isHighlighted = index === selectedIndex;
return renderItem(item, isHighlighted);
})}
</div>
);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-clone-element": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-clone-element": "error",
},
});`bash
`oxlint --deny react/no-clone-element --react-plugin`

## Version

This rule was added in v1.53.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_clone_element.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-clone-element.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-clone-element)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-clone-element.html)
- [oxc project](https://github.com/oxc-project/oxc)