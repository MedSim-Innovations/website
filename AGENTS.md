# Repository guidance for coding agents

This file defines the default working agreement for automated coding agents in this repository. User instructions always take precedence.

## Safety and Git workflow

- Work from `development` unless the user explicitly selects another non-production branch.
- Keep changes local by default. Do not commit, push, tag, merge, open a pull request, publish a release, deploy, or change GitHub settings without an explicit request.
- Never modify or push `production`. Promotion to production is performed solely by the repository owner.
- Preserve unrelated and pre-existing working-tree changes. Do not reset, discard, stash, or overwrite them.
- Do not rewrite shared history or use destructive Git commands.

## Architecture

- Keep `app/` route files thin. They own route metadata and compose a page from `components/pages/`.
- Keep the five route-level presentation modules together in `components/pages/`.
- Put broadly reusable visual primitives in `components/ui/` and shared chrome in `components/layout/`.
- Store approved display content, site configuration and content-specific types in `content/` rather than embedding large datasets in components.
- Keep only focused framework helpers in `lib/`.
- Prefer Server Components. Add `"use client"` only when browser APIs, state, or event handlers require it.
- Avoid speculative abstractions, global state libraries, barrel files, and generic utility modules unless they solve a demonstrated problem.

## Naming and code style

- Use kebab-case for file and public-asset names.
- Use PascalCase for React components and TypeScript types, camelCase for functions and variables, and UPPER_SNAKE_CASE only for genuine constants.
- Name route-level feature components `<Route>PageContent` so they remain distinct from Next.js route components named `<Route>Page`.
- Use descriptive names based on responsibility, not implementation details.
- Add comments only for non-obvious constraints, browser behavior, security decisions, or maintenance rationale. Do not narrate straightforward code.
- Use the `@/` import alias for cross-directory imports and relative imports within the same small module group.
- Run Prettier rather than manually aligning code.

## Design and content

- Preserve approved company copy unless the user explicitly requests content changes.
- Use the semantic brand tokens defined in `app/globals.css`. Do not introduce one-off brand colors when an existing token fits.
- Keep the visual direction expressive but readable: strong color should establish hierarchy, not compete with content.
- Use conventional document scrolling and retain the shared responsive page container.
- Product cards remain catalogue-only until richer product details are explicitly requested.
- The Contact page uses an approved, lazy-loaded Google Maps embed. Preserve its accessible title, the separate external directions link, privacy disclosure, CSP allowance and browser coverage.
- Keep the privacy notice aligned with actual site behavior; update it before adding forms, cookies, analytics or new third-party services.
- Store optimized images under `public/` with descriptive kebab-case filenames and meaningful alternative text where the image conveys content.

## Accessibility and security

- Target WCAG 2.2 AA. Preserve semantic landmarks, heading order, keyboard access, visible focus, sufficient contrast, reduced-motion behavior, and practical touch targets.
- Do not use color as the only indicator of state.
- Test interactive changes with keyboard navigation and at mobile and desktop widths.
- Follow `ACCESSIBILITY.md` for manual VoiceOver and zoom/reflow release acceptance.
- Preserve the response security headers in `next.config.ts`. Explain and test any relaxation of the Content Security Policy.
- Never commit secrets, credentials, customer data, health information, private quotations, or unapproved claims.

## Required verification

Run the smallest relevant checks while iterating. Before handing off a completed change, run:

```bash
npm run check
```

The complete gate covers formatting, ESLint, TypeScript, dependency consistency, the optimized Next.js build, Playwright browser and Axe accessibility tests, and the production dependency audit.

When route behavior, responsive interaction, accessibility, security headers, scrolling, or external-link behavior changes, update the Playwright coverage and the testing section of `README.md`.

Report which checks passed, any intentionally skipped tests, remaining manual verification, and confirm whether the working tree was committed or pushed.
