# ts-boilerplate

Minimal TypeScript boilerplate with strict TS, ESLint flat config, Vitest, and ESM-only packaging.

## Quickstart

- Install: `pnpm install`
- Dev: `pnpm dev`
- Test: `pnpm test`
- Type-check: `pnpm type-check`
- Lint: `pnpm lint`
- Format: `pnpm format`
- Build: `pnpm build`

## Features

- ESM-only package, `exports` with types
- Strict TypeScript config with helpful extra checks
- Vitest with coverage (`pnpm test:coverage`)
- ESLint v9 flat config with import hygiene and unused imports removal
- Prettier formatting across repo
- Husky + lint-staged pre-commit hook
- CI workflow running type-check, lint, test, build on Node 18/20

## Releasing

- Build is run automatically on `npm publish` via `prepack`
- Only `dist/` is published thanks to the `files` field

## Node compatibility

- Requires Node >= 18 (see `.nvmrc` and `engines`)

## Notes

- The project is ESM-only. If you need CJS support, consider adding a dual build with `tsup` and mapping `exports.require` to a `*.cjs` file.
