import AppLayout from "@/components/layouts/app-layout";
import faBookOpenSolid from "@/public/icons/book-open-solid-full.svg";
import faCircleCheckSolid from "@/public/icons/circle-check-solid-full.svg";
import faGlobeSolid from "@/public/icons/globe-solid-full.svg";
import faLightbulbSolid from "@/public/icons/lightbulb-solid-full.svg";
import faScrewdriverWrenchSolid from "@/public/icons/screwdriver-wrench-solid-full.svg";
import faUsersSolid from "@/public/icons/users-solid-full.svg";
import HospitalsImg from "@/public/images/about/hospitals.jpg";
import MedicalCollegesImg from "@/public/images/about/medical-colleges.jpg";
import NursingCollegesImg from "@/public/images/about/nursing-colleges.jpg";
import Image, { StaticImageData } from "next/image";

const pillars = [
  {
    icon: faLightbulbSolid,
    title: "Innovation",
    desc: "Continuous investment in credible, accessible simulation experiences that match real teaching constraints.",
  },
  {
    icon: faScrewdriverWrenchSolid,
    title: "Customization",
    desc: "Programs are adapted to each institution's budget, infrastructure, and learning outcomes.",
  },
  {
    icon: faCircleCheckSolid,
    title: "Quality and realism",
    desc: "Hands-on repetition should feel practical enough to improve judgment before learners reach live environments.",
  },
  {
    icon: faUsersSolid,
    title: "Support",
    desc: "From planning through rollout, teams get guidance that helps systems stick after purchase.",
  },
  {
    icon: faGlobeSolid,
    title: "Reach",
    desc: "The company is positioned to serve institutions that need global standards without luxury-only pricing.",
  },
  {
    icon: faBookOpenSolid,
    title: "Education-first thinking",
    desc: "Every solution is tied back to faculty delivery, curriculum alignment, and clinical confidence.",
  },
];

const customers: { title: string; img: StaticImageData; desc: string }[] = [
  {
    title: "Nursing colleges",
    img: NursingCollegesImg,
    desc: "Simulation kits that support structured skills labs, safer repetition, and stronger clinical readiness.",
  },
  {
    title: "Medical colleges",
    img: MedicalCollegesImg,
    desc: "Advanced training tools for teaching procedures, decision-making, and applied practice under supervision.",
  },
  {
    title: "Hospitals",
    img: HospitalsImg,
    desc: "Continuing education environments that support onboarding, competency review, and team preparedness.",
  },
];

export default function About() {
  return (
    <AppLayout>
      <section className="px-6 pb-16 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-8 py-14 shadow-2xl shadow-slate-950/20 sm:px-12">
          <div className="reveal-up">
            <p className="eyebrow">Who we are</p>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="reveal-up stagger-1">
              <h1 className="section-title max-w-4xl text-white">
                A simulation partner focused on making{" "}
                <span className="text-gradient">better clinical judgment more teachable.</span>
              </h1>
              <p className="section-copy mt-7 max-w-2xl">
                MedSim Innovations is built around a practical idea: healthcare training improves
                when institutions can deliver repeatable, realistic practice without depending on
                trial-and-error in live settings.
              </p>
              <p className="section-copy mt-5 max-w-2xl">
                The company serves nursing colleges, medical colleges, and hospitals looking for
                affordable, high-quality simulation systems that still feel contemporary and
                institution-ready.
              </p>
            </div>

            <div className="glass-panel reveal-up stagger-2 rounded-[2rem] border border-white/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Why simulation matters
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Safer learning environments let clinicians build competence before pressure is real.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                The site positions simulation as a patient-safety and education-quality issue, not
                just a product category. That is the right framing for institutional buyers.
              </p>
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/patient-safety"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/15"
              >
                WHO patient safety reference
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="glass-panel card-hover reveal-up rounded-[2rem] border border-emerald-300/15 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Mission
            </p>
            <h2 className="mt-5 font-[var(--font-display)] text-3xl font-semibold tracking-tight text-white">
              Raise clinical competency with advanced simulation technology that feels usable, not theoretical.
            </h2>
          </div>

          <div className="glass-panel card-hover reveal-up stagger-1 rounded-[2rem] border border-amber-300/15 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
              Vision
            </p>
            <h2 className="mt-5 font-[var(--font-display)] text-3xl font-semibold tracking-tight text-white">
              Make simulation-based education a standard layer of healthcare training, not an exception.
            </h2>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl reveal-up">
            <p className="eyebrow">Value pillars</p>
            <h2 className="section-title mt-7 text-white">A modern brand still has to sound operationally credible.</h2>
            <p className="section-copy mt-6">
              These pillars keep the messaging grounded in what institutional buyers actually need:
              reliability, support, realism, and clear educational value.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {pillars.map((item, index) => (
              <div
                key={item.title}
                className={`card-hover reveal-up rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 stagger-${(index % 5) + 1}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/10">
                  <Image src={item.icon} alt={item.title} className="h-7 w-7 brightness-0 invert" />
                </div>
                <h3 className="mt-6 font-[var(--font-display)] text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-up mb-10 max-w-3xl">
            <p className="eyebrow">Who we serve</p>
            <h2 className="section-title mt-7 text-white">Three buyer groups, one consistent promise: better readiness.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {customers.map((item, index) => (
              <article
                key={item.title}
                className={`glass-panel card-hover reveal-up overflow-hidden rounded-[2rem] border border-white/10 stagger-${index + 1}`}
              >
                <div className="relative h-72">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>
                <div className="p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    {item.title}
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-300">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
