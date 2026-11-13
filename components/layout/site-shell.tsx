import type { ReactNode } from "react";
import Navbar from "./navbar";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-black text-white">
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[100] -translate-y-20 rounded-md bg-cyan-300 px-4 py-2 font-semibold text-black transition-transform focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="relative min-h-0 flex-1 overflow-hidden outline-none">
        <div className="section-enter absolute inset-0 min-h-0 overflow-hidden">{children}</div>
      </main>
    </div>
  );
}
