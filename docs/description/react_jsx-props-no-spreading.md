# Jsx Props No Spreading (react)

**Pattern ID:** `react_jsx-props-no-spreading`
**Plugin:** `react`

## What it does

Disallow JSX prop spreading.

## Why is this bad?

Enforces that there is no spreading for any JSX attribute. This enhances readability of code by being more explicit about what props are received by the component. It is also good for maintainability by avoiding passing unintentional extra props and allowing react to emit warnings when invalid HTML props are passed to HTML elements.

## Examples

Examples of incorrect code for this rule:
jsx
`<App {...props} />
<MyCustomComponent {...props} some_other_prop={some_other_prop} />
<img {...props} />`
Examples of correct code for this rule:
jsx
`const {src, alt} = props;
const {one_prop, two_prop} = otherProps;
<MyCustomComponent one_prop={one_prop} two_prop={two_prop} />
<img src={src} alt={alt} />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-props-no-spreading": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-props-no-spreading": "error",
},
});`bash
`oxlint --deny react/jsx-props-no-spreading --react-plugin`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_props_no_spreading.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-props-no-spreading)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spreading.html)
- [oxc project](https://github.com/oxc-project/oxc)