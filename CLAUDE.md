# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Phase 1 complete. Next.js 15 (App Router, TypeScript, Tailwind v3) is initialized and building cleanly. Available scripts: `npm run dev`, `npm run build`, `npm run lint`, `npm run format`, `npm run test`, `npm run test:update`.

## Essential reading

Before doing any work, read these three documents in order:

1. **`docs/project-context.md`** — Permanent architectural rules, design principles, and AI collaboration constraints. These do not change between tasks.
2. **`docs/roadmap.md`** — Full project plan in phase order. Work proceeds strictly in sequence.
3. **`docs/current_task.md`** — Active scope. Defines what is in progress, the definition of done, and what must not be started yet.

## Operating rules

- Do not begin work outside the scope defined in `current_task.md`.
- Do not modify `docs/current_task.md` directly. After completing a task, propose the next update to the user and wait for explicit approval before any change is applied.
- Do not introduce dependencies, abstractions, or architectural patterns not described in `docs/project-context.md` without explicit approval.
- Ask before making any decision that deviates from `docs/project-context.md`.

## Execution protocol

When starting any task:

1. Read `docs/current_task.md`
2. Identify blockers or missing information

   Treat something as a blocker if:
   - It prevents implementation entirely, OR
   - It affects architecture, data structure, file structure, or external dependencies

   Ask clarification questions if:
   - There are multiple valid implementation paths that would meaningfully change the output
   - A decision would affect UI structure, data flow, or API design
   - The instruction is ambiguous enough that different engineers would reasonably implement it differently

   If none of the above apply:
   - Proceed using reasonable defaults aligned with `docs/project-context.md`
3. Ask all clarification questions BEFORE doing work
4. Wait for confirmation to proceed

During execution:

- Stay strictly within scope of `docs/current_task.md`
- Do not implement future phases, partial future tasks, or anything not explicitly listed in `docs/current_task.md`
- Do not expand scope under any circumstance without user approval

After execution:

- Summarise changes made
- Highlight assumptions or deviations
- Confirm completion against "Definition of Done"

If the user confirms they are happy with the changes:

- Prompt to commit with a suggested commit message
- Wait for the user to approve or adjust the message before committing
- Do not commit automatically

After completion:

- Propose an updated `docs/current_task.md` for the next roadmap step
- Do not modify it until approved

## Command shortcuts

- `work` → Execute full execution protocol on `docs/current_task.md`
