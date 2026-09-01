# No Restricted Matchers (jest)

**Pattern ID:** `jest_no-restricted-matchers`
**Plugin:** `jest`

## What it does

Ban specific matchers & modifiers from being used, and can suggest alternatives.

## Why is this bad?

Some matchers or modifiers might be discouraged in your codebase for various reasons: they might be deprecated, cause confusion, have performance implications, or there might be better alternatives available. This rule allows you to enforce consistent testing patterns by restricting certain Jest matchers and providing guidance on preferred alternatives.

## Examples

Bans are expressed in the form of a map, with the value being either a string message to be shown, or null if only the default rule message should be used. Bans are checked against the start of the expect chain - this means that to ban a specific matcher entirely you must specify all six permutations, but allows you to ban modifiers as well. By default, this map is empty, meaning no matchers or modifiers are banned.
Example configuration:
json
`{
"jest/no-restricted-matchers": [
"error",
{
"toBeFalsy": null,
"resolves": "Use `expect(await promise)` instead.",
"toHaveBeenCalledWith": null,
"not.toHaveBeenCalledWith": null,
"resolves.toHaveBeenCalledWith": null,
"rejects.toHaveBeenCalledWith": null,
"resolves.not.toHaveBeenCalledWith": null,
"rejects.not.toHaveBeenCalledWith": null
}
]
}`
Examples of incorrect code for this rule with the above configuration:
javascript
`it("is false", () => {
// if this has a modifier (i.e. `not.toBeFalsy`), it would be considered fine
expect(a).toBeFalsy();
});
it("resolves", async () => {
// all uses of this modifier are disallowed, regardless of matcher
await expect(myPromise()).resolves.toBe(true);
});
describe("when an error happens", () => {
it("does not upload the file", async () => {
// all uses of this matcher are disallowed
expect(uploadFileMock).not.toHaveBeenCalledWith("file.name");
});
});`

## Configuration

This rule accepts a configuration object with the following properties:
type: `object`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-restricted-matchers": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-restricted-matchers": "error",
},
});`bash
`oxlint --deny jest/no-restricted-matchers --jest-plugin`

## Version

This rule was added in v0.2.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_restricted_matchers.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-restricted-matchers)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-restricted-matchers.html)
- [oxc project](https://github.com/oxc-project/oxc)