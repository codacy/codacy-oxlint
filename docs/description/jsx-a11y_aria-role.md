# Aria Role (jsx-a11y)

**Pattern ID:** `jsx-a11y_aria-role`
**Plugin:** `jsx-a11y`

## What it does

Elements with ARIA roles must use a valid, non-abstract ARIA role. A reference to role definitions can be found at [WAI-ARIA](https://www.w3.org/TR/wai-aria/#role_definitions) site.

## Why is this bad?

The intent of this Success Criterion is to ensure that Assistive Technologies (AT) can gather information about, activate (or set) and keep up to date on the status of user interface controls in the content(such as screen readers, screen magnifiers, and speech recognition software, used by people with disabilities).
When standard controls from accessible technologies are used, this process is straightforward. If the user interface elements are used according to specification the conditions of this provision will be met.
If custom controls are created, however, or interface elements are programmed (in code or script) to have a different role and/or function than usual, then additional measures need to be taken to ensure that the controls provide important information to assistive technologies and allow themselves to be controlled by assistive technologies. A particularly important state of a user interface control is whether or not it has focus. The focus state of a control can be programmatically determined, and notifications about change of focus are sent to user agents and assistive technology. Other examples of user interface control state are whether or not a checkbox or radio button has been selected, or whether or not a collapsible tree or list node is expanded or collapsed.

## Examples

Examples of incorrect code for this rule:
jsx
`<div role="datepicker"></div> <!-- Bad: "datepicker" is not an ARIA role -->
<div role="range"></div>      <!-- Bad: "range" is an _abstract_ ARIA role -->
<div role=""></div>           <!-- Bad: An empty ARIA role is not allowed -->
<Foo role={role}></Foo>       <!-- Bad: ignoreNonDOM is set to false or not set -->`
Examples of correct code for this rule:
jsx
`<div role="button"></div>     <!-- Good: "button" is a valid ARIA role -->
<div role={role}></div>       <!-- Good: role is a variable & cannot be determined until runtime. -->
<div></div>                   <!-- Good: No ARIA role -->
<Foo role={role}></Foo>       <!-- Good: ignoreNonDOM is set to true -->`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/aria-role": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/aria-role": "error",
},
});`bash
`oxlint --deny jsx-a11y/aria-role --jsx-a11y-plugin`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/aria_role.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Faria-role)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-role.html)
- [oxc project](https://github.com/oxc-project/oxc)