"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Oxygen } from "next/font/google";
import CompanyLogo from "@/public/logo.png";
import { navigationItems } from "@/constants/navigation";
import type { SectionId } from "@/constants/types";

const oxygen = Oxygen({ weight: "700", subsets: ["latin"], display: "swap" });
type Props = { activeSection: SectionId; onNavigate: (section: SectionId) => void };

export default function Navbar({ activeSection, onNavigate }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navigate = (section: SectionId) => { onNavigate(section); setIsMenuOpen(false); };
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && isMenuOpen) { setIsMenuOpen(false); menuButton.current?.focus(); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isMenuOpen]);

  return <header className="relative z-50 h-20 shrink-0 border-b border-white/10 bg-black text-white">
    <nav aria-label="Main navigation" className="mx-auto flex h-full w-full max-w-[1700px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12 2xl:px-16">
      <button type="button" onClick={() => navigate("home")} aria-label="MedSim Innovations home" className="group flex min-w-0 shrink-0 items-center gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-cyan-300 sm:gap-3">
        <Image src={CompanyLogo} alt="" priority className="size-11 shrink-0 object-contain sm:size-12" />
        <span className="flex min-w-0 flex-col"><span className={`${oxygen.className} text-[13px] uppercase leading-tight tracking-[.04em] transition-colors group-hover:text-cyan-300 sm:text-[15px] xl:text-base`}>MedSim Innovations</span><span className="mt-1 hidden text-[10px] tracking-[.04em] text-neutral-500 sm:block xl:text-[11px]">Professional Training Solutions</span></span>
      </button>
      <div className="hidden h-full items-center gap-5 xl:flex xl:gap-8">
        <div className="flex h-full items-center gap-5 xl:gap-7">{navigationItems.map((item) => { const active = activeSection === item.id; return <button key={item.id} type="button" onClick={() => navigate(item.id)} aria-current={active ? "page" : undefined} className={`group relative flex h-full items-center whitespace-nowrap text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 xl:text-sm ${active ? "text-white" : "text-neutral-400 hover:text-white"}`}>{item.label}<span className={`absolute bottom-5 left-0 h-0.5 rounded-full bg-linear-to-r from-cyan-400 to-lime-300 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} /></button>; })}</div>
        <button type="button" onClick={() => navigate("contact")} className="group flex min-h-11 items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-[13px] font-bold text-black transition hover:-translate-y-0.5 hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 xl:px-5 xl:text-sm">Let&apos;s talk simulation <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></button>
      </div>
      <button ref={menuButton} type="button" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((value) => !value)} className={`grid size-11 place-items-center rounded-lg border transition focus-visible:outline-2 focus-visible:outline-cyan-300 xl:hidden ${isMenuOpen ? "border-cyan-300 bg-cyan-300/10 text-cyan-300" : "border-white/15 bg-white/5"}`}><span className="sr-only">Menu</span><span aria-hidden="true" className="text-xl">{isMenuOpen ? "×" : "≡"}</span></button>
    </nav>
    <div id="mobile-navigation" aria-hidden={!isMenuOpen} className={`fixed inset-x-0 bottom-0 top-20 z-40 transition-[opacity,visibility] duration-300 xl:hidden ${isMenuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`}>
      <button type="button" tabIndex={-1} aria-label="Close menu" onClick={() => setIsMenuOpen(false)} className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div className={`absolute inset-y-0 right-0 flex w-[min(86vw,390px)] flex-col border-l border-white/10 bg-[#080808] shadow-[-25px_0_70px_rgba(0,0,0,.7)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <p className="border-b border-white/10 px-6 py-6 text-[11px] font-bold uppercase tracking-[.2em] text-lime-300">Explore MedSim</p>
        <div className="section-scroll flex-1 overflow-y-auto px-3 py-4">{navigationItems.map((item, index) => <button key={item.id} type="button" onClick={() => navigate(item.id)} aria-current={activeSection === item.id ? "page" : undefined} className={`flex min-h-16 w-full items-center justify-between rounded-lg px-4 text-left transition hover:bg-white/5 ${activeSection === item.id ? "text-cyan-300" : "text-neutral-100"}`}><span className="flex items-center gap-4"><span className="text-[11px] font-bold text-cyan-400/70">{String(index + 1).padStart(2, "0")}</span><span><span className="block text-[10px] uppercase tracking-[.16em] text-neutral-600">{item.eyebrow}</span><span className="text-lg font-semibold">{item.label}</span></span></span><span aria-hidden="true">→</span></button>)}</div>
        <div className="border-t border-white/10 p-5"><button type="button" onClick={() => navigate("contact")} aria-current={activeSection === "contact" ? "page" : undefined} className="min-h-14 w-full rounded-lg bg-cyan-300 font-bold text-black">Let&apos;s talk simulation ↗</button></div>
      </div>
    </div>
  </header>;
}
