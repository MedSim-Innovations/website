import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import mainImg from "@/public/main.jpg";
import logo from "@/public/logo.png";

const indieFlower = localFont({
  src: "../public/fonts/IndieFlower-Regular.ttf",
  display: "swap",
});

const links = [
  {
    label: "About us",
    href: "#about",
    color: "text-cyan-200 decoration-cyan-400 hover:text-white hover:bg-cyan-500/20",
  },
  {
    label: "Our products",
    href: "#our-products",
    color: "text-lime-200 decoration-lime-400 hover:text-white hover:bg-lime-500/20",
  },
  {
    label: "Contact",
    href: "#contact",
    color: "text-rose-200 decoration-rose-400 hover:text-white hover:bg-rose-500/20",
  },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-slate-950 text-white">
      <header className="relative z-10 mx-auto flex w-full flex-wrap items-center gap-x-4 gap-y-3 px-4 py-4 sm:px-6 sm:py-5 lg:gap-x-8 lg:px-10">
        <Link href="/" className="order-1 flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 sm:gap-3" aria-label="MedSim Innovations home">
          <Image src={logo} alt="" priority className="size-10 shrink-0 object-contain sm:size-12" />
          <span className="min-w-0">
            <span className="block text-xs font-bold uppercase leading-tight tracking-[0.08em] sm:text-base">MedSim Innovations</span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:block">Professional training solutions</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="order-3 flex w-full flex-wrap items-center justify-center gap-1 border-t border-white/10 pt-3 text-sm font-semibold sm:gap-2 lg:order-2 lg:ml-auto lg:w-auto lg:border-0 lg:pt-0">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={`rounded-full px-3 py-2 underline decoration-2 underline-offset-[6px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 sm:px-4 ${link.color}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="order-2 ml-auto inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-white px-3 text-xs font-bold text-slate-950 shadow-sm shadow-cyan-300/20 transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:px-5 sm:text-sm lg:order-3 lg:ml-0">
          Request a quote <span className="ml-1.5 text-base" aria-hidden="true">↗</span>
        </a>
      </header>

      <div className="relative isolate flex min-h-135 items-end justify-center sm:min-h-155 lg:min-h-175">
        <Image src={mainImg} alt="Healthcare professionals working together in a clinical setting" fill priority sizes="100vw" className="object-cover object-[48%_center] sm:object-center" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-8 pt-32 text-center sm:px-8 sm:pb-12 lg:pb-16">
          {/* <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200 sm:text-sm">One stop solution for nursing labs</p> */}
          <h1 id="hero-title" className="mx-auto max-w-5xl text-balance font-serif text-[clamp(2rem,5.5vw,4.2rem)] font-bold leading-[1.08] tracking-tight capitalize">
            Every human life deserves a
            <span className={`mt-2 block bg-linear-to-r from-cyan-200 via-teal-200 to-lime-200 bg-clip-text text-[clamp(2.75rem,7.2vw,6.5rem)] leading-[0.98] text-transparent ${indieFlower.className}`}>
              great clinical experience
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-100 sm:text-base sm:leading-7">
            Affordable, customizable simulation kits, skills-lab equipment and training support for nursing colleges and healthcare institutions.
          </p>
          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2 text-xs font-semibold text-slate-100 sm:text-sm">
            <span className="rounded-full border border-white/20 bg-slate-950/35 px-4 py-2 backdrop-blur">Ready procedure kits</span>
            <span className="rounded-full border border-white/20 bg-slate-950/35 px-4 py-2 backdrop-blur">Complete lab setup</span>
            <span className="rounded-full border border-white/20 bg-slate-950/35 px-4 py-2 backdrop-blur">Training &amp; support</span>
          </div>
          {/* <a href="#about" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-cyan-300 hover:bg-cyan-300 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            Explore who we are <span className="ml-2" aria-hidden="true">↓</span>
          </a> */}
        </div>
      </div>
    </section>
  );
}
