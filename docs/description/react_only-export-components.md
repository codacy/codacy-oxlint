# Only Export Components (react)

**Pattern ID:** `react_only-export-components`
**Plugin:** `react`

## What it does

Ensures that modules only export React components (and related HMR-safe items) so that Fast Refresh (a.k.a. hot reloading) can safely preserve component state. Concretely, it validates the shape of your module’s exports and common entrypoints (e.g. `createRoot(...).render(<App />)`) to match what integrations like `react-refresh` expect.
This rule is based on the rule from `eslint-plugin-react-refresh`.

## Why is this bad?

Fast Refresh can only reliably retain state if a module exports components and avoids patterns that confuse the refresh runtime. Problematic patterns (like `export *`, anonymous default functions, exporting arrays of JSX, or mixing non-component exports in unsupported ways) can cause:
- Components to remount and lose state on edit
- Missed updates (no refresh) or overly broad reloads
- Fragile HMR behavior that differs between bundlers
By enforcing predictable exports, edits stay fast and stateful during development.

## Examples

Examples of incorrect code for this rule:
jsx
`// 1) Mixing util exports with components in unsupported ways
export const foo = () => {}; // util, not a component
export const Bar = () => <></>; // component`jsx
`// 2) Anonymous default export (name is required)
export default function () {}`jsx
`// 3) Re-exporting everything hides what’s exported
export * from "./foo";`jsx
`// 4) Exporting JSX collections makes components non-discoverable
const Tab = () => null;
export const tabs = [<Tab />, <Tab />];`jsx
`// 5) Bootstrapping a root within the same module that defines components
const App = () => null;
createRoot(document.getElementById("root")).render(<App />);`
Examples of correct code for this rule:
jsx
`// Named or default component exports are fine
export default function Foo() {
return null;
}`jsx
`// Utilities may coexist if allowed by options or naming conventions
const foo = () => {};
export const Bar = () => null;`jsx
`// Entrypoint files may render an imported component
import { App } from "./App";
createRoot(document.getElementById("root")).render(<App />);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/only-export-components": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/only-export-components": "error",
},
});`bash
`oxlint --deny react/only-export-components --react-plugin`

## Version

This rule was added in v1.23.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/only_export_components.rs)
- [Upstream rule docs](https://github.com/ArnaudBarre/eslint-plugin-react-refresh/blob/main/docs/only-export-components.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fonly-export-components)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/only-export-components.html)
- [oxc project](https://github.com/oxc-project/oxc)