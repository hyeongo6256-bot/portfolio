# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A static one-page portfolio site (Korean-language) for a designer, "Jane Kim". No build tooling, no package manager, no framework — just three files: `index.html`, `styles.css`, `script.js`. Open `index.html` directly in a browser or serve the directory with any static file server to preview changes.

## Architecture

- `index.html` — single-page markup with sections identified by id (`#home`, `#about`, `#work`, `#contact`), each wrapped in `.container` for consistent max-width.
- `styles.css` — all styling, driven by CSS custom properties defined once in `:root` (colors, radius, max-width). Responsive breakpoints at 860px and 640px live at the bottom of the file.
- `script.js` — two independent behaviors:
  - Mobile nav toggle: toggles `.is-open` on `.nav` and updates `aria-expanded` on `.nav-toggle`; closes the nav when a link is clicked.
  - Scroll-reveal: an `IntersectionObserver` adds `.is-visible` to any element with the `.reveal` class once it scrolls into view (threshold 0.15), then unobserves it. New sections/elements that should animate in on scroll must be given the `.reveal` class in HTML — the CSS transition (opacity/translateY) is defined once under `.reveal` / `.reveal.is-visible`.

There is no JS bundler, transpiler, or test suite — edits to `script.js` are used as-is by the browser.
