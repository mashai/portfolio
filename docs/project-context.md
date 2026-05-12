# Project Context

This document defines the permanent operating context for this codebase. It governs architectural decisions, design choices, and AI agent behavior. It is not a roadmap and contains no tasks or phases.

---

## Project Identity

This is the personal engineering portfolio of Chai Lacombe-Bar, a Senior Software Engineer specializing in R&D, Tooling, and Infrastructure.

The site exists to communicate engineering credibility and invite professional contact. Its audience is technical leads, hiring managers, and potential clients evaluating Chai for senior roles or contract work.

It is a **static portfolio site** — a curated, handcrafted presentation of completed work. It is not a blog, a content platform, a SaaS product, or a scalable application. There is no content management system, no user-generated content, and no dynamic behavior beyond a contact form. The site reflects engineering judgment through its restraint, not its feature count.

Clarity and craftsmanship are the defining values. Every decision — layout, typography, component structure, dependency choice — should reflect the same engineering standards the portfolio is meant to demonstrate.

---

## Architectural Philosophy

**Static-first.** Data is resolved at build time wherever possible. Pages are statically generated. Runtime data fetching is not used unless the feature is fundamentally dynamic (the contact form API route is the sole exception).

**Minimal dependencies.** A dependency is introduced only when it solves a problem that cannot be reasonably solved with the existing stack. The dependency surface is kept small deliberately — each addition increases maintenance burden and attack surface without proportional benefit for a site of this scope.

**Build-time data preferred.** Project entries, tags, and any content consumed by the UI are read from the filesystem at build time. No client-side fetching of content data occurs.

**Composition over abstraction.** Components are composed from smaller, focused pieces. Abstractions are introduced when a pattern has already repeated at least three times. Shared utilities and wrappers exist to remove duplication, not to anticipate hypothetical reuse.

**Layout primitives precede feature components.** Structural components — the container, spacing system, and layout shell — are established before any section or content component is built. Feature components are built on top of a stable layout foundation, not alongside it.

**Simplicity over scalability.** This site serves one engineer. Architectural decisions are not made with multi-team scale, plugin systems, or future product pivots in mind. The correct solution is the simplest one that meets the current need precisely.

---

## Design Principles

**Neutral design language.** The visual design does not rely on a branded accent color, expressive gradients, or decorative illustration. The palette is intentionally restrained: white surfaces, black text, and light grey for secondary surfaces and borders.

**Semantic color tokens over arbitrary values.** Colors are defined once as named tokens with semantic meaning (`surface`, `surface-muted`, `border`, `text`, `text-muted`). Arbitrary color values do not appear in component code.

**Single theme.** There is no dark mode, no theme toggle, and no color scheme switching. The site renders one way. Simplicity of the theme is part of the design.

**Typography and spacing drive hierarchy.** Visual weight, rhythm, and emphasis are communicated through type size, weight, line height, and spatial relationships — not color contrast or decorative elements. The spacing scale is defined once and applied consistently across all sections.

**Motion used sparingly and intentionally.** CSS transitions are acceptable for state changes such as hover feedback. Animation is not used for entrance effects, page transitions, or decorative motion. Framer Motion and equivalent animation libraries are not part of this project.

**Desktop-first, fully responsive.** Components are designed at desktop width and must ship fully responsive. Mobile layouts are determined by how the desktop layout degrades gracefully, not by designing up from a mobile base.

---

## Technical Constraints

**Next.js App Router with TypeScript.** All routing, layouts, and data fetching patterns follow App Router conventions. TypeScript is used strictly — no `any` types, no type assertions without justification.

**Tailwind as a semantic token system.** Tailwind is configured with a custom token layer that maps semantic names to values. Component code references token names, not raw Tailwind utility classes tied to arbitrary scale values. Tailwind is a delivery mechanism for the design system, not the design system itself.

**MDX for static portfolio entries only.** MDX files in `content/projects/` are the sole content source. Each file represents a completed project and is read at build time. MDX is not used for blog posts, long-form articles, or any content type beyond portfolio entries.

**No CMS behavior.** There is no admin interface, no content editor, no publish/draft workflow, and no external content API. Content is edited directly in the repository by the site owner.

**No database or persistence layer.** The application has no database connection, ORM, or any mechanism for storing state between requests. Form submissions are not stored anywhere.

**Backend limited to email delivery.** The only server-side logic is a single API route that accepts a contact form submission and sends one email via Resend. This route has no side effects beyond that delivery.

**Dependencies installed at the point of need.** A dependency is not added to the project until the phase where it is first required. This keeps the dependency graph intentional and makes each addition a deliberate decision rather than a default.

---

## AI Collaboration Rules

**Follow the roadmap ordering.** Work proceeds according to the sequence defined in `roadmap.md`. Steps are not skipped, reordered, or parallelized unless explicitly directed by the developer.

**Do not introduce libraries without justification.** Before adding any dependency, state what problem it solves and why the existing stack cannot address it. If the developer does not approve, do not add it.

**Avoid premature abstraction.** Do not extract a shared component or utility until the same pattern appears in at least three places. A single-use abstraction is a liability, not an asset.

**Prefer small, composable components.** Components have a single, clear responsibility. A component that does layout and data fetching and state management is a component that needs to be split.

**Do not redesign the UI independently.** Visual decisions — layout structure, spacing, typographic choices, component appearance — are made by the developer, informed by the mockup. The agent implements; it does not redesign.

**Ask before making architectural changes.** If a task requires deviating from the patterns established in this document or in existing code, surface the tradeoff and wait for a decision before proceeding. Do not silently introduce a different pattern on the assumption it is better.

**Prioritize clarity over cleverness.** Code in this project should be immediately readable by a senior engineer unfamiliar with the codebase. Clever solutions that compress logic at the cost of legibility are not appropriate here.
