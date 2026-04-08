# treeseed-fixtures

This repository is the canonical source of shared TreeSeed fixtures.

## Layout

- `sites/working-site/`: the canonical TreeSeed working-site fixture
- `fixture-sdk-sample-site/template.config.json`: legacy metadata kept as an alias to the canonical fixture id and root

## Fixture Contract

The `treeseed-working-site` fixture is intentionally broad enough to support:

- SDK content-backed tests
- Core tenant verification (`check`, `build`, smoke, and release verification)

Its stable contract is:

- fixture id: `treeseed-working-site`
- fixture manifest: `sites/working-site/fixture.manifest.json`
- tenant manifest: `sites/working-site/src/manifest.yaml`
- site config: `sites/working-site/src/config.yaml`
- canonical content root: `sites/working-site/src/content`

Generated build outputs do not belong in this repository contract. Keep `dist/`, `.astro/`, `node_modules/`, and generated book exports out of the shared fixture source.
