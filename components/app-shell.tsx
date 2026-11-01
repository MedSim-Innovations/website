"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Hero from "./hero";
import Navbar from "./navbar";
import Products from "./products";
import OurStory from "./our-story";
import Services from "./services";
import SectionPlaceholder from "./section-placeholder";
import { sectionIds, type SectionId } from "@/constants/types";

const sectionOrder = sectionIds.reduce<Record<SectionId, number>>((order, id, index) => ({ ...order, [id]: index }), {} as Record<SectionId, number>);

function sectionFromHash(): SectionId {
  if (typeof window === "undefined") return "home";
  const candidate = window.location.hash.slice(1);
  if (candidate === "applications") return "services";
  return sectionIds.includes(candidate as SectionId) ? (candidate as SectionId) : "home";
}

export default function AppShell() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [direction, setDirection] = useState(1);
  const currentSection = useRef<SectionId>("home");

  const showSection = useCallback((next: SectionId) => {
    const previous = currentSection.current;
    if (next === previous) return;
    setDirection(sectionOrder[next] > sectionOrder[previous] ? 1 : -1);
    currentSection.current = next;
    setActiveSection(next);
  }, []);

  const navigate = useCallback((next: SectionId) => {
    if (next === currentSection.current) return;
    window.history.pushState({ section: next }, "", next === "home" ? window.location.pathname : `#${next}`);
    showSection(next);
  }, [showSection]);

  useEffect(() => {
    const initial = sectionFromHash();
    if (initial !== currentSection.current) queueMicrotask(() => showSection(initial));
    const syncFromUrl = () => showSection(sectionFromHash());
    window.addEventListener("popstate", syncFromUrl);
    window.addEventListener("hashchange", syncFromUrl);
    return () => {
      window.removeEventListener("popstate", syncFromUrl);
      window.removeEventListener("hashchange", syncFromUrl);
    };
  }, [showSection]);

  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-black text-white">
      <Navbar activeSection={activeSection} onNavigate={navigate} />
      <main className="relative min-h-0 flex-1 overflow-hidden" aria-live="polite">
        <div key={activeSection} data-direction={direction} className="section-enter absolute inset-0 min-h-0 overflow-hidden">
          {activeSection === "home" && <Hero onExplore={() => navigate("products")} />}
          {activeSection === "products" && <Products />}
          {activeSection === "services" && <Services />}
          {activeSection === "story" && <OurStory />}
          {activeSection === "faqs" && <SectionPlaceholder number="05" label="FAQs" title="Clear answers for confident planning." accent="cyan" />}
          {activeSection === "contact" && <SectionPlaceholder number="06" label="Start a conversation" title="Let’s design a better simulation experience." accent="lime" />}
        </div>
      </main>
    </div>
  );
}
