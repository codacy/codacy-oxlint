# No Anonymous Default Export (import)

**Pattern ID:** `import_no-anonymous-default-export`
**Plugin:** `import`

## What it does

Reports if a module's default export is unnamed. This includes several types of unnamed data types; literals, object expressions, arrays, anonymous functions, arrow functions, and anonymous class declarations.

## Why is this bad?

Ensuring that default exports are named helps improve the grepability of the codebase by encouraging the re-use of the same identifier for the module's default export at its declaration site and at its import sites.

## Examples

Examples of incorrect code for this rule:
js
`export default [];
export default () => {};
export default class {};
export default function() {};
export default foo(bar);
export default 123;
export default {};
export default new Foo();
export default `foo`;
export default /^123/;`
Examples of correct code for this rule:
js
`const foo = 123;
export default foo;
export default function foo() {};
export default class MyClass {};
export default function foo() {};
export default foo(bar);
/* import/no-anonymous-default-export: ["error", { "allowLiteral": true }] */
export default 123;
/* import/no-anonymous-default-export: ["error", { "allowArray": true }] */
export default []
/* import/no-anonymous-default-export: ["error", { "allowArrowFunction": true }] */
export default () => {};
/* import/no-anonymous-default-export: ["error", { "allowAnonymousClass": true }] */
export default class {};
/* import/no-anonymous-default-export: ["error", { "allowAnonymousFunction": true }] */
export default function() {};
/* import/no-anonymous-default-export: ["error", { "allowObject": true }] */
export default {};
/* import/no-anonymous-default-export: ["error", { "allowNew": true }] */
export default new Foo();
/* import/no-anonymous-default-export: ["error", { "allowCallExpression": true }] */
export default foo(bar);`
By default, all types of anonymous default exports are forbidden, but any types can be selectively allowed by toggling them on in the options.

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-anonymous-default-export": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-anonymous-default-export": "error",
},
});`bash
`oxlint --deny import/no-anonymous-default-export --import-plugin`

## Version

This rule was added in v0.15.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_anonymous_default_export.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-anonymous-default-export)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-anonymous-default-export.html)
- [oxc project](https://github.com/oxc-project/oxc)