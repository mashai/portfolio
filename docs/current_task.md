# Current Task

**Roadmap position:** Phase 0 — Environment alignment
**Reference:** `docs/roadmap.md` → Phase 0

---

## Objective

Confirm that the development environment is correctly aligned before the Next.js project is initialized. This phase produces no application code — only a verified, consistent tooling baseline that all subsequent work depends on.

---

## Tasks

**0.1 — Folder structure**
- Confirm the following directories exist at the repository root: `app/`, `components/`, `content/projects/`, `lib/`, `types/`, `public/`, `docs/`
- Create any missing directories (empty, no placeholder files required)

**0.2 — Tooling alignment**
- ESLint configured with Next.js recommended rules
- Prettier configured: single quotes, trailing commas, 2-space indent
- `.editorconfig` present for cross-editor consistency
- `package.json` contains `lint` and `format` scripts

---

## Definition of Done

- All required directories exist at the repository root
- Running the lint script produces no configuration errors
- Running the format script produces no configuration errors
- `.editorconfig` is present and consistent with Prettier settings
- No application code has been written

---

## Do Not Start Yet

Everything beyond Phase 0 is out of scope until this phase is complete:

- Next.js project initialization (`npx create-next-app`)
- Design system and Tailwind configuration
- Layout primitives (`Container`, `Section`)
- Root layout and Header
- Page skeleton
- Playwright installation
- Any section components (Hero, About, Projects, Contact)
- MDX pipeline
- Contact form and API route
- Deployment setup
