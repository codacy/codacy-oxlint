# No Unnecessary Template Expression (typescript)

**Pattern ID:** `typescript_no-unnecessary-template-expression`
**Plugin:** `typescript`

## What it does

Disallows unnecessary template expressions (interpolations) that can be simplified.

## Why is this bad?

Template literals with substitution expressions that are unnecessary add complexity without providing any benefit. Static string literal expressions or expressions that are already strings can be simplified.
Note: This rule does not flag template literals without substitution expressions. For example, ``hello`` is allowed even though it could be written as `'hello'`.

## Examples

Examples of incorrect code for this rule:
ts
`// Static values can be incorporated into the surrounding template
const ab1 = `${"a"}${"b"}`;
const ab2 = `a${"b"}`;
const stringWithNumber = `${"1 + 1 = "}${2}`;
const stringWithBoolean = `${"true is "}${true}`;
// Expressions that are already strings can be rewritten without a template
const text = "a";
const wrappedText = `${text}`;
declare const intersectionWithString: string & { _brand: "test-brand" };
const wrappedIntersection = `${intersectionWithString}`;`
Examples of correct code for this rule:
ts
`// Static values incorporated into the template
const ab1 = `ab`;
// Template with non-trivial interpolation
const name = "world";
const greeting = `Hello ${name}!`;
// Template with expression
const result = `Result: ${1 + 2}`;
// Simple strings don't need templates
const text = "a";
const wrappedText = text;
// Multi-line strings are fine
const multiline = `
Hello
world
`;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-unnecessary-template-expression": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unnecessary-template-expression": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unnecessary-template-expression`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unnecessary_template_expression.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unnecessary-template-expression/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unnecessary_template_expression/no_unnecessary_template_expression.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-template-expression.html)
- [oxc project](https://github.com/oxc-project/oxc)