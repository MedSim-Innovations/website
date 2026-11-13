import type { ReactNode } from "react";
import Navbar from "./navbar";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-black text-white">
      <Navbar />
      <main className="relative min-h-0 flex-1 overflow-hidden">
        <div className="section-enter absolute inset-0 min-h-0 overflow-hidden">{children}</div>
      </main>
    </div>
  );
}
