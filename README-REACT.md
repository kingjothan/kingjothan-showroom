# Kingjothan Showroom React migration

This is a separate preview branch. The existing `main` website is unchanged.

Run `npm install`, then `npm run dev` for local preview, or `npm run build` for production.

The migration preserves the existing homepage copy, images, links, sidebar, styling, scroll reveals, counters and hover motion. Components are split into sections, with existing section markup retained while deeper JSX refactoring continues. Archived project pages remain in the repository and can be opened directly.

Deployment note: Vite serves assets in `public/`. Copy existing `assets/` and `projects/` folders into `public/` when deploying this branch. Until those are migrated, the old static `main` branch is the safe live version.
