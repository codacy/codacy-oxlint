# No Deriving State In Effects (react)

**Pattern ID:** `react_no-deriving-state-in-effects`
**Plugin:** `react`

## What it does

Disallows deriving values from state inside an effect and storing them back into state; derived values should be computed during render instead.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/no-deriving-state-in-effects`.

## Why is this bad?

Deriving state in effects causes a second render pass per update and lets the derived copy fall out of sync with its source.

## Examples

Examples of incorrect code for this rule:
jsx
`import { useEffect, useState } from "react";
function Component() {
const [firstName] = useState("Taylor");
const [lastName] = useState("Swift");
const [fullName, setFullName] = useState("");
useEffect(() => {
setFullName(firstName + " " + lastName);
}, [firstName, lastName]);
return <div>{fullName}</div>;
}`
Examples of correct code for this rule:
jsx
`function Component({ firstName, lastName }) {
const fullName = firstName + " " + lastName;
return <div>{fullName}</div>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-deriving-state-in-effects": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-deriving-state-in-effects": "error",
},
});`bash
`oxlint --deny react/no-deriving-state-in-effects --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_deriving_state_in_effects.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deriving-state-in-effects.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-deriving-state-in-effects)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-deriving-state-in-effects.html)
- [oxc project](https://github.com/oxc-project/oxc)