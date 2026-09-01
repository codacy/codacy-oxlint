# Prefer Return This Type (typescript)

**Pattern ID:** `typescript_prefer-return-this-type`
**Plugin:** `typescript`

## What it does

This rule enforces using `this` types for return types when possible.

## Why is this bad?

Classes that have methods which return the instance itself should use `this` as the return type instead of the class name. This provides better type safety for inheritance, as the return type will be the actual subclass type rather than the base class type.

## Examples

Examples of incorrect code for this rule:
ts
`class Builder {
private value: string = "";
setValue(value: string): Builder {
// Should return 'this'
this.value = value;
return this;
}
build(): string {
return this.value;
}
}
class FluentAPI {
method1(): FluentAPI {
// Should return 'this'
return this;
}
method2(): FluentAPI {
// Should return 'this'
return this;
}
}`
Examples of correct code for this rule:
ts
`class Builder {
private value: string = "";
setValue(value: string): this {
this.value = value;
return this;
}
build(): string {
return this.value;
}
}
class FluentAPI {
method1(): this {
return this;
}
method2(): this {
return this;
}
}
// Now inheritance works correctly
class ExtendedBuilder extends Builder {
setPrefix(prefix: string): this {
// The return type is 'this' (ExtendedBuilder), not Builder
return this.setValue(prefix + this.getValue());
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/prefer-return-this-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/prefer-return-this-type": "error",
},
});`bash
`oxlint --type-aware --deny typescript/prefer-return-this-type`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_return_this_type.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-return-this-type/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/prefer_return_this_type/prefer_return_this_type.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-return-this-type.html)
- [oxc project](https://github.com/oxc-project/oxc)