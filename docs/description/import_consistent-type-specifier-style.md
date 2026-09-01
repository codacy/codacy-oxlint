# Consistent Type Specifier Style (import)

**Pattern ID:** `import_consistent-type-specifier-style`
**Plugin:** `import`

## What it does

Enforces or bans the use of inline type-only markers for named imports.

## Why is this bad?

Mixing top-level `import type { Foo } from 'foo'` with inline `{ type Bar }` forces readers to mentally switch contexts when scanning your imports. Enforcing one style makes it immediately obvious which imports are types and which are value imports.

## Examples

Examples of incorrect code for the default `prefer-top-level` option:
typescript
`import { type Foo } from "Foo";
import Foo, { type Bar } from "Foo";`
Examples of correct code for the default option:
typescript
`import type { Foo } from 'Foo';
import type Foo, { Bar } from 'Foo';`
Examples of incorrect code for the `prefer-top-level-if-only-type-imports` option:
typescript
`import { type Foo } from "Foo";
import { type Foo, type Bar } from "Foo";`
Examples of correct code for the `prefer-top-level-if-only-type-imports` option:
typescript
`import type { Foo } from 'Foo';
import { type Foo, someValue } from 'Foo';
import type Foo, { Bar } from 'Foo';`
Examples of incorrect code for the `prefer-inline` option:
typescript
`import type { Foo } from 'Foo';
import type Foo, { Bar } from 'Foo';`
Examples of correct code for the `prefer-inline` option:
typescript
`import { type Foo } from "Foo";
import Foo, { type Bar } from "Foo";`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/consistent-type-specifier-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/consistent-type-specifier-style": "error",
},
});`bash
`oxlint --deny import/consistent-type-specifier-style --import-plugin`

## Version

This rule was added in v0.16.11.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/consistent_type_specifier_style.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fconsistent-type-specifier-style)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/consistent-type-specifier-style.html)
- [oxc project](https://github.com/oxc-project/oxc)