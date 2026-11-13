import type { ReactNode } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-black text-white">
      <a
        href="#main-content"
        className="bg-brand-primary fixed top-3 left-3 z-[100] -translate-y-20 rounded-md px-4 py-2 font-semibold text-black transition-transform focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <div className="section-enter">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
