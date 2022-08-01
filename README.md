# fup-demo

**Demo**: `npm i && npm jest`

**problem**: can't get `find-up` to work with Jest:

> `SyntaxError: Cannot use import statement outside a module`

However, I've configured `ts-jest` using the guide on [ESM Support](https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/).


```
$ npm test

> fup-demo@1.0.0 test
> jest

 FAIL  src/__tests__/find-up.test.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    fup-demo/node_modules/find-up/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import path from 'node:path';
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

    > 1 | import { findUp } from "find-up";
        | ^
      2 |
      3 | it("should find package.json", async () => {
      4 |   const path = await findUp("package.json", { cwd: __dirname });

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1796:14)
      at Object.<anonymous> (src/__tests__/find-up.test.ts:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.289 s
Ran all test suites.
```