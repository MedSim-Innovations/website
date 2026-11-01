import Image from "next/image";
import SaferWorkspaceImage from "@/public/about-us/safer-happy-workspace.jpg";
import { audiences, values } from "@/data/story";
import SiteCopyright from "@/components/layout/footer";

export default function OurStory() {
  return (
    <section className="section-scroll h-full overflow-y-auto bg-black">
      <div className="mx-auto min-h-full w-full max-w-[1700px] px-5 pt-10 pb-20 sm:px-8 sm:pt-14 lg:px-12 2xl:px-16">
        <header className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[.22em] text-yellow-300 uppercase">04 / Our story</p>
            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-.045em] text-balance sm:text-6xl xl:text-7xl">
              Training that moves
              <br />
              <span className="bg-linear-to-r from-cyan-300 via-lime-300 to-yellow-300 bg-clip-text text-transparent">
                care forward.
              </span>
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-neutral-400 sm:text-base lg:justify-self-end">
            MedSim Innovations is committed to improving healthcare education through affordable simulation technology,
            practical training systems and support that helps people build confidence before real patient-care moments.
          </p>
        </header>

        <article className="mt-8 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] lg:grid-cols-[1.05fr_.95fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="text-xs font-bold tracking-[.2em] text-cyan-300 uppercase">Who we are</p>
            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-[-.035em] text-balance sm:text-5xl">
              A safer place to practise. More confidence when it matters.
            </h2>
            <p className="mt-7 max-w-2xl leading-8 text-neutral-400">
              Our simulation kits, lab solutions and learning services give healthcare professionals a controlled place
              to practise, repeat and refine clinical skills. By bringing practical learning closer to the curriculum,
              we help institutions reduce the gap between knowing and doing.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Improve procedural accuracy",
                "Strengthen rapid decisions",
                "Build confidence with complex cases",
                "Practise teamwork and communication",
              ].map((item) => (
                <p
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-neutral-200"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden lg:min-h-[560px]">
            <Image
              src={SaferWorkspaceImage}
              alt="Healthcare professional in a clinical workplace"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[42%_center]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-8 bottom-8">
              <p className="font-mono text-xs tracking-[.2em] text-cyan-300 uppercase">Practice / Reflect / Improve</p>
              <p className="mt-3 max-w-md text-2xl font-semibold">
                Designed for the people who teach, learn and deliver care.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-yellow-300/20 bg-yellow-300 p-7 text-black sm:p-10">
            <p className="text-xs font-black tracking-[.2em] uppercase">Mission</p>
            <h2 className="mt-12 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">
              Empower clinical competency.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-black/70">
              To advance healthcare education through practical medical simulation technology and learning solutions
              that help professionals develop the competency required for high standards of patient care.
            </p>
          </article>
          <article className="rounded-[2rem] border border-cyan-300/20 bg-[#071316] p-7 sm:p-10">
            <p className="text-xs font-black tracking-[.2em] text-cyan-300 uppercase">Vision</p>
            <h2 className="mt-12 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">
              Simulation at the heart of training.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-neutral-400">
              A world where simulation-based education is a cornerstone of healthcare training, contributing to better
              patient outcomes and stronger quality of care.
            </p>
          </article>
        </div>

        <section className="mt-16">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[.2em] text-lime-300 uppercase">What we stand for</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">Our value system</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-neutral-500">
              Principles that shape the products, programs and partnerships we build.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <article key={value.title} className="bg-[#080808] p-6 sm:p-8">
                <p className="font-mono text-xs text-neutral-600">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-8 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-500">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="text-xs font-bold tracking-[.2em] text-cyan-300 uppercase">Who we serve</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-5xl">
            Built around real learning environments.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {audiences.map((audience) => (
              <article
                key={audience.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] transition hover:-translate-y-1 hover:border-cyan-300/35"
              >
                <div className="relative h-52 overflow-hidden sm:h-64">
                  <Image
                    src={audience.image}
                    alt={audience.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-6 font-mono text-xs text-cyan-300">{audience.number}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{audience.title}</h3>
                    <span className="text-neutral-700 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                      →
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500">{audience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <SiteCopyright />
    </section>
  );
}
