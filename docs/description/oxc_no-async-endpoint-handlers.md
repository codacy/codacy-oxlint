# No Async Endpoint Handlers (oxc)

**Pattern ID:** `oxc_no-async-endpoint-handlers`
**Plugin:** `oxc`

## What it does

Disallows the use of `async` functions as Express endpoint handlers.

## Why is this bad?

Before v5, Express will not automatically handle Promise rejections from handler functions with your application's error handler. You must instead explicitly pass the rejected promise to `next()`.
js
`const app = express();
app.get("/", (req, res, next) => {
new Promise((resolve, reject) => {
return User.findById(req.params.id);
})
.then((user) => res.json(user))
.catch(next);
});`
If this is not done, your server will crash with an unhandled promise rejection.
js
`const app = express();
app.get("/", async (req, res) => {
// Server will crash if User.findById rejects
const user = await User.findById(req.params.id);
res.json(user);
});`
See [Express' Error Handling Guide](https://expressjs.com/en/guide/error-handling.html) for more information.

## Examples

Examples of incorrect code for this rule:
js
`const app = express();
app.get("/", async (req, res) => {
const user = await User.findById(req.params.id);
res.json(user);
});
const router = express.Router();
router.use(async (req, res, next) => {
const user = await User.findById(req.params.id);
req.user = user;
next();
});
const createUser = async (req, res) => {
const user = await User.create(req.body);
res.json(user);
};
app.post("/user", createUser);
// Async handlers that are imported will not be detected because each
// file is checked in isolation. This does not trigger the rule, but still
// violates it and _will_ result in server crashes.
const asyncHandler = require("./asyncHandler");
app.get("/async", asyncHandler);`
Examples of correct code for this rule:
js
`const app = express();
// not async
app.use((req, res, next) => {
req.receivedAt = Date.now();
});
app.get("/", (req, res, next) => {
fs.readFile("/file-does-not-exist", (err, data) => {
if (err) {
next(err); // Pass errors to Express.
} else {
res.send(data);
}
});
});
const asyncHandler = async (req, res) => {
const user = await User.findById(req.params.id);
res.json(user);
};
app.get("/user", (req, res, next) => asyncHandler(req, res).catch(next));`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/no-async-endpoint-handlers": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/no-async-endpoint-handlers": "error",
},
});`bash
`oxlint --deny oxc/no-async-endpoint-handlers`

## Version

This rule was added in v0.9.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/no_async_endpoint_handlers.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fno-async-endpoint-handlers)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-endpoint-handlers.html)
- [oxc project](https://github.com/oxc-project/oxc)