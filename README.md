# MedSim Innovations Website

The public website for MedSim Innovations Private Limited, a medical simulation and healthcare training company based in Gurugram, India.

The website presents procedure kits, nursing skills-lab solutions, student essentials, healthcare training services and institutional support for colleges, hospitals and care teams.

## Company contact

- General and product enquiries: [sales@medsiminnovations.com](mailto:sales@medsiminnovations.com)
- Phone: [+91 997 146 6122](tel:+919971466122)
- Registered office: Q-114, 3rd Floor, South City 1, Gurugram, Haryana 122001, India

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- ESLint and Prettier
- Playwright and Axe accessibility testing
- GitHub Actions continuous integration
- Static metadata routes for robots, sitemap and the web manifest
- JSON-LD organization and product-catalog structured data

## Local development

Requires Node.js 20.9 or newer and npm 10 or newer.

```bash
npm ci
npx playwright install chromium
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Start the development server.                    |
| `npm run format`       | Format source files with Prettier.               |
| `npm run format:check` | Verify source formatting.                        |
| `npm run lint`         | Run ESLint.                                      |
| `npm run build`        | Create and type-check the production build.      |
| `npm run start`        | Serve the production build.                      |
| `npm run deps:check`   | Check dependency version consistency.            |
| `npm run typecheck`    | Generate Next.js route types and run TypeScript. |
| `npm run audit`        | Audit production and development dependencies.   |
| `npm run test`         | Run browser and accessibility tests.             |
| `npm run check`        | Run the complete pre-release quality gate.       |

Before merging a change, run:

```bash
npm run check
```

## Project structure

```text
app/                   Routes, metadata, error states and SEO files
components/layout/     Application shell, navigation and shared page chrome
components/pages/      Page-level presentation grouped in one predictable place
components/ui/         Low-level reusable interface primitives
content/               Site configuration, approved copy and catalogue content
lib/                   Framework-facing metadata helpers
public/about-us/        Story imagery
public/products/        Product imagery
tests/e2e/              Browser, responsive and accessibility tests
.github/                CI, dependency updates and contribution templates
```

The website uses conventional App Router pages at `/`, `/products`, `/services`, `/story`, `/contact` and `/privacy`. Route files stay thin: they own metadata and compose the page from `components/pages/`. Shared page chrome is assembled in `components/layout/site-shell.tsx`, while the browser document owns vertical scrolling.

The application also includes branded loading, not-found, route-error and global-error states. The Contact page uses a lazy-loaded Google Maps embed with a separate link for opening directions.

## Content and assets

- Keep factual claims aligned with approved company source material.
- Store optimized public assets under `public/` with descriptive filenames.
- Preserve useful alternative text and confirm publication rights before adding media.
- Product card imagery and its types are maintained together in `content/products.ts`.
- Shared business identity, canonical domain and contact details are stored in `content/site.ts`.
- The copyright year in `components/layout/site-footer.tsx` is generated at build time.

## Branch and release workflow

- `production` contains the currently released website.
- `development` is the integration branch for the next release.
- Create focused branches from `development` and merge them through reviewed pull requests.
- Promote a tested release from `development` to `production`, then create an annotated semantic-version tag and GitHub Release.

Repository rules should require the CI workflow for pull requests and prevent direct, unsigned changes to `production`. See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [CHANGELOG.md](CHANGELOG.md).

## Accessibility and quality

The target is WCAG 2.2 level AA. The automated suite checks all public routes in desktop and mobile Chromium with Axe, but automation is not a substitute for manual review. Visual or interactive changes should also be tested with keyboard-only navigation, browser zoom/reflow, reduced motion, and a screen reader.

The accessibility approach and latest manual review status are documented in [ACCESSIBILITY.md](ACCESSIBILITY.md).

The production response includes a Content Security Policy, HSTS, frame restrictions, MIME sniffing protection, a referrer policy, and a permissions policy. Validate these headers in the deployed environment after infrastructure changes.

### Browser tests

Playwright configuration lives in `playwright.config.ts`. The suite runs against a production build in desktop and mobile Chromium and covers:

- Every public route and primary heading
- Product search and category filters
- Mobile-menu keyboard behavior
- Security response headers
- Conventional document scrolling
- 320 CSS-pixel reflow, equivalent to a 1280-pixel viewport at 400% zoom
- Accessible contact methods, Google Maps embed and directions link
- Automated WCAG 2.2 AA checks with Axe

Install the browser once with `npx playwright install chromium`, then use `npm run test`. Failure screenshots, traces and the HTML report are ignored by Git and uploaded by CI for review.

## Deployment

The application runs on platforms that support a Next.js Node server:

```bash
npm ci
npm run build
npm run start
```

Serve the production deployment over HTTPS and point the canonical domain to `https://www.medsiminnovations.com`.

After deployment:

1. Confirm the canonical domain, HTTPS redirect, caching and security headers.
2. Submit `https://www.medsiminnovations.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
3. Test the Open Graph preview and organization structured data against the live URL.
4. Verify the contact links, Google Maps embed, directions link and all product images from the production region.
5. Run keyboard and screen-reader smoke tests against the deployed pages.
6. Confirm the hosting rollback procedure before promotion.
