# Extensions (import)

**Pattern ID:** `import_extensions`
**Plugin:** `import`

## What it does

Some file resolve algorithms allow you to omit the file extension within the import source path. For example the node resolver (which does not yet support ESM/import) can resolve ./foo/bar to the absolute path /User/someone/foo/bar.js because the .js extension is resolved automatically by default in CJS. Depending on the resolver you can configure more extensions to get resolved automatically. In order to provide a consistent use of file extensions across your code base, this rule can enforce or disallow the use of certain file extensions.

## Why is this bad?

ESM-based file resolve algorithms (e.g., the one that Vite provides) recommend specifying the file extension to improve performance. Without extensions, the bundler must check for various possible file extensions, which can slow down the build process on large projects. In addition, common ESM environments (such as browsers and Node.js) typically require fully specified relative imports, which means extensionless imports are not supported there.
For personal preference and compatibility reasons, the rule also allows configuration to disallow extensions in imports. This is generally not recommended, but it can be done if preferred.

## Examples

Examples of incorrect code for this rule:
The following patterns are considered problems when configuration set to "always":
js
`import foo from "./foo";
import bar from "./bar";
import Component from "./Component";
import foo from "@/foo";`
The following patterns are considered problems when configuration set to "never":
js
`import foo from "./foo.js";
import bar from "./bar.json";
import Component from "./Component.jsx";
import express from "express/index.js";`
Examples of correct code for this rule:
The following patterns are not considered problems when configuration set to "always":
js
`import foo from "./foo.js";
import bar from "./bar.json";
import Component from "./Component.jsx";
import * as path from "path";
import foo from "@/foo.js";`
The following patterns are not considered problems when configuration set to "never":
js
`import foo from "./foo";
import bar from "./bar";
import Component from "./Component";
import express from "express/index";
import * as path from "path";`
Per-extension configuration examples:
js
`// Configuration: { "vue": "always", "ts": "never" }
import Component from "./Component.vue"; // ✓ OK - .vue configured as "always"
import utils from "./utils"; // ✓ OK - .ts configured as "never"
import styles from "./styles.css"; // ✓ OK - .css not configured, ignored
// Configuration: ["ignorePackages", { "js": "never", "ts": "never" }]
import foo from "./foo"; // ✓ OK - no extension
import bar from "lodash/fp"; // ✓ OK - package import, ignored (ignorePackages sets this to true)`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/extensions": "error"
}
}`ts
`impor

## References

- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/extensions.html)
- [oxc project](https://github.com/oxc-project/oxc)