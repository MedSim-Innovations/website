import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Products", href: "/products" },
];

export default function Footer() {
  return (
    <footer className="page-layer border-t border-white/10 bg-slate-950/50 px-6 py-12 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">Clinical simulation, elevated</p>
          <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Professional training environments deserve a digital presence with the same precision.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            MedSim Innovations helps institutions modernize hands-on healthcare training with credible, scalable simulation systems.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:text-right">
          <div>
            <p className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Navigate
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base text-slate-200 transition hover:text-cyan-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3 text-base text-slate-200">
              <a href="mailto:sales@medsiminnovations.com" className="transition hover:text-cyan-200">
                sales@medsiminnovations.com
              </a>
              <a href="tel:+919971466122" className="transition hover:text-cyan-200">
                +91 99714 66122
              </a>
              <p className="max-w-sm text-slate-400 lg:ml-auto">
                South City 1, Gurgaon, Haryana 122001, India
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 MedSim Innovations. All rights reserved.</p>
        <div className="flex gap-5">
          <span>Privacy policy coming soon</span>
          <span>Terms of service coming soon</span>
        </div>
      </div>
    </footer>
  );
}
