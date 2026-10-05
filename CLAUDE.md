# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A one-page portfolio site (Korean-language) for a designer, built with Vite + React + Tailwind CSS v4. Entry point is `index.html` → `src/main.jsx` → `src/App.jsx`.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally

There is no lint or test setup in this project.

## Architecture

- `src/App.jsx` — composes the page top to bottom: `Intro`, `Header`, then inside `<main>` the hero (`registry/oyster-embedded-hero`), `About`, `Work`, `Contact`, then `RiottersFooter` outside `<main>`. Section IDs (`#home` inferred, `#about`, `#work`, `#contact`) are used for anchor nav and smooth scrolling.
- `src/components/` — page sections as plain React components (`Header`, `Intro`, `About`, `Work`, `WorkCard`, `WorkModal`, `Contact`, `Footer`). Most styling for these comes from global classes in `src/index.css`, not Tailwind or CSS modules.
- `src/components/registry/` — third-party component "recipes" ported from the [Monet registry](https://github.com/monet-design/monet-registry) (e.g. `oyster-embedded-hero`, `riotters-footer`), TS stripped to plain JSX. These are Tailwind-styled and self-contained; each pulls in `registry/tailwind-scoped.css`, which imports Tailwind's theme/utilities layers *without Preflight* specifically so it doesn't reset global element styles used by the rest of the (non-Tailwind) site. Treat files under `registry/` as vendored: prefer editing the `CUSTOMIZATION` block at the top of a component (colors, copy) over restructuring its internals, and preserve the attribution comment when porting a new one in.
- `src/data/projects.js` — the array driving the PROJECT grid (`Work`) and its detail modal. Entry fields: `id`, `year`, `thumbClass` (`work-card__thumb--1`…`--6`, background gradient), `thumbImage`, optional `thumbPosition`/`thumbVideo`, `tag`, `title`, `date` (`YYYY.Mon` or `… - YYYY.Mon`, parsed for sort), `subline`, `exhibit`, `description` (string or array), `details.sections`, `details.gallery`, `sortKey` (numeric override for grid sort), `leadImages` + `customPages` (see below). The grid sorts newest-first by `date` (falls back to `year`); array order does not matter.
- `src/data/history.js` — the separate HISTORY (career timeline) section, grouped by year → entries with `month` + either `title` or `company`/`items`. Career items such as 업력 belong here, not in `projects.js`.
- Work detail modal (`WorkModal.jsx`) is a two-page "book spread": `buildPages` turns a project into page objects, paired two per spread. Default order is cover text page → `thumbImage` → `details.sections` → `details.gallery`. A project with `customPages: true` renders only its `leadImages` (used by Obscured, where every page is a pre-rendered image).
- Work interaction (`Work.jsx`): clicking a card opens a centered enlarged-thumbnail preview overlay; clicking that image opens the detail modal; clicking the backdrop cancels.
- Work asset conventions: grid thumbnails are 1200×1600 (3:4) — `.work-card__thumb` uses `aspect-ratio: 3/4` with `object-fit: cover`, so other ratios get cropped. Book spreads are authored as 2400×1600 and split into two 1200×1600 pages (`public/work/<project>/detail-NN.jpg`). Put a thumbnail-only image in its own file when the same path is also used in `details.gallery`, so the two can change independently.
- `src/hooks/useReveal.js` — shared `IntersectionObserver` hook (threshold 0.15) that adds `.is-visible` to a ref'd element once it scrolls into view, then unobserves. Any element that should animate in on scroll needs both the `.reveal` class (defined once in `index.css`, handles the opacity/translateY transition) and a ref from `useReveal()`.
- `src/index.css` — global stylesheet for all non-registry components, driven by CSS custom properties in `:root` (colors, radius, max-width). Responsive breakpoints at 860px and 640px live at the bottom of the file. This coexists with Tailwind (used only inside `registry/`) via Vite's `@tailwindcss/vite` plugin declared in `vite.config.js`.
- Mobile nav toggle (`Header.jsx`) is local `useState`, not the old vanilla-JS DOM toggling — `isOpen` drives both the `.is-open` class and `aria-expanded`, and closes on link click.
