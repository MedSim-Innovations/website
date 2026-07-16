import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Images
import hospitalsImg from "@/public/images/home/hospitals.jpg";
import medicalCollegesImg from "@/public/images/home/medical-colleges.jpg";
import nursingCollegesImg from "@/public/images/home/nursing-colleges.jpg";

// Icons
import faBookOpenSolid from "@/public/icons/home/book-open-solid-full.svg";
import faLightbulbSolid from "@/public/icons/home/lightbulb-solid-full.svg";
import faScrewdriverWrenchSolid from "@/public/icons/home/screwdriver-wrench-solid-full.svg";
import faCircleCheckSolid from "@/public/icons/home/circle-check-solid-full.svg";
import faUsersSolid from "@/public/icons/home/users-solid-full.svg";
import faGlobeSolid from "@/public/icons/home/globe-solid-full.svg";

type Accent = {
  chipBg: string; // soft tint for icon chip
  chipBorder: string;
  ring: string; // hover border on the card
  badge: string; // solid pill/badge background
  bar: string; // solid underline / top-bar
};

type ValuePillar = {
  icon: string | StaticImport;
  title: string;
  desc: string;
  accent: Accent;
};

type Customer = {
  image: StaticImport;
  title: string;
  desc: string;
  accent: Accent;
};

// A restrained, professional palette — soft tints rather than saturated
// fills, so color reads as organization/wayfinding, not decoration.
const accents = {
  amber: {
    chipBg: "bg-amber-50",
    chipBorder: "border-amber-200",
    ring: "hover:border-amber-300",
    badge: "bg-amber-600",
    bar: "bg-amber-500",
  },
  indigo: {
    chipBg: "bg-indigo-50",
    chipBorder: "border-indigo-200",
    ring: "hover:border-indigo-300",
    badge: "bg-indigo-600",
    bar: "bg-indigo-500",
  },
  teal: {
    chipBg: "bg-teal-50",
    chipBorder: "border-teal-200",
    ring: "hover:border-teal-300",
    badge: "bg-teal-600",
    bar: "bg-teal-500",
  },
  emerald: {
    chipBg: "bg-emerald-50",
    chipBorder: "border-emerald-200",
    ring: "hover:border-emerald-300",
    badge: "bg-emerald-600",
    bar: "bg-emerald-500",
  },
  rose: {
    chipBg: "bg-rose-50",
    chipBorder: "border-rose-200",
    ring: "hover:border-rose-300",
    badge: "bg-rose-600",
    bar: "bg-rose-500",
  },
  sky: {
    chipBg: "bg-sky-50",
    chipBorder: "border-sky-200",
    ring: "hover:border-sky-300",
    badge: "bg-sky-600",
    bar: "bg-sky-500",
  },
} satisfies Record<string, Accent>;

const valuePillars: ValuePillar[] = [
  {
    icon: faLightbulbSolid,
    title: "Innovation",
    desc: "Continuous investment in R&D to bring the latest simulation technology to market.",
    accent: accents.amber,
  },
  {
    icon: faScrewdriverWrenchSolid,
    title: "Customization",
    desc: "Tailored simulation solutions designed to meet the specific needs of each client.",
    accent: accents.indigo,
  },
  {
    icon: faCircleCheckSolid,
    title: "Quality & Realism",
    desc: "High standards that ensure our simulators deliver truly lifelike learning experiences.",
    accent: accents.teal,
  },
  {
    icon: faUsersSolid,
    title: "Support",
    desc: "End-to-end service from installation to ongoing maintenance, training, and assistance.",
    accent: accents.emerald,
  },
  {
    icon: faGlobeSolid,
    title: "Global Reach",
    desc: "A worldwide network of distributors and partners serving clients across regions.",
    accent: accents.rose,
  },
  {
    icon: faBookOpenSolid,
    title: "Education",
    desc: "Bridging theory and clinical practice with curriculum-aligned simulation tools.",
    accent: accents.sky,
  },
];

const customers: Customer[] = [
  {
    image: nursingCollegesImg,
    title: "Nursing Colleges",
    desc: "Training kits specifically designed for nursing education and practical training.",
    accent: accents.emerald,
  },
  {
    image: medicalCollegesImg,
    title: "Medical Colleges",
    desc: "Advanced tools for medical students and residents to enhance hands-on learning.",
    accent: accents.teal,
  },
  {
    image: hospitalsImg,
    title: "Hospitals",
    desc: "Supporting professional development and competency assessments for healthcare providers.",
    accent: accents.rose,
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative border-b border-slate-100 px-5 py-24 sm:px-8 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(217,119,6,0.06), transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            Who We Are
          </p>

          <h1 className="mx-auto max-w-5xl font-serif text-3xl font-bold capitalize leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Enhancing patient safety through{" "}
            <span className="text-amber-600">
              affordable simulation technology
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            At MedSim Innovations, we are committed to improving medical education
            through affordable, state-of-the-art simulation technology. Our
            advanced simulators allow healthcare professionals to develop clinical
            skills in a safe, controlled environment, helping reduce the risk of
            real-world errors.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md"
            >
              Talk To Our Team
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50"
            >
              Explore Our Simulators
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Background ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
          <div className="border-b border-slate-200 p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
              Background
            </p>

            <h2 className="text-3xl font-bold capitalize text-slate-900 sm:text-4xl">
              Why simulation-based training?
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Medical errors are a major concern worldwide. According to the
              World Health Organization, patient safety incidents rank among the
              leading causes of death and disability.
            </p>

            <a
              href="https://www.who.int/news-room/fact-sheets/detail/patient-safety"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 capitalize underline decoration-amber-200 underline-offset-4 transition hover:text-amber-800 hover:decoration-amber-400"
            >
              View WHO patient safety reference
            </a>
          </div>

          <div className="p-8 sm:p-10">
            <div className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Many preventable errors can be minimized through hands-on,
                simulation-based learning that helps professionals practice,
                repeat, and refine clinical skills before applying them in real
                patient-care settings.
              </p>

              <p>
                At MedSim Innovations Pvt. Ltd., we recognize the urgent need
                for high-quality, affordable training solutions, especially for
                nursing colleges and small hospitals in developing countries.
              </p>

              <p>
                Beyond simulation technology, we assist institutions in
                designing affordable simulation labs that meet rigorous
                educational and compliance standards.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md"
            >
              Contact Us For A Detailed Discussion
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Mission & Vision ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Purpose
          </p>

          <h2 className="text-3xl font-bold capitalize text-slate-900 sm:text-4xl">
            Mission & Vision
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md">
            <span className="absolute inset-x-0 top-0 h-1 bg-amber-500" />

            <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-600 text-2xl font-black text-white">
              M
            </span>

            <h3 className="text-2xl font-bold text-slate-900">
              Mission Statement
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              To revolutionize healthcare education by providing cutting-edge
              medical simulation technology that empowers healthcare
              professionals’ clinical competency for high standards of patient
              care.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md">
            <span className="absolute inset-x-0 top-0 h-1 bg-indigo-500" />

            <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-black text-white">
              V
            </span>

            <h3 className="text-2xl font-bold text-slate-900">
              Vision Statement
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              A world where simulation-based education is the cornerstone of
              healthcare training, ensuring better patient outcomes and
              advancing the quality of healthcare worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Value Pillars ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            What We Stand For
          </p>

          <h2 className="text-3xl font-bold capitalize text-slate-900 sm:text-4xl">
            Value Pillars
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valuePillars.map((item) => (
            <div
              key={item.title}
              className={`group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${item.accent.ring}`}
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border ${item.accent.chipBg} ${item.accent.chipBorder} p-3`}
              >
                <Image src={item.icon} alt={item.title} className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.desc}
              </p>

              <span
                className={`absolute bottom-0 left-7 h-0.5 w-8 rounded-full ${item.accent.bar} transition-all duration-300 group-hover:w-16`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── Customers ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
            Who We Serve
          </p>

          <h2 className="text-3xl font-bold capitalize text-slate-900 sm:text-4xl">
            Our Customers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {customers.map((item) => (
            <div
              key={item.title}
              className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${item.accent.ring}`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span
                  className={`absolute left-4 top-4 rounded-full ${item.accent.badge} px-3 py-1 text-xs font-semibold text-white`}
                >
                  {item.title}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}