# Current Task

**Roadmap position:** Phase 2 — Sections
**Reference:** `docs/roadmap.md` → Phase 2, task 2.3

---

## Objective

Write 4–6 real MDX project files in `content/projects/`. These are the source of truth for all content components in 2.4–2.7 — no mock data is used at any point.

---

## Tasks

**2.3 — Seed content**
- Create `content/projects/` directory
- Write 4–6 `.mdx` files, one per project, each with complete frontmatter:
  ```
  title, description, tags, thumbnail, date, slug (filename)
  ```
- Each file includes a short body (1–2 paragraphs) describing the project
- Thumbnail images placed in `public/` and referenced in frontmatter

---

## Definition of Done

- 4–6 `.mdx` files present in `content/projects/`
- All frontmatter fields match the `Project` type exactly
- `getAllProjects()` returns all entries without error
- No placeholder or lorem ipsum content — real project entries only

---

## Do Not Start Yet

- About, Projects, Contact sections (2.4–3.1)
- Everything in Phase 3 and 4
