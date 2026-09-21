# MedSim Innovations Website

The public website for **MedSim Innovations Private Limited**, a medical simulation and healthcare training company based in Gurugram, India.

MedSim Innovations provides affordable simulation technology, procedure kits, nursing skills-lab solutions, student essentials, installation support, and practical training resources for nursing colleges, medical colleges, hospitals, and healthcare professionals.

## Company contact

- **General and product enquiries:** [sales@medsiminnovations.com](mailto:sales@medsiminnovations.com)
- **Registered office:** Q-114, 3rd Floor, South City 1, Gurugram, Haryana 122001, India

For contribution proposals, accessibility reports, security concerns, or questions about this repository, email [sales@medsiminnovations.com](mailto:sales@medsiminnovations.com) with a clear subject and enough detail for the team to reproduce or review the request.

## Technology

- [Next.js 16](https://nextjs.org/) with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- shadcn components and Embla Carousel
- Lucide icons
- Resend HTTP API for contact-form email delivery

## Prerequisites

- Node.js 20.9 or newer
- npm 10 or newer
- A Resend API key only when testing real contact-form delivery

## Run locally

1. Clone the repository and enter the website directory:

   ```bash
   git clone https://github.com/MedSim-Innovations/website.git
   cd website
   ```

2. Install the locked dependencies:

   ```bash
   npm ci
   ```

3. Create your local environment file:

   ```bash
   cp .env.example .env.local
   ```

   On Windows PowerShell:

   ```powershell
   Copy-Item .env.example .env.local
   ```

4. Add a valid `RESEND_API_KEY` to `.env.local` if you need the contact form to send email. The rest of the website runs without it.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Production contact form only | Authenticates server-side contact email requests to Resend. |

Keep `.env.local` private. Environment files are ignored by Git, while `.env.example` documents the required keys without storing credentials.

The contact form sends from and to `sales@medsiminnovations.com`. Before production deployment, verify `medsiminnovations.com` as a sending domain in Resend and configure `RESEND_API_KEY` in the hosting platform’s server-side environment.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint across the project. |
| `npm run build` | Create and type-check an optimized production build. |
| `npm run start` | Serve the completed production build. |

Before opening a contribution, run:

```bash
npm run lint
npm run build
```

## Project structure

```text
app/                    Next.js routes, metadata, global styles, and server actions
components/             Page sections and shared interface components
components/ui/          Reusable shadcn interface primitives
lib/                    Shared utilities
public/about-us/        About-section imagery
public/products/        Product and simulation-lab imagery
public/fonts/           Locally hosted display fonts
```

The homepage is assembled in `app/page.tsx`. Its main sections live in `components/hero.tsx`, `components/about-us.tsx`, `components/products.tsx`, `components/contact.tsx`, and `components/site-footer.tsx`.

## Contact-form behavior

The server action in `app/actions/contact.ts`:

- validates required fields, field lengths, email format, and enquiry type;
- uses a honeypot to absorb common automated submissions;
- applies per-IP and global in-memory request limits;
- sends a plain-text email through Resend with a ten-second timeout; and
- returns visitor-safe errors without exposing provider responses or secrets.

The in-memory rate limiter applies independently to each running server instance. A multi-instance or high-traffic deployment should use shared rate limiting or managed bot protection.

## Contributing

1. Create a focused branch from the current default branch.
2. Keep changes small and aligned with the existing cyan, lime, and rose visual system.
3. Preserve responsive behavior, keyboard access, visible focus styles, reduced-motion support, semantic headings, and useful image alternative text.
4. Store optimized website assets under `public/` with descriptive filenames. Confirm publication rights before adding third-party media.
5. Run lint and the production build.
6. Summarize what changed, how it was tested, and any remaining limitations in the pull request.

For substantial content, product, architecture, or branding changes, contact [sales@medsiminnovations.com](mailto:sales@medsiminnovations.com) before implementation so the proposal can be reviewed with the MedSim Innovations team.

## Deployment

The application can run on any platform that supports a Next.js Node server.

```bash
npm ci
npm run build
npm run start
```

Configure `RESEND_API_KEY` in the deployment environment and serve the site over HTTPS. Do not expose the key through a `NEXT_PUBLIC_` variable.
