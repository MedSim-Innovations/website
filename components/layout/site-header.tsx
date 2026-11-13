"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Oxygen } from "next/font/google";
import CompanyLogo from "@/public/logo.png";
import { navigationItems } from "@/content/navigation";
import Icon from "@/components/ui/icon";
import { ICON_PATHS } from "@/components/ui/icons";

const oxygen = Oxygen({ weight: "700", subsets: ["latin"], display: "swap" });

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const mobileMenu = useRef<HTMLDivElement>(null);

  // The overlay behaves like a modal on small screens: focus stays inside and returns to its trigger.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = mobileMenu.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButton.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const contactActive = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 h-20 shrink-0 border-b border-white/10 bg-black/95 text-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full w-full max-w-[1700px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12 2xl:px-16"
      >
        <Link
          href="/"
          aria-label="MedSim Innovations home"
          className="group focus-visible:outline-brand-primary flex min-w-0 shrink-0 items-center gap-2.5 text-left focus-visible:outline-2 sm:gap-3"
        >
          <Image src={CompanyLogo} alt="" priority className="size-11 shrink-0 object-contain sm:size-12" />
          <span className="flex min-w-0 flex-col">
            <span
              className={`${oxygen.className} group-hover:text-brand-primary text-[13px] leading-tight tracking-[.04em] uppercase transition-colors sm:text-[15px] xl:text-base`}
            >
              MedSim Innovations
            </span>
            <span className="mt-1 hidden text-[10px] tracking-[.04em] text-neutral-400 sm:block xl:text-[11px]">
              Professional Training Solutions
            </span>
          </span>
        </Link>

        <div className="hidden h-full items-center gap-5 xl:flex xl:gap-8">
          <div className="flex h-full items-center gap-5 xl:gap-7">
            {navigationItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group focus-visible:outline-brand-primary relative flex h-full items-center text-[13px] font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 xl:text-sm ${active ? "text-white" : "text-neutral-400 hover:text-white"}`}
                >
                  {item.label}
                  <span
                    className={`to-brand-secondary absolute bottom-5 left-0 h-0.5 rounded-full bg-linear-to-r from-cyan-400 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>
          <Link
            href="/contact"
            aria-current={contactActive ? "page" : undefined}
            className={`group bg-brand-action hover:bg-brand-action-hover focus-visible:outline-brand-action-accent flex min-h-11 items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(244,63,94,.25)] focus-visible:outline-2 focus-visible:outline-offset-4 xl:px-5 xl:text-sm ${contactActive ? "ring-2 ring-rose-300/50" : ""}`}
          >
            Let&apos;s talk simulation
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </Link>
        </div>

        <button
          ref={menuButton}
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
          className={`focus-visible:outline-brand-primary grid size-11 place-items-center rounded-lg border transition focus-visible:outline-2 xl:hidden ${isMenuOpen ? "border-brand-primary bg-brand-primary/10 text-brand-primary" : "border-white/15 bg-white/5"}`}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="text-xl">
            {isMenuOpen ? (
              <Icon path={ICON_PATHS.xMark} className="h-4 w-4" />
            ) : (
              <Icon path={ICON_PATHS.barsStaggered} className="h-4 w-4" />
            )}
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        inert={!isMenuOpen}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-x-0 top-20 bottom-0 z-40 transition-[opacity,visibility] duration-300 xl:hidden ${isMenuOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        />
        <div
          ref={mobileMenu}
          className={`absolute inset-y-0 right-0 flex w-[min(86vw,390px)] flex-col border-l border-white/10 bg-[#080808] shadow-[-25px_0_70px_rgba(0,0,0,.7)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <p className="text-brand-secondary border-b border-white/10 px-6 py-6 text-[11px] font-bold tracking-[.2em] uppercase">
            Explore MedSim
          </p>
          <div className="section-scroll flex-1 overflow-y-auto px-3 py-4">
            {navigationItems.map((item, index) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-16 w-full items-center justify-between rounded-lg px-4 text-left transition hover:bg-white/5 ${active ? "text-brand-primary" : "text-neutral-100"}`}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[11px] font-bold text-cyan-400/70">{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-[10px] tracking-[.16em] text-neutral-400 uppercase">
                        {item.eyebrow}
                      </span>
                      <span className="text-lg font-semibold">{item.label}</span>
                    </span>
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              );
            })}
          </div>
          <div className="border-t border-white/10 p-5">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              aria-current={contactActive ? "page" : undefined}
              className="bg-brand-action hover:bg-brand-action-hover flex min-h-14 w-full items-center justify-center rounded-lg font-bold text-white transition focus-visible:outline-2 focus-visible:outline-rose-300"
            >
              Let&apos;s talk simulation ↗
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
