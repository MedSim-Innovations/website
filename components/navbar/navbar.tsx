"use client";

import logo from "@/public/images/favicon.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const menuLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      setRendered(true);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:px-6">
          <Link href="/" className="mr-auto flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
              <Image src={logo} alt="MedSim Innovations logo" className="h-7 w-7" />
            </div>
            <div>
              <p className="font-[var(--font-display)] text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">
                MedSim
              </p>
              <p className="font-[var(--font-display)] text-base font-semibold tracking-tight text-white">
                Innovations
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {menuLinks.map((item) => {
              const active = pathname === item.link;

              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition ${
                    active
                      ? "bg-white text-slate-950"
                      : "text-slate-300 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="animated-border pulse-glow ml-4 hidden rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide text-white md:inline-flex"
          >
            Book a Demo
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="ml-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {rendered && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/70 px-4 pt-24 backdrop-blur-xl md:hidden"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 220ms ease",
          }}
          onTransitionEnd={() => {
            if (!menuOpen) setRendered(false);
          }}
        >
          <div
            className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[2rem] border border-white/10 bg-slate-950/90 p-5 shadow-2xl"
            style={{
              transform: visible ? "translateY(0)" : "translateY(-10px)",
              opacity: visible ? 1 : 0,
              transition: "transform 240ms ease, opacity 240ms ease",
            }}
          >
            {menuLinks.map((item, index) => {
              const active = pathname === item.link;

              return (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-4 text-lg font-semibold transition ${
                    active
                      ? "bg-white text-slate-950"
                      : "bg-white/5 text-slate-100 hover:bg-white/10"
                  }`}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(-8px)",
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  {item.title}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl bg-cyan-300 px-4 py-4 text-center text-lg font-semibold text-slate-950"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
