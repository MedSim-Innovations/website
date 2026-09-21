import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "@/public/logo.png";

const navigation = [
  { label: "About us", href: "#about", color: "hover:text-cyan-300" },
  { label: "Our products", href: "#our-products", color: "hover:text-lime-300" },
  { label: "Contact", href: "#contact", color: "hover:text-rose-300" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 px-5 text-white sm:px-8">
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 size-112 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl py-10 sm:py-12">
        <div className="grid gap-10 border-b border-white/10 pb-10 text-center md:grid-cols-[1.2fr_0.65fr_1fr] md:gap-12 md:text-left">
          <div>
            <a
              href="#top"
              className="inline-flex items-center justify-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 md:justify-start"
              aria-label="MedSim Innovations home"
            >
              <Image src={logo} alt="" className="size-13 object-contain sm:size-14" />
              <span>
                <span className="block text-base font-extrabold uppercase tracking-[0.08em]">
                  MedSim Innovations
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Professional training solutions
                </span>
              </span>
            </a>
            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-300 md:mx-0">
              Affordable medical simulation technology and practical training
              solutions for nursing colleges, medical colleges, and hospitals.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-slate-950 transition-colors hover:bg-rose-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-300"
            >
              Start an enquiry <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`inline-flex py-1 text-sm font-semibold text-slate-300 transition-colors focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${item.color}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </p>
            <div className="mt-5 space-y-5">
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <Mail className="mt-0.5 size-5 shrink-0 text-rose-300" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:sales@medsiminnovations.com"
                    className="mt-1 block break-all text-sm font-semibold text-slate-200 underline-offset-4 hover:text-rose-300 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-300"
                  >
                    sales@medsiminnovations.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <MapPin className="mt-0.5 size-5 shrink-0 text-lime-300" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Registered office
                  </p>
                  <address className="mt-1 text-sm not-italic leading-6 text-slate-200">
                    Q-114, 3rd Floor, South City 1
                    <br />
                    Gurugram, Haryana 122001, India
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-center text-xs text-slate-500 md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p>© {new Date().getFullYear()} MedSim Innovations Private Limited. All rights reserved.</p>
            <p className="mt-1 text-[10px] tracking-[0.04em]">
              CIN <span className="font-mono">U46596HR2024PTC125730</span>
            </p>
          </div>
          <p className="md:text-right">Incorporated in India · 24 October 2024</p>
        </div>
      </div>
    </footer>
  );
}
