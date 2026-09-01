# Ban Ts Comment (typescript)

**Pattern ID:** `typescript_ban-ts-comment`
**Plugin:** `typescript`

## What it does

This rule lets you set which directive comments you want to allow in your codebase.

## Why is this bad?

Using TypeScript directives to suppress TypeScript compiler errors reduces the effectiveness of TypeScript overall.

## Examples

Examples of incorrect code for this rule:
ts
`if (false) {
// @ts-ignore: Unreachable code error
console.log("hello");
}`

## Configuration

This rule allows you to specify how different TypeScript directive comments should be handled.
For each directive (`@ts-expect-error`, `@ts-ignore`, `@ts-nocheck`, `@ts-check`), you can choose one of the following options:
- `true`: Disallow the directive entirely, preventing its use in the entire codebase.
- `false`: Allow the directive without any restrictions.
- `"allow-with-description"`: Allow the directive only if it is followed by a description explaining its use. The description must meet the minimum length specified by `minimumDescriptionLength`.
- `{ "descriptionFormat": "<regex>" }`: Allow the directive only if the description matches the specified regex pattern.
For example:
json
`{
"ts-expect-error": "allow-with-description",
"ts-ignore": true,
"ts-nocheck": { "descriptionFormat": "^: TS\\d+ because .+$" },
"ts-check": false,
"minimumDescriptionLength": 3
}`
This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/ban-ts-comment": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/ban-ts-comment": "error",
},
});`bash
`oxlint --deny typescript/ban-ts-comment`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/ban_ts_comment.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/ban-ts-comment/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fban-ts-comment)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-ts-comment.html)
- [oxc project](https://github.com/oxc-project/oxc)