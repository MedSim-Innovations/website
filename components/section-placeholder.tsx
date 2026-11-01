type Props = { number: string; label: string; title: string; accent: "cyan" | "lime" | "yellow" };
const accents = { cyan: "text-cyan-300 border-cyan-300/30 bg-cyan-300/10", lime: "text-lime-300 border-lime-300/30 bg-lime-300/10", yellow: "text-yellow-300 border-yellow-300/30 bg-yellow-300/10" };

export default function SectionPlaceholder({ number, label, title, accent }: Props) {
  return (
    <section className="section-scroll grid h-full place-items-center overflow-y-auto px-5 py-12 sm:px-8">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-16 sm:px-12 sm:py-24">
        <div className="absolute -right-16 -top-20 size-72 rounded-full bg-cyan-300/[0.06] blur-3xl" />
        <p className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${accents[accent]}`}>{number} / {label}</p>
        <h1 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">{title}</h1>
        <div className="mt-10 h-px w-full bg-linear-to-r from-white/25 via-white/5 to-transparent" />
        <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">This section is architecturally ready for content. Its data and presentation can be added independently without changing navigation or transition logic.</p>
      </div>
    </section>
  );
}
