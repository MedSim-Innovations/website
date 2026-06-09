import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Images
import hospitalsImg from "@/public/images/about/hospitals.jpg";
import medicalCollegesImg from "@/public/images/about/medical-colleges.jpg";
import nursingCollegesImg from "@/public/images/about/nursing-colleges.jpg";

// Icons
import faBookOpenSolid from "@/public/icons/book-open-solid-full.svg";
import faLightbulbSolid from "@/public/icons/lightbulb-solid-full.svg";
import faScrewdriverWrenchSolid from "@/public/icons/screwdriver-wrench-solid-full.svg";
import faCircleCheckSolid from "@/public/icons/circle-check-solid-full.svg";
import faUsersSolid from "@/public/icons/users-solid-full.svg";
import faGlobeSolid from "@/public/icons/globe-solid-full.svg";

type ValuePillar = {
  icon: string | StaticImport;
  title: string;
  desc: string;
};

type Customer = {
  image: StaticImport;
  title: string;
  desc: string;
};

const valuePillars: ValuePillar[] = [
  {
    icon: faLightbulbSolid,
    title: "Innovation",
    desc: "Continuous investment in R&D to bring the latest simulation technology to market.",
  },
  {
    icon: faScrewdriverWrenchSolid,
    title: "Customization",
    desc: "Tailored simulation solutions designed to meet the specific needs of each client.",
  },
  {
    icon: faCircleCheckSolid,
    title: "Quality & Realism",
    desc: "High standards that ensure our simulators deliver truly lifelike learning experiences.",
  },
  {
    icon: faUsersSolid,
    title: "Support",
    desc: "End-to-end service from installation to ongoing maintenance, training, and assistance.",
  },
  {
    icon: faGlobeSolid,
    title: "Global Reach",
    desc: "A worldwide network of distributors and partners serving clients across regions.",
  },
  {
    icon: faBookOpenSolid,
    title: "Education",
    desc: "Bridging theory and clinical practice with curriculum-aligned simulation tools.",
  },
];

const customers: Customer[] = [
  {
    image: nursingCollegesImg,
    title: "Nursing Colleges",
    desc: "Training kits specifically designed for nursing education and practical training.",
  },
  {
    image: medicalCollegesImg,
    title: "Medical Colleges",
    desc: "Advanced tools for medical students and residents to enhance hands-on learning.",
  },
  {
    image: hospitalsImg,
    title: "Hospitals",
    desc: "Supporting professional development and competency assessments for healthcare providers.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <p className="mb-4 text-lg font-semibold uppercase tracking-[0.25em] text-orange-300">
          Who We Are
        </p>

        <h1 className="mx-auto max-w-5xl font-serif text-3xl font-bold capitalize leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Enhancing patient safety through{" "}
          <span className="bg-linear-to-br from-orange-300 to-amber-500 bg-clip-text text-transparent">
            affordable simulation technology
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
          At MedSim Innovations, we are committed to improving medical education
          through affordable, state-of-the-art simulation technology. Our
          advanced simulators allow healthcare professionals to develop clinical
          skills in a safe, controlled environment, helping reduce the risk of
          real-world errors.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-white/20 bg-zinc-950 lg:grid-cols-2">
          <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Background
            </p>

            <h2 className="text-3xl font-bold capitalize text-white sm:text-4xl">
              Why simulation-based training?
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
              Medical errors are a major concern worldwide. According to the
              World Health Organization, patient safety incidents rank among the
              leading causes of death and disability.
            </p>

            <a
              href="https://www.who.int/news-room/fact-sheets/detail/patient-safety"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-orange-300 transition hover:text-orange-200 capitalize"
            >
              View WHO patient safety reference
            </a>
          </div>

          <div className="p-8 sm:p-10">
            <div className="space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">
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
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              Contact Us For A Detailed Discussion
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.25em] text-orange-300">
            Purpose
          </p>

          <h2 className="text-3xl font-bold capitalize sm:text-4xl">
            Mission & Vision
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/20 bg-zinc-950 p-8 hover:border-orange-300 group transition-all duration-200">
            <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-300 text-2xl font-black text-black">
              M
            </span>

            <h3 className="text-2xl font-bold text-white">
              Mission Statement
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base group-hover:text-orange-300">
              To revolutionize healthcare education by providing cutting-edge
              medical simulation technology that empowers healthcare
              professionals’ clinical competency for high standards of patient
              care.
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-zinc-950 p-8 transition-all duration-200 hover:border-orange-300 group">
            <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-300 text-2xl font-black text-black">
              V
            </span>

            <h3 className="text-2xl font-bold text-white">
              Vision Statement
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base group-hover:text-orange-300">
              A world where simulation-based education is the cornerstone of
              healthcare training, ensuring better patient outcomes and
              advancing the quality of healthcare worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.25em] text-orange-300">
            What We Stand For
          </p>

          <h2 className="text-3xl font-bold capitalize sm:text-4xl">
            Value Pillars
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valuePillars.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/20 bg-zinc-950 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-orange-300 group"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-300 p-3">
                <Image src={item.icon} alt={item.title} className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-white">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400 group-hover:text-orange-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.25em] text-orange-300">
            Who We Serve
          </p>

          <h2 className="text-3xl font-bold capitalize sm:text-4xl">
            Our Customers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {customers.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-white/20 bg-zinc-950 transition-all duration-200 hover:-translate-y-1 hover:border-orange-300 group"
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-7 text-center">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400 group-hover:text-orange-300">
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