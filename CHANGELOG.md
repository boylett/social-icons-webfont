# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] - 2026-06-24

### Added

- **RoyalRoad icon** -- adds the RoyalRoad web-fiction platform with the `royalroad` ligature and `royalroad.com` hostname.

## [2.0.1] - 2026-06-24

### Added

- **`sideEffects` field** -- marks only the stylesheets as side-effectful and declares `react` an optional peer dependency, so bundlers tree-shake unused icon components.

### Changed

- **React export precompiled and typed** -- `./react` now ships ES modules with a generated `React/icons.d.ts`, consuming cleanly under strict TypeScript and SSR without bundler config.

## [2.0.0] - 2026-06-24

### Added

- **woff2 and otf formats** -- the `@font-face` serves woff2 first (120KB vs the 248KB woff) with ttf and otf fallbacks.
- **React and Vue components** -- import `social-icons-webfont/react` named exports or `social-icons-webfont/vue/{Name}.vue` single-file components.
- **Standalone icon classes** -- `.soc-{Name}` now applies the font on its own, so the base `social-icons` class is optional.
- **Six new brands** -- Acggoods, Domotown, KaeruGallery, WAFRN, WebsiteLeage and WikimediaCommons.
- **Package exports map** -- subpath imports for styles, data, fonts, svgs and components are now explicit, and `svgs/` is importable by name.
- **Slim npm package** -- a `files` allowlist drops `selection.json`, `demo.html` and tooling from the published tarball.

### Changed

- **IcoMoon project file** -- the source of truth is now `social-icons.icomoon.json` (was `selection.json`); `gen.js` reads its `glyphs[].extras`.
- **Valid TypeScript declarations** -- `icons.d.ts` and `hostnames.d.ts` are now typed ambient declarations of readonly tuples instead of an invalid `as const`.
- **Repository metadata** -- `repository`, `bugs` and `homepage` point at `social-icons-webfont` rather than the old `Social-Icons` path.
- **Source SVGs use currentColor** -- every `svgs/` icon inherits the surrounding text colour instead of carrying a hardcoded hex or named fill.

### Removed

- **SVG webfont** -- the deprecated 1.75MB `fonts/SocialIcons.svg` is gone; the remaining formats cover every current browser.
- **Ligature polyfill** -- `liga.js` is removed because browsers handle discretionary ligatures natively.
- **SCSS stylesheet** -- `style.scss` is removed; `variables.scss` codepoints and the compiled `style.css` remain.

### Fixed

- **Hostname preservation** -- `gen.js` merges curated domains instead of overwriting them with ligature data on every run.
- **Generator sort** -- icon keys are sorted with `localeCompare` rather than a no-op numeric comparison.
