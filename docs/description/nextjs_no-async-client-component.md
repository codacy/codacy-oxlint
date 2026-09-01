# No Async Client Component (nextjs)

**Pattern ID:** `nextjs_no-async-client-component`
**Plugin:** `nextjs`

## What it does

Prevents the use of async functions for client components in Next.js applications. This rule checks for any async function that:
- Is marked with "use client" directive
- Has a name starting with an uppercase letter (indicating it's a component)
- Is either exported as default or assigned to a variable

## Why is this bad?

Using async functions for client components can cause hydration mismatches between server and client, can break component rendering lifecycle, and can lead to unexpected behavior with React's concurrent features.

## Examples

Examples of incorrect code for this rule:
javascript
`"use client"
// Async component with default export
export default async function MyComponent() {
return <></>
}
// Async component with named export
async function MyComponent() {
return <></>
}
export default MyComponent
// Async arrow function component
const MyComponent = async () => {
return <></>
}
export default MyComponent`
Examples of correct code for this rule:
javascript
`"use client"
// Regular synchronous component
export default function MyComponent() {
return <></>
}
// Handling async operations in effects
export default function MyComponent() {
useEffect(() => {
async function fetchData() {
// async operations here
}
fetchData();
}, []);
return <></>
}
// Async operations in event handlers
export default function MyComponent() {
const handleClick = async () => {
// async operations here
}
return <button onClick={handleClick}>Click me</button>
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-async-client-component": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-async-client-component": "error",
},
});`bash
`oxlint --deny nextjs/no-async-client-component --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_async_client_component.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-async-client-component)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-async-client-component)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-async-client-component.html)
- [oxc project](https://github.com/oxc-project/oxc)