# Jsx No Constructed Context Values (react)

**Pattern ID:** `react_jsx-no-constructed-context-values`
**Plugin:** `react`

## What it does

Disallows JSX context provider values that cause needless re-renders.

## Why is this bad?

React Context and all its child nodes and Consumers are re-rendered whenever the value prop changes. Because each JavaScript object carries its own identity, things like object expressions (`{foo: 'bar'}`) or function expressions get a new identity on every render. This makes the context think it has gotten a new object and can cause needless re-renders and unintended consequences.
This can be a large performance hit because not only will it cause the context providers and consumers to re-render with all the elements in its subtree, the processing for the tree scan React does to render the provider and find consumers is also wasted.

## Examples

Examples of incorrect code for this rule:
jsx
`return <SomeContext.Provider value={{ foo: "bar" }}>...</SomeContext.Provider>;`jsx
`function Component() {
function foo() {}
return <MyContext.Provider value={foo} />;
}`
Examples of correct code for this rule:
jsx
`const foo = useMemo(() => ({ foo: "bar" }), []);
return <SomeContext.Provider value={foo}>...</SomeContext.Provider>;`jsx
`const MyContext = createContext();
const Component = () => <MyContext.Provider value="Some string" />;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-no-constructed-context-values": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-no-constructed-context-values": "error",
},
});`bash
`oxlint --deny react/jsx-no-constructed-context-values --react-plugin`

## Version

This rule was added in v1.48.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_no_constructed_context_values.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-no-constructed-context-values)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-constructed-context-values.html)
- [oxc project](https://github.com/oxc-project/oxc)