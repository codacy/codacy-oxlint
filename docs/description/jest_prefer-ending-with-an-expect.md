# Prefer Ending With An Expect (jest)

**Pattern ID:** `jest_prefer-ending-with-an-expect`
**Plugin:** `jest`

## What it does

Enforces that test blocks end with an assertion (`expect` or a configured assertion function).

## Why is this bad?

A test that doesn't end with an assertion may be performing side effects or setup after its last check, which makes the test harder to understand and can hide failures. Ending with an assertion ensures the test's final action is verifying behavior.

## Examples

Examples of incorrect code for this rule with default values:
js
`it("lets me change the selected option", () => {
const container = render(MySelect, {
props: { options: [1, 2, 3], selected: 1 },
});
expect(container).toBeDefined();
expect(container.toHTML()).toContain('<option value="1" selected>');
container.setProp("selected", 2);
});`
Examples of correct code for this rule with defaults values:
js
`it("lets me change the selected option", () => {
const container = render(MySelect, {
props: { options: [1, 2, 3], selected: 1 },
});
expect(container).toBeDefined();
expect(container.toHTML()).toContain('<option value="1" selected>');
container.setProp("selected", 2);
expect(container.toHTML()).not.toContain('<option value="1" selected>');
expect(container.toHTML()).toContain('<option value="2" selected>');
});`
Examples of incorrect code for this rule with `{ "assertFunctionNames": ["expect"] }`:
js
`import { expectSaga } from "redux-saga-test-plan";
import { addSaga } from "../src/sagas";
test("returns sum", () => {
expectSaga(addSaga, 1, 1).returns(2).run();
});`
Examples of correct code for this rule with `{ "assertFunctionNames": ["expect"] }`:
js
`import { expectSaga } from "redux-saga-test-plan";
import { addSaga } from "../src/sagas";
test("returns sum", () => {
expectSaga(addSaga, 1, 1).returns(2).run();
});`
Examples of correct code for this rule with `{ "additionalTestBlockFunctions": ["each.test"] }`:
js
`each([
[2, 3],
[1, 3],
]).test("the selection can change from %d to %d", (firstSelection, secondSelection) => {
const container = render(MySelect, {
props: { options: [1, 2, 3], selected: firstSelection },
});
expect(container).toBeDefined();
expect(container.toHTML()).toContain(`<option value="${firstSelection}" selected>`);
container.setProp("selected", secondSelection);
expect(container.toHTML()).not.toContain(`<option value="${firstSelection}" selected>`);
expect(container.toHTML()).toContain(`<option value="${secondSelection}" selected>`);
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-ending-with-an-expect": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-ending-with-an-expect": "error",
},
});`bash
`oxlint --deny jest/prefer-ending-with-an-expect --jest-plugin`

## Version

This rule was added in v1.60.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_ending_with_an_expect.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-ending-with-an-expect.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-ending-with-an-expect)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-ending-with-an-expect.html)
- [oxc project](https://github.com/oxc-project/oxc)