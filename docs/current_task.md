# Current Task

**Roadmap position:** Phase 2 — Sections
**Reference:** `docs/roadmap.md` → Phase 2, task 2.5b

---

## Objective

Add project detail pages accessible by clicking a card. No MDX body rendering — frontmatter data only.

---

## Tasks

**2.5b — Project detail page**
- `lib/mdx.ts` — add `getProjectBySlug(slug: string): Project | undefined`
- `components/ui/ProjectCard.tsx` — wrap card in a `Link` to `/projects/[slug]`
- `app/projects/[slug]/page.tsx` — static page using `generateStaticParams`, renders thumbnail, title, description, and tag pills from frontmatter
- Ships fully responsive at 375px, 768px, 1280px, 1920px
- Update Playwright baselines after completion

---

## Definition of Done

- Clicking any project card navigates to `/projects/[slug]`
- Detail page renders thumbnail, title, description, and tag pills
- All slugs are statically generated at build time
- Fully responsive at all four breakpoints
- Playwright baselines updated
- No new dependencies introduced

---

## Do Not Start Yet

- Tag filtered page (2.7)
- Contact section (3.1–3.2)
- Everything in Phase 3 and 4
