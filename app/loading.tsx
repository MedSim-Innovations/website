import Image from "next/image";
import CompanyLogo from "@/public/logo.png";

export default function LoadingPage() {
  return (
    <div
      className="flex min-h-dvh flex-col bg-black text-white"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading MedSim Innovations page"
    >
      <header className="flex h-20 shrink-0 items-center border-b border-white/10 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-[1700px] items-center gap-3">
          <Image src={CompanyLogo} alt="" priority className="size-11 object-contain sm:size-12" />
          <span className="text-sm font-bold tracking-[.04em] uppercase sm:text-base">MedSim Innovations</span>
        </div>
      </header>

      <main className="grid flex-1 place-items-center px-5 py-16 text-center">
        <div className="w-full max-w-sm">
          <div className="relative mx-auto size-14" aria-hidden="true">
            <span className="border-brand-primary/25 absolute inset-0 rounded-full border" />
            <span className="border-brand-primary absolute inset-0 animate-spin rounded-full border-2 border-r-transparent border-b-transparent motion-reduce:animate-none" />
            <span className="bg-brand-primary absolute inset-5 rounded-full" />
          </div>

          <p className="mt-6 text-lg font-semibold">Loading page…</p>
          <p className="mt-2 text-sm leading-6 text-neutral-400">Preparing the MedSim Innovations experience.</p>
        </div>
      </main>
    </div>
  );
}
