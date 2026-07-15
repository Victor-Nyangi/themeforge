# ThemeForge

A design-system theming tool for designing, previewing, and exporting complete color/type/spacing themes — in the browser, with no build step to see your changes.

**Live:** https://themeforge-ochre.vercel.app/

---

## What it does

- **One-click palettes** — start from four curated Foundations (Midnight Orchid, Botanical Noir, Neon Circuit, Bright Bloom) and watch the whole app re-skin instantly.
- **PrimeNG-style switching** — pick a **Primary** brand color and a **Surface** neutral from swatch grids, or open **Create Theme** to name a theme, choose a foundation, or import one from JSON.
- **Perceptual color ramps** — every base color expands into a full 50–950 scale generated in **OKLCH**, so lightness steps are perceptually even (no more "blue too dark, yellow too light" at the same stop). Chroma eases off toward the light end and a subtle hue shift gives ramps a hand-tuned feel; your picked color is preserved exactly at stop 500.
- **Live preview** — a sample UI updates in real time as you edit colors, typography, spacing, and borders.
- **Dark mode** — a semantic token layer with a persisted light/dark toggle (respects `prefers-color-scheme`).
- **Export anywhere** — copy or download your theme as **CSS custom properties**, **Tailwind config**, or **JSON**, with a **Hex / OKLCH / HSL** format toggle for the CSS and Tailwind output.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** (build output in `build/`)
- **Tailwind CSS v4** (`@theme inline`, `@custom-variant dark`)
- **shadcn/ui** + Radix primitives
- Display font: **Fraunces**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Production build to `build/` |
| `npm run preview` | Preview the production build locally |

## Deployment

Deployed on **Vercel**. Configuration lives in [`vercel.json`](./vercel.json): the output directory is pinned to `build/` (Vite's default here, not Vercel's `dist/`) and an SPA rewrite routes all paths to `index.html`. Every push to `main` triggers an automatic deploy.

## Credits

Originally scaffolded from a Figma export ([Variant Setup](https://www.figma.com/design/GRfnD5GZXufUDMIAMnmWiu/Variant-Setup--Copy-)) and built out into ThemeForge.

## License

MIT
