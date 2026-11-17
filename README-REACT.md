# Kingjothan Showroom React preview

This is a separate React + Vite migration branch. The live `main` branch remains unchanged.

## Run

```bash
npm install
npm run dev
npm run build
npm run preview
```

Vite builds to `dist/`. A custom Vite build plugin copies the existing `assets/` and `projects/` folders into `dist/` so the existing KJ logo and standalone case-study pages remain available. The React homepage retains the original content, visual styles, sidebar, counters, scroll reveals and hover effects.

## Status

Initial React migration scaffold. Existing sections are rendered from preserved HTML markup through React section components. This is not yet a complete idiomatic JSX refactor or a verified production deployment. Test the branch before replacing `main`.
