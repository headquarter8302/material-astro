# [material-astro logo](public\icon.svg) `material-astro`

`material-astro` is a Material Design 3 template and playground for Astro projects. It uses [BeerCSS](https://github.com/beercss/beercss) to style its components. This template also gives resources regarding the usage of the helpers included in BeerCSS.

## Structure

### Components

BeerCSS components are wrapped in the `<BeerCSS>` meta-element to provide the scoped styling of BeerCSS.

Components are located in `src/components`.

### Helpers

BeerCSS helpers are wrapped in a `Helpers` namespace containing enums of every helper.

The export file itself is located in `src/helpers.ts`.

## Developing

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Run development server:

```bash
bun run dev
```

Astro will then hot-reload and rebuild the project on file changes.
