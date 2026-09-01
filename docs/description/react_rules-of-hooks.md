# Rules Of Hooks (react)

**Pattern ID:** `react_rules-of-hooks`
**Plugin:** `react`

## What it does

Enforces the Rules of Hooks, ensuring that React Hooks are only called in valid contexts and in the correct order.

## Why is this bad?

React Hooks must follow specific rules to ensure they work correctly:
- Only call Hooks at the top level (never inside loops, conditions, or nested functions)
- Only call Hooks from React function components or custom Hooks
- Hooks must be called in the same order every time a component renders
Breaking these rules can lead to bugs where state gets corrupted or component behavior becomes unpredictable.

## Examples

Examples of incorrect code for this rule:
javascript
`// Don't call Hooks inside loops, conditions, or nested functions
function BadComponent() {
if (condition) {
const [state, setState] = useState(); // ❌ Hook in condition
}
for (let i = 0; i < 10; i++) {
useEffect(() => {}); // ❌ Hook in loop
}
}
// Don't call Hooks from regular JavaScript functions
function regularFunction() {
const [state, setState] = useState(); // ❌ Hook in regular function
}`
Examples of correct code for this rule:
javascript
`// ✅ Call Hooks at the top level of a React component
function GoodComponent() {
const [state, setState] = useState();
useEffect(() => {
// Effect logic here
});
return <div>{state}</div>;
}
// ✅ Call Hooks from custom Hooks
function useCustomHook() {
const [state, setState] = useState();
return state;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/rules-of-hooks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/rules-of-hooks": "error",
},
});`bash
`oxlint --deny react/rules-of-hooks --react-plugin`

## Version

This rule was added in v0.3.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/rules_of_hooks.rs)
- [Upstream rule docs](https://react.dev/reference/rules/rules-of-hooks)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Frules-of-hooks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/rules-of-hooks.html)
- [oxc project](https://github.com/oxc-project/oxc)