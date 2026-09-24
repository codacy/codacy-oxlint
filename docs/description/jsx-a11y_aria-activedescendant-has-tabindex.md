# Aria Activedescendant Has Tabindex (jsx-a11y)

**Pattern ID:** `jsx-a11y_aria-activedescendant-has-tabindex`
**Plugin:** `jsx-a11y`

## What it does

Enforce elements with aria-activedescendant are tabbable.

## Why is this bad?

Elements with `aria-activedescendant` must be tabbable for users to navigate to them using keyboard input. Without proper tabindex, screen reader users cannot access the element through keyboard navigation, making the functionality inaccessible.

## Examples

Examples of incorrect code for this rule:
jsx
`const Bad = <div aria-activedescendant={someID} />;`
Examples of correct code for this rule:
jsx
`const Good = (
<>
<CustomComponent />
<CustomComponent aria-activedescendant={someID} />
<CustomComponent aria-activedescendant={someID} tabIndex={0} />
<CustomComponent aria-activedescendant={someID} tabIndex={-1} />
<div />
<input />
<div tabIndex={0} />
<div aria-activedescendant={someID} tabIndex={0} />
<div aria-activedescendant={someID} tabIndex="0" />
<div aria-activedescendant={someID} tabIndex={1} />
<div aria-activedescendant={someID} tabIndex={-1} />
<div aria-activedescendant={someID} tabIndex="-1" />
<input aria-activedescendant={someID} />
<input aria-activedescendant={someID} tabIndex={0} />
<input aria-activedescendant={someID} tabIndex={-1} />
</>
);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/aria-activedescendant-has-tabindex": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/aria-activedescendant-has-tabindex": "error",
},
});`bash
`oxlint --deny jsx-a11y/aria-activedescendant-has-tabindex --jsx-a11y-plugin`

## Version

This rule was added in v0.2.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/aria_activedescendant_has_tabindex.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Faria-activedescendant-has-tabindex)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-activedescendant-has-tabindex.html)
- [oxc project](https://github.com/oxc-project/oxc)