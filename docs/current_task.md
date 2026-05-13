# Current Task

**Roadmap position:** Phase 2 — Sections
**Reference:** `docs/roadmap.md` → Phase 2, task 2.7

---

## Objective

Implement the tag filtered page so clicking a tag pill anywhere on the site navigates to a filtered list of projects.

---

## Note on URL structure

`app/projects/[slug]/page.tsx` already occupies the `/projects/[x]` dynamic segment. Tag pages live at `/projects/tag/[tag]` to avoid the conflict. `TagPill` is updated to link to the new path.

---

## Tasks

**2.7 — Tag filtered page**
- `app/projects/tag/[tag]/page.tsx` — `generateStaticParams` enumerates all unique tags, renders a filtered `ProjectsGrid`
- `components/ui/TagPill.tsx` — update href to `/projects/tag/[tag]`
- Ships fully responsive at 375px, 768px, 1280px, 1920px
- Update Playwright baselines after completion

---

## Definition of Done

- Navigating to `/projects/tag/[tag]` renders only projects matching that tag
- All tag pages are statically generated at build time
- Tag pills across the site link to the correct URL
- Fully responsive at all four breakpoints
- Playwright baselines updated
- No other sections modified
