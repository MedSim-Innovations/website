import PageContainer from "@/components/ui/page-container";
import {
  credentials,
  engagementModels,
  experience,
  metrics,
  serviceAudiences,
  serviceProcess,
  services,
} from "@/content/services";

const accentStyles = {
  cyan: {
    border: "hover:border-brand-primary/40",
    text: "text-brand-primary",
    dot: "bg-brand-primary",
    glow: "from-brand-primary/12",
  },
  lime: {
    border: "hover:border-brand-secondary/40",
    text: "text-brand-secondary",
    dot: "bg-brand-secondary",
    glow: "from-brand-secondary/12",
  },
  yellow: {
    border: "hover:border-brand-highlight/40",
    text: "text-brand-highlight",
    dot: "bg-brand-highlight",
    glow: "from-brand-highlight/12",
  },
  rose: {
    border: "hover:border-brand-action-accent/40",
    text: "text-brand-action-accent",
    dot: "bg-brand-action-accent",
    glow: "from-brand-action-accent/12",
  },
};

export default function ServicesPageContent() {
  return (
    <section className="min-h-[calc(100dvh-5rem)] bg-black">
      <PageContainer className="pt-10 pb-20 sm:pt-14">
        <header className="relative overflow-hidden border-b border-white/10 pb-12">
          <div className="bg-brand-highlight/10 absolute -top-28 -right-24 size-80 rounded-full blur-3xl" />
          <div className="bg-brand-primary/10 absolute top-8 right-48 size-64 rounded-full blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div>
              <p className="text-brand-secondary text-xs font-bold tracking-[.22em] uppercase">
                03 / Services and expertise
              </p>
              <h1 className="mt-4 max-w-5xl text-4xl leading-[1.02] font-semibold tracking-[-.045em] text-balance sm:text-6xl xl:text-7xl">
                From first idea to
                <br />
                <span className="text-brand-primary">measured results.</span>
              </h1>
            </div>
            <p className="max-w-xl text-sm leading-7 text-neutral-400 sm:text-base lg:justify-self-end">
              Simulation, training and content solutions built around clear competencies and measurable outcomes.
            </p>
          </div>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const style = accentStyles[service.accent];

            return (
              <article
                key={service.title}
                className={`group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${style.border}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b ${style.glow} to-transparent opacity-0 transition group-hover:opacity-100`}
                />
                <div className="relative flex items-center justify-between">
                  <p className={`font-mono text-xs ${style.text}`}>{service.number}</p>
                  <span className={`size-2 rounded-full ${style.dot}`} />
                </div>
                <h2 className="relative mt-8 text-2xl font-semibold tracking-[-.025em]">{service.title}</h2>
                <p className="relative mt-3 text-sm leading-6 text-neutral-400">{service.description}</p>
                <ul className="relative mt-auto space-y-2 border-t border-white/10 pt-5">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-neutral-300">
                      <span className={`mt-2 size-1.5 shrink-0 rounded-full ${style.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <section className="mt-16 grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] lg:grid-cols-[.75fr_1.25fr]">
          <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
            <div className="bg-brand-highlight/10 absolute bottom-0 -left-20 size-64 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-brand-highlight text-xs font-bold tracking-[.2em] uppercase">Designed for</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">
                Healthcare learners and teams.
              </h2>
            </div>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {serviceAudiences.map((audience, index) => (
              <div key={audience} className="flex items-center gap-4 bg-[#101010] p-5 sm:p-6">
                <span className="text-brand-highlight/70 font-mono text-[10px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium text-neutral-200">{audience}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="border-b border-white/10 pb-7">
            <p className="text-brand-action-accent text-xs font-bold tracking-[.2em] uppercase">Selected experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">Experience behind the work.</h2>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {experience.map((item) => (
              <article
                key={item.area}
                className="hover:border-brand-action-accent/30 hover:bg-brand-action-accent/[.035] rounded-2xl border border-white/10 bg-white/[.025] p-6 transition"
              >
                <h3 className="font-semibold text-white">{item.area}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-brand-primary/20 mt-16 overflow-hidden rounded-[2rem] border bg-[#071316]">
          <div className="grid xl:grid-cols-[.9fr_1.1fr]">
            <div className="relative p-7 sm:p-10 lg:p-12">
              <div className="bg-brand-primary/10 absolute top-0 right-0 size-72 rounded-full blur-3xl" />
              <div className="relative">
                <p className="text-brand-primary text-xs font-bold tracking-[.2em] uppercase">Expert-led delivery</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Dr. Jaideep Herbert</h2>
                <p className="mt-3 text-sm font-semibold text-neutral-200">
                  International Expert and Consultant in Healthcare Training and Development
                </p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-400">
                  More than 15 years across simulation, faculty development, accreditation, publishing and skills
                  competitions.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {credentials.map((item) => (
                    <span
                      key={item}
                      className="border-brand-primary/20 bg-brand-primary/[.06] rounded-full border px-3 py-1.5 text-[11px] text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs leading-6 text-neutral-400">
                  2025 INACSL Best Practice Innovator Award recipient and its first Asian recipient.
                </p>
              </div>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-3 xl:grid-cols-2">
              {metrics.map(([value, label]) => (
                <div key={label} className="bg-[#09181b] p-7 sm:p-9">
                  <p className="text-brand-primary font-mono text-3xl sm:text-4xl">{value}</p>
                  <p className="mt-3 text-xs tracking-[.14em] text-neutral-400 uppercase">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[#11100a]">
          <div className="grid lg:grid-cols-[.75fr_1.25fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-brand-secondary text-xs font-bold tracking-[.2em] uppercase">How we work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">
                Need to impact, in four steps.
              </h2>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {serviceProcess.map((item, index) => (
                <article key={item.step} className="bg-[#15140d] p-7 sm:p-9">
                  <p className="text-brand-secondary font-mono text-xs">0{index + 1}</p>
                  <h3 className="mt-7 text-2xl font-semibold">{item.step}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[.025] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs font-bold tracking-[.18em] text-neutral-400 uppercase">Ways to engage</p>
            <div className="flex flex-wrap gap-2">
              {engagementModels.map((model) => (
                <span
                  key={model}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-neutral-300"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>
        </section>
      </PageContainer>
    </section>
  );
}
