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
- Static metadata routes for robots, sitemap and the web manifest
- JSON-LD organization and product-catalog structured data

## Local development

Requires Node.js 20.9 or newer and npm 10 or newer.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command                | Description                                 |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Start the development server.               |
| `npm run format`       | Format source files with Prettier.          |
| `npm run format:check` | Verify source formatting.                   |
| `npm run lint`         | Run ESLint.                                 |
| `npm run build`        | Create and type-check the production build. |
| `npm run start`        | Serve the production build.                 |
| `npm run deps:check`   | Check dependency version consistency.       |
| `npm run typecheck`    | Run TypeScript without emitting files.      |
| `npm run audit`        | Audit production dependencies.              |
| `npm run check`        | Run the complete pre-release quality gate.  |

Before merging a change, run:

```bash
npm run check
```

## Project structure

```text
app/                   Routes, metadata, error states and SEO files
components/feedback/   Branded not-found and error-state presentation
components/layout/     Application shell, navigation and shared page chrome
components/sections/   Home, products, services, story and contact sections
components/ui/         Low-level reusable interface primitives
constants/             Shared types and navigation data
data/                  Product and story content
lib/                   Site-wide configuration
public/about-us/        Story imagery
public/products/        Product imagery
```

The website uses real App Router pages at `/`, `/products`, `/services`, `/story` and `/contact`. Shared page chrome is assembled in `components/layout/site-shell.tsx`. Each page owns its scroll area and places the copyright notice after its full content rather than fixing it to the viewport. A small compatibility component redirects legacy hash links such as `/#products` to their current routes.

The application also includes branded loading, not-found, route-error and global-error states. The Contact section provides an embedded map and a direct Google Maps link.

## Content and assets

- Keep factual claims aligned with approved company source material.
- Store optimized public assets under `public/` with descriptive filenames.
- Preserve useful alternative text and confirm publication rights before adding media.
- Product card imagery is mapped in `data/products.ts`.
- Shared business identity, canonical domain and contact details are stored in `lib/site.ts`.
- Update the explicit copyright year in `components/layout/site-copyright.tsx` when required.

## Deployment

The application runs on platforms that support a Next.js Node server:

```bash
npm ci
npm run build
npm run start
```

Serve the production deployment over HTTPS and point the canonical domain to `https://www.medsiminnovations.com`.

After deployment:

1. Confirm the canonical domain, HTTPS redirect and security headers.
2. Submit `https://www.medsiminnovations.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
3. Test the Open Graph preview and organization structured data against the live URL.
4. Verify the contact links, map embed and all product images from the production region.
