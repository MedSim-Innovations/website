export default function LoadingPage() {
  return (
    <main className="flex min-h-dvh flex-col bg-black text-white" aria-label="Loading MedSim Innovations">
      <div className="h-20 shrink-0 border-b border-white/10 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between">
          <div className="h-10 w-52 animate-pulse rounded-lg bg-white/10" />
          <div className="hidden gap-4 lg:flex">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-3 w-16 animate-pulse rounded-full bg-white/10" />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-[1700px] flex-1 items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <div className="h-3 w-40 animate-pulse rounded-full bg-cyan-300/25" />
          <div className="mt-8 h-16 max-w-xl animate-pulse rounded-2xl bg-white/10 sm:h-24" />
          <div className="mt-4 h-16 max-w-lg animate-pulse rounded-2xl bg-white/[.06]" />
          <div className="mt-8 h-4 max-w-md animate-pulse rounded-full bg-white/[.06]" />
          <span className="sr-only">Loading…</span>
        </div>
        <div className="mx-auto aspect-square w-full max-w-lg animate-pulse rounded-full border border-cyan-300/15 bg-cyan-300/[.04]" />
      </div>
    </main>
  );
}
