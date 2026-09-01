# Numeric Separators Style (unicorn)

**Pattern ID:** `unicorn_numeric-separators-style`
**Plugin:** `unicorn`

## What it does

Enforces a convention of grouping digits using numeric separators.

## Why is this bad?

A long series of digits can be difficult to read, and it can be difficult to determine the value of the number at a glance. Breaking up the digits with numeric separators (`_`) can greatly improve readability.
Compare the following two numbers and how easy it is to understand their magnitude:
js
`1000000000;
1_000_000_000;`
This rule also enforces proper group size, for example enforcing that the `_` separator is used every 3 digits.

## Examples

Examples of incorrect code for this rule:
javascript
`const invalid = [1_23_4444, 1_234.56789, 0xab_c_d_ef, 0b10_00_1111, 0o1_0_44_21, 1_294_28771_2n];`
Examples of correct code for this rule:
javascript
`const valid = [1_234_567, 1_234.567_89, 0xab_cd_ef, 0b1000_1111, 0o10_4421, 1_294_287_712n];`

## Configuration

This rule accepts a configuration object with the following properties:

## References

- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/numeric-separators-style.html)
- [oxc project](https://github.com/oxc-project/oxc)