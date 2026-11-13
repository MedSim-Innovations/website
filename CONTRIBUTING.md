# Contributing

Thank you for improving the MedSim Innovations website. Changes should be made on a short-lived branch based on `development` and merged through a reviewed pull request. Production releases are promoted from `development` to `production`.

## Set up the project

Use Node.js 20 and npm 10 or newer.

```bash
nvm use
npm ci
npx playwright install chromium
npm run dev
```

## Before opening a pull request

Run the complete local quality gate:

```bash
npm run check
```

Keep pull requests focused. Include screenshots for visual changes and describe keyboard, responsive, and accessibility testing where relevant. Do not commit credentials, customer information, health information, private quotations, or unapproved product claims.

## Content and accessibility

- Confirm factual and regulatory claims with an authorized company representative.
- Use semantic HTML before adding ARIA attributes.
- Preserve keyboard access, visible focus, logical heading order, and useful alternative text.
- Meet WCAG 2.2 AA contrast and interaction requirements.
- Optimize images and confirm publication rights before committing them.

## Commit and review conventions

Use concise imperative commit subjects, optionally following Conventional Commits—for example, `fix: restore mobile menu focus`. At least one maintainer should review changes before merge. Configure repository rules so CI is required and direct pushes to `production` are restricted.
