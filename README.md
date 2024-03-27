- `pnpm i`
- `code .`
- inspect `b/src/index.ts`
- find that one call has an error, the other fails

conclussion so far:

- a `.d.ts`` is seen as esm, only if: it's mjs/d.mts, or if root or local package.json has `"type": "module"`
- unlike `.js` which can be seen as esm, if the package.json `exports` entry has an `import` pointing to it.
