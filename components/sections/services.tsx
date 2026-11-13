import SiteCopyright from "@/components/layout/footer";

const services = [
  {
    number: "01",
    accent: "cyan",
    title: "Training program design",
    description: "Competency-led programs for healthcare and public-sector teams.",
    items: ["Needs and competency mapping", "Curriculum and simulation practice", "Assessment and trainer preparation"],
  },
  {
    number: "02",
    accent: "lime",
    title: "Healthcare content",
    description: "Clinically grounded content for learning, publishing and assessment.",
    items: ["Curricula and frameworks", "E-learning and scenarios", "Toolkits, manuals and textbooks"],
  },
  {
    number: "03",
    accent: "yellow",
    title: "Simulation centre setup",
    description: "Practical support from planning through faculty readiness and launch.",
    items: ["Strategy and roadmap", "Space and equipment planning", "Policies, pilots and launch"],
  },
  {
    number: "04",
    accent: "rose",
    title: "L&D and trainer development",
    description: "Internal learning capability built through workshops and mentoring.",
    items: ["L&D operating model", "Facilitation and debriefing", "Faculty mentoring and assessment"],
  },
  {
    number: "05",
    accent: "cyan",
    title: "Skills enhancement",
    description: "Role-based clinical upskilling and readiness assessment.",
    items: ["Critical and emergency care", "Life support and dialysis", "Exam and overseas readiness"],
  },
  {
    number: "06",
    accent: "lime",
    title: "Competition and sector skilling",
    description: "Standards, coaching and scalable workforce programs.",
    items: ["WorldSkills preparation", "Test projects and SOPs", "Government and sector programs"],
  },
] as const;

const accentStyles = {
  cyan: {
    border: "hover:border-cyan-300/40",
    text: "text-cyan-300",
    dot: "bg-cyan-300",
    glow: "from-cyan-300/12",
  },
  lime: {
    border: "hover:border-lime-300/40",
    text: "text-lime-300",
    dot: "bg-lime-300",
    glow: "from-lime-300/12",
  },
  yellow: {
    border: "hover:border-yellow-300/40",
    text: "text-yellow-300",
    dot: "bg-yellow-300",
    glow: "from-yellow-300/12",
  },
  rose: {
    border: "hover:border-rose-400/40",
    text: "text-rose-400",
    dot: "bg-rose-400",
    glow: "from-rose-400/12",
  },
};

const audiences = [
  "Nurses and nursing students",
  "Doctors",
  "Allied health and technicians",
  "Sales and business teams",
  "Quality and accreditation teams",
  "MedTech customers",
  "Government and skilling cohorts",
  "Publishers and e-learning providers",
];

const experience = [
  { area: "Hospital systems", detail: "Programs and instructor development at Medanta." },
  { area: "Public-sector skilling", detail: "State governments and the Healthcare Sector Skills Council." },
  { area: "Quality and accreditation", detail: "NABH-focused programs with AHPI and hospitals." },
  { area: "MedTech training", detail: "Clinical and product education for Helmier, Sterimed and Teleflex." },
  { area: "Publishing and content", detail: "International publishing and nursing textbook experience." },
  { area: "Skills competitions", detail: "WorldSkills projects, coaching and competition preparation." },
];

const credentials = [
  "PhD in Healthcare Simulation Education",
  "NABH assessor",
  "American Heart Association instructor",
  "Chair, INACSL India",
];

const metrics = [
  ["15+", "years in the field"],
  ["650+", "trainers guided"],
  ["20+", "clinical instructors led"],
  ["04", "delivery stages"],
];

const process = [
  { step: "Assess", text: "Define needs, gaps and success." },
  { step: "Design", text: "Shape the program, content and environment." },
  { step: "Deliver", text: "Prepare trainers and run the work." },
  { step: "Measure", text: "Review outcomes and improve." },
];

const engagementModels = ["Advisory", "Project consulting", "Program delivery", "Mentoring", "Speaking"];

export default function Services() {
  return (
    <section tabIndex={0} className="section-scroll h-full overflow-y-auto bg-black focus-visible:outline-none">
      <div className="mx-auto min-h-full w-full max-w-[1700px] px-5 pt-10 pb-20 sm:px-8 sm:pt-14 lg:px-12 2xl:px-16">
        <header className="relative overflow-hidden border-b border-white/10 pb-12">
          <div className="absolute -top-28 -right-24 size-80 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="absolute top-8 right-48 size-64 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[.22em] text-lime-300 uppercase">03 / Services and expertise</p>
              <h1 className="mt-4 max-w-5xl text-4xl leading-[1.02] font-semibold tracking-[-.045em] text-balance sm:text-6xl xl:text-7xl">
                From first idea to
                <br />
                <span className="text-cyan-300">measured results.</span>
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
            <div className="absolute bottom-0 -left-20 size-64 rounded-full bg-yellow-300/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-bold tracking-[.2em] text-yellow-300 uppercase">Designed for</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">
                Healthcare learners and teams.
              </h2>
            </div>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {audiences.map((audience, index) => (
              <div key={audience} className="flex items-center gap-4 bg-[#101010] p-5 sm:p-6">
                <span className="font-mono text-[10px] text-yellow-300/70">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm font-medium text-neutral-200">{audience}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="border-b border-white/10 pb-7">
            <p className="text-xs font-bold tracking-[.2em] text-rose-400 uppercase">Selected experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">Experience behind the work.</h2>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {experience.map((item) => (
              <article
                key={item.area}
                className="rounded-2xl border border-white/10 bg-white/[.025] p-6 transition hover:border-rose-400/30 hover:bg-rose-400/[.035]"
              >
                <h3 className="font-semibold text-white">{item.area}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#071316]">
          <div className="grid xl:grid-cols-[.9fr_1.1fr]">
            <div className="relative p-7 sm:p-10 lg:p-12">
              <div className="absolute top-0 right-0 size-72 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-bold tracking-[.2em] text-cyan-300 uppercase">Expert-led delivery</p>
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
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/[.06] px-3 py-1.5 text-[11px] text-cyan-100"
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
                  <p className="font-mono text-3xl text-cyan-300 sm:text-4xl">{value}</p>
                  <p className="mt-3 text-xs tracking-[.14em] text-neutral-400 uppercase">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[#11100a]">
          <div className="grid lg:grid-cols-[.75fr_1.25fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-bold tracking-[.2em] text-lime-300 uppercase">How we work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">
                Need to impact, in four steps.
              </h2>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {process.map((item, index) => (
                <article key={item.step} className="bg-[#15140d] p-7 sm:p-9">
                  <p className="font-mono text-xs text-lime-300">0{index + 1}</p>
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
      </div>
      <SiteCopyright />
    </section>
  );
}
