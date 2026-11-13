# Changelog

Notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and releases use semantic versioning.

## [Unreleased]

## [1.1.0] - 2026-11-13

### Added

- Automated desktop and mobile browser, responsive, keyboard-navigation, and WCAG accessibility testing.
- GitHub Actions quality gate and contribution templates.
- Contributor, security, conduct, and release documentation.
- Maintainer guidance in `AGENTS.md` and a concise accessibility statement.
- Skip navigation and improved mobile-menu keyboard behavior.
- Content Security Policy and additional browser security headers.
- Semantic brand color tokens and a shared responsive page container.
- Accessible Google Maps integration with a separate directions link.
- A privacy notice covering infrastructure logs, voluntary contact, and third-party map behavior.
- Automated 320 CSS-pixel reflow coverage and documented manual accessibility review.
- GitHub Actions dependency updates through Dependabot.

### Changed

- Simplified the project structure around routes, shared UI, page presentation, and centralized content.
- Centralized company, contact, navigation, catalogue, and map configuration.
- Updated dependency automation, CI action versions, auditing, and toolchain compatibility.
- Removed manually maintained sitemap modification dates.
- Replaced nested app-style scrolling with conventional document scrolling.
- Standardized the expressive brand palette, responsive layout behavior, page-entry motion, and shared footer.
- Replaced the route-specific loading skeleton with a compact, route-neutral loading state.
- Improved screen-reader announcements for contact methods.
- Updated the organization profile, repository documentation, and contribution guidance.

### Removed

- Legacy home-page hash redirects and their client-side routing code.
- Empty legacy feature, routing, constants, and data folders superseded by the simplified structure.

## [1.0.0] - 2026-11-12

### Added

- Initial production website with product, services, story, and contact pages.
- Searchable and filterable product catalogue.
- Responsive navigation, metadata, structured data, sitemap, robots rules, and branded error states.

[Unreleased]: https://github.com/MedSim-Innovations/website/compare/v1.1.0...development
[1.1.0]: https://github.com/MedSim-Innovations/website/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/MedSim-Innovations/website/releases/tag/v1.0.0
