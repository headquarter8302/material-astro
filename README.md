# ![material-astro logo](public/icon.svg) `material-astro`

**`material-astro`** is a Material Design 3 template and playground for Astro projects. It uses [BeerCSS](https://github.com/beercss/beercss) to style its components. This template also gives resources regarding the usage of the helpers included in BeerCSS.

## Structure

### Components

BeerCSS components are wrapped in the `<BeerCSS>` meta-element to provide the scoped styling of BeerCSS.

Components are located in `src/components`.

#### Component list

> Note: unchecked items aren't implemented yet

<details>
<summary>See all components</summary>

- [x] Badge
- [x] Button
- [x] Card
- [x] Checkbox
- [ ] Chip
- [ ] Container
- [ ] Dialog
- [ ] Divider
- [ ] Expansion
- [ ] Grid
- [ ] Icon
- [ ] Input
- [ ] Layout
- [ ] List
- [ ] Media
- [ ] Menu
- [ ] Navigation
- [ ] Overlay
- [ ] Page
- [ ] Progress
- [ ] Radio
- [ ] Select
- [ ] Slider
- [ ] Snackbar
- [ ] Switch
- [ ] Table
- [ ] Tabs
- [ ] Textarea
- [ ] Tooltip
- [ ] Typography

</details>

### Helpers

BeerCSS helpers are wrapped in a `Helpers` namespace containing enums of every helper.

The export file itself is located in `src/helpers.ts`.

#### Helper list

> Note: unchecked items aren't implemented yet

<details>
<summary>See all helpers</summary>

- [x] Alignments
- [x] Blurs
- [x] Colors
- [x] Directions
- [x] Elevates
- [x] Forms
- [x] Margins
- [x] Opacities
- [x] Paddings
- [x] Positions
- [x] Responsive
- [x] Ripples
- [x] Scrolls
- [x] Shadows
- [x] Sizes
- [x] Spaces
- [x] Theme
- [x] Triggers
- [x] Typography
- [x] Waves

</details>

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
