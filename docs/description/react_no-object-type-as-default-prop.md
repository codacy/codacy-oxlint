# No Object Type As Default Prop (react)

**Pattern ID:** `react_no-object-type-as-default-prop`
**Plugin:** `react`

## What it does

Disallows using object, array, function, class, regex, JSX, or `new`-constructed values as default values for destructured React component props.

## Why is this bad?

Default values of destructured parameters are evaluated on every render. When the default is an object literal, array literal, function expression, class expression, regular expression, `new` expression, or JSX element, a new reference is created on every render. Passing that fresh reference to child components or hook dependency arrays defeats memoization and causes unnecessary re-renders.
Note: you do not need to enable this rule when using React Compiler, since React Compiler memoizes default values automatically.

## Examples

Examples of incorrect code for this rule:
jsx
`function Foo({ items = [] }) {
return <List items={items} />;
}
const Bar = ({ config = {} }) => <div data-config={config} />;
function Baz({ onClick = () => {} }) {
return <button onClick={onClick} />;
}`
Examples of correct code for this rule:
jsx
`const DEFAULT_ITEMS = [];
function Foo({ items = DEFAULT_ITEMS }) {
return <List items={items} />;
}
const Bar = ({ name = "world" }) => <div>{name}</div>;
function Baz({ onClick }) {
return <button onClick={onClick} />;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-object-type-as-default-prop": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-object-type-as-default-prop": "error",
},
});`bash
`oxlint --deny react/no-object-type-as-default-prop --react-plugin`

## Version

This rule was added in v1.66.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_object_type_as_default_prop.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-object-type-as-default-prop)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-object-type-as-default-prop.html)
- [oxc project](https://github.com/oxc-project/oxc)