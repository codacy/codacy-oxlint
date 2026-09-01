# No Await In Loop (eslint)

**Pattern ID:** `eslint_no-await-in-loop`
**Plugin:** `eslint`

## What it does

This rule disallows the use of `await` within loop bodies. (for, for-in, for-of, while, do-while).

## Why is this bad?

It potentially indicates that the async operations are not being effectively parallelized. Instead, they are being run in series, which can lead to poorer performance.

## Examples

Examples of incorrect code for this rule:
javascript
`async function bad() {
for (const user of users) {
const userRecord = await getUserRecord(user);
}
}`
Examples of correct code for this rule:
javascript
`async function good() {
await Promise.all(users.map((user) => getUserRecord(user)));
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-await-in-loop": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-await-in-loop": "error",
},
});`bash
`oxlint --deny no-await-in-loop`

## Version

This rule was added in v0.3.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_await_in_loop.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-await-in-loop)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-await-in-loop)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-await-in-loop.html)
- [oxc project](https://github.com/oxc-project/oxc)