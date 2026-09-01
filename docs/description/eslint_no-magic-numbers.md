# No Magic Numbers (eslint)

**Pattern ID:** `eslint_no-magic-numbers`
**Plugin:** `eslint`

## What it does

This rule aims to make code more readable and refactoring easier by ensuring that special numbers are declared as constants to make their meaning explicit. The current implementation does not support BigInt numbers inside array indexes.

## Why is this bad?

‘Magic numbers’ are numbers that occur multiple times in code without an explicit meaning. They should preferably be replaced by named constants.

## Examples

Examples of incorrect code for this rule:
javascript
`var dutyFreePrice = 100;
var finalPrice = dutyFreePrice + dutyFreePrice * 0.25;`
Examples of correct code for this rule with option "ignore":
javascript
`/*typescript no-magic-numbers: ["error", { "ignore": [1] }]*/
var data = ["foo", "bar", "baz"];
var dataLast = data.length && data[data.length - 1];`
Examples of correct code for this rule with option "ignoreArrayIndexes":
javascript
`/*typescript no-magic-numbers: ["error", { "ignoreArrayIndexes": true }]*/
var item = data[2];
data[100] = a;
f(data[0]);
a = data[-0]; // same as data[0], -0 will be coerced to "0"
a = data[0xab];
a = data[5.6e1];
a = data[4294967294]; // max array index`
Examples of correct code for this rule with option "ignoreDefaultValues":
javascript
`/*typescript no-magic-numbers: ["error", { "ignoreDefaultValues": true }]*/
const { tax = 0.25 } = accountancy;
function mapParallel(concurrency = 3) {
/***/
}`
Examples of correct code for this rule with option "ignoreClassFieldInitialValues":
javascript
`/*typescript no-magic-numbers: ["error", { "ignoreClassFieldInitialValues": true }]*/
class C {
foo = 2;
bar = -3;
#baz = 4;
static qux = 5;
}`
Examples of incorrect code for this rule with option "enforceConst":
javascript
`/*typescript no-magic-numbers: ["error", { "enforceConst": true }]*/
var TAX = 0.25;`
Examples of incorrect code for this rule with option "detectObjects":
javascript
`/*typescript no-magic-numbers: ["error", { "detectObjects": true }]*/
var magic = {
tax: 0.25,
};`
Examples of correct code for this rule with option "detectObjects":
javascript
`/*typescript no-magic-numbers: ["error", { "detectObjects": true }]*/
var TAX = 0.25;
var magic = {
tax: TAX,
};`
Examples of correct code for this rule with option "ignoreEnums":
typescript
`/*typescript no-magic-numbers: ["error", { "ignoreEnums": true }]*/
enum foo {
SECOND = 1000,
}`
Examples of correct code for this rule with option "ignoreNumericLiteralTypes":
typescript
`/*typescript no-magic-numbers: ["error", { "ignoreNumericLiteralTypes": true }]*/
type SmallPrimes = 2 | 3 | 5 | 7 | 11;`
Examples of correct code for this rule with option "ignoreReadonlyClassProperties":
typescript
`/*typescript no-magic-numbers: ["error", { "ignoreReadonlyClassProperties": true }]*/
class Foo {
readonly A = 1;
readonly B = 2;
public static readonly C = 1;
static readonly D = 1;
}`
Examples of correct code for this rule with option "ignoreTypeIndexes":
typescript
`/*typescript no-magic-numbers: ["error", { "ignoreTypeIndexes": true }]*/
type Foo = Bar[0];
type Baz = Parameters<Foo>[2];`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-magic-numbers": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-magic-numbers": "error",
},
});`bash
`oxlint --deny no-magic-numbers`

## References

- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-magic-numbers.html)
- [oxc project](https://github.com/oxc-project/oxc)