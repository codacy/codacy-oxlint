# No Import Type Side Effects (typescript)

**Pattern ID:** `typescript_no-import-type-side-effects`
**Plugin:** `typescript`

## What it does

Enforce the use of top-level `import type` qualifier when an import only has specifiers with inline type qualifiers.

## Why is this bad?

The `--verbatimModuleSyntax` compiler option causes TypeScript to do simple and predictable transpilation on import declarations. Namely, it completely removes import declarations with a top-level type qualifier, and it removes any import specifiers with an inline type qualifier.
The latter behavior does have one potentially surprising effect in that in certain cases TS can leave behind a "side effect" import at runtime:
ts
`import { type A, type B } from "mod";`
is transpiled to
ts
`import {} from "mod";
// which is the same as
import "mod";`
For the rare case of needing to import for side effects, this may be desirable - but for most cases you will not want to leave behind an unnecessary side effect import.

## Examples

Examples of incorrect code for this rule:
ts
`import { type A } from "mod";
import { type A as AA } from "mod";
import { type A, type B } from "mod";
import { type A as AA, type B as BB } from "mod";`
Examples of correct code for this rule:
ts
`import type { A } from "mod";
import type { A as AA } from "mod";
import type { A, B } from "mod";
import type { A as AA, B as BB } from "mod";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-import-type-side-effects": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-import-type-side-effects": "error",
},
});`bash
`oxlint --deny typescript/no-import-type-side-effects`

## Version

This rule was added in v0.5.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_import_type_side_effects.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-import-type-side-effects/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-import-type-side-effects)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-import-type-side-effects.html)
- [oxc project](https://github.com/oxc-project/oxc)