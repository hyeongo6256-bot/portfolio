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
- `src/data/projects.js` — the array driving the `Work` grid/modal (`id`, `thumbClass`, optional `thumbImage`, `tag`, `title`, `subline`, `description`, optional `details.gallery`). Add a project by appending an entry here; `WorkCard`/`WorkModal` render whatever fields are present.
- `src/hooks/useReveal.js` — shared `IntersectionObserver` hook (threshold 0.15) that adds `.is-visible` to a ref'd element once it scrolls into view, then unobserves. Any element that should animate in on scroll needs both the `.reveal` class (defined once in `index.css`, handles the opacity/translateY transition) and a ref from `useReveal()`.
- `src/index.css` — global stylesheet for all non-registry components, driven by CSS custom properties in `:root` (colors, radius, max-width). Responsive breakpoints at 860px and 640px live at the bottom of the file. This coexists with Tailwind (used only inside `registry/`) via Vite's `@tailwindcss/vite` plugin declared in `vite.config.js`.
- Mobile nav toggle (`Header.jsx`) is local `useState`, not the old vanilla-JS DOM toggling — `isOpen` drives both the `.is-open` class and `aria-expanded`, and closes on link click.
