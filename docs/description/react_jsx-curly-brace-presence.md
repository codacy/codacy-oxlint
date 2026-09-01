# Jsx Curly Brace Presence (react)

**Pattern ID:** `react_jsx-curly-brace-presence`
**Plugin:** `react`

## What it does

Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
This rule allows you to enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
For situations where JSX expressions are unnecessary, please refer to [the React doc](https://react.dev/learn/writing-markup-with-jsx) and [this page about JSX gotchas](https://github.com/facebook/react/blob/v15.4.0-rc.3/docs/docs/02.3-jsx-gotchas.md#html-entities).

## Why is this bad?

Using different styles for your JSX code can make it harder to read and less consistent.
Code consistency improves readability. By enforcing or disallowing curly braces in JSX props and/or children, this rule helps maintain consistent patterns across your application.

## Examples

jsonc
`{
"rules": {
"react/jsx-curly-brace-presence": ["error", { "props": <string>, "children": <string>, "propElementValues": <string> }]
}
}`
or alternatively
jsonc
`{
"rules": {
"react/jsx-curly-brace-presence": ["error", "always"], // or "never" or "ignore"
},
}`

## References

- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.html)
- [oxc project](https://github.com/oxc-project/oxc)