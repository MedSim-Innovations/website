"use client";

import * as React from "react";
import Image from "next/image";
import saferWorkspaceImg from "@/public/about-us/safer-happy-workspace.jpg";
import nursingCollegesImg from "@/public/about-us/nursing-colleges.jpg";
import medicalCollegesImg from "@/public/about-us/medical-colleges.jpg";
import hospitalsImg from "@/public/about-us/hospitals.jpg";
import type { StaticImageData } from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Building2,
  FlaskConical,
  Globe2,
  HeartPulse,
  Headset,
  ShieldCheck,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const valuePillars: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Innovation", description: "Continuous investment in R&D to bring the latest simulation technology to market.", icon: FlaskConical },
  { title: "Customization", description: "Tailored simulation solutions designed to meet the specific needs of each client.", icon: SlidersHorizontal },
  { title: "Quality & Realism", description: "High standards that ensure our simulators deliver truly lifelike learning experiences.", icon: BadgeCheck },
  { title: "Support", description: "End-to-end service from installation to ongoing maintenance, training, and assistance.", icon: Headset },
  { title: "Global Reach", description: "A worldwide network of distributors and partners serving clients across regions.", icon: Globe2 },
  { title: "Education", description: "Bridging theory and clinical practice with curriculum-aligned simulation tools.", icon: BookOpen },
];

const customers: { title: string; description: string; image: StaticImageData; imageAlt: string }[] = [
  { title: "Nursing Colleges", description: "Training kits specifically designed for nursing education and practical training.", image: nursingCollegesImg, imageAlt: "Nursing learners practicing clinical skills together" },
  { title: "Medical Colleges", description: "Advanced tools for medical students and residents to enhance hands-on learning.", image: medicalCollegesImg, imageAlt: "Medical researcher using a microscope" },
  { title: "Hospitals", description: "Supporting professional development and competency assessments for healthcare providers.", image: hospitalsImg, imageAlt: "Hospital care team working in a clinical setting" },
];

const slideLabels = ["Who we are", "Why simulation", "Mission and vision", "Value pillars", "Who we serve"];

function Eyebrow({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
      <span className="flex size-8 items-center justify-center rounded-full bg-cyan-100 tracking-normal">{number}</span>
      {children}
    </p>
  );
}

function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-cyan-300 sm:p-6">
      <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h4 className="text-lg font-bold tracking-tight text-slate-950">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default function AboutUs() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [slideHeight, setSlideHeight] = React.useState<number>();

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      const selected = api.selectedScrollSnap();
      setCurrent(selected);
      setSlideHeight(api.slideNodes()[selected]?.offsetHeight);
    };
    const observer = new ResizeObserver(onSelect);
    api.slideNodes().forEach((slide) => observer.observe(slide));
    const frame = requestAnimationFrame(onSelect);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-[#eef7f5] px-5 py-20 text-slate-950 sm:px-8 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-32 top-16 size-96 rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-5 text-center sm:mb-12 lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">About MedSim Innovations</p>
            <h2 id="about-title" className="max-w-3xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Training that moves <span className="text-cyan-700">care forward.</span>
            </h2>
          </div>
          <p className="mx-auto max-w-md text-sm leading-7 text-slate-600 sm:text-base lg:mx-0">
            Explore our purpose, the thinking behind simulation-based learning, and the institutions we serve.
          </p>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} aria-label="About MedSim Innovations">
          <div className="overflow-hidden motion-safe:transition-[height] motion-safe:duration-300" style={{ height: slideHeight }}>
          <CarouselContent className="items-start">
            <CarouselItem className="flex">
              <article className="grid w-full overflow-hidden rounded-[2rem] bg-white  lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-7 sm:p-10 lg:p-14">
                  <Eyebrow number="01">Who we are</Eyebrow>
                  <h3 className="max-w-2xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Enhancing patient safety through affordable simulation technology
                  </h3>
                  <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
                    At MedSim Innovations, we are committed to improving medical education through affordable, state-of-the-art simulation technology. Our advanced simulators allow healthcare professionals to develop clinical skills in a safe, controlled environment, helping reduce the risk of real-world errors.
                  </p>
                </div>
                <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-slate-950 p-8 text-white sm:p-10 lg:p-14">
                  <Image src={saferWorkspaceImg} alt="Smiling healthcare professional at work" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-[40%_center]" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/15 to-transparent" />
                  <div className="absolute -right-16 -top-16 size-72 rounded-full border border-cyan-300/30" />
                  <div className="absolute -right-4 -top-4 size-52 rounded-full border border-cyan-300/30" />
                  <div className="absolute -bottom-28 -left-20 size-72 rounded-full bg-cyan-500/20 blur-2xl" />
                  <HeartPulse className="relative size-14 text-cyan-300" strokeWidth={1.4} aria-hidden="true" />
                  <p className="relative max-w-sm text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                    A safer place to practice. More confidence when it matters.
                  </p>
                </div>
              </article>
            </CarouselItem>

            <CarouselItem className="flex">
              <article className="grid w-full gap-8 rounded-[2rem] bg-white p-7  sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-14">
                <div>
                  <Eyebrow number="02">Background</Eyebrow>
                  <h3 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">Why simulation-based training?</h3>
                  <p className="mt-6 text-base leading-8 text-slate-600">
                    Medical errors are a major concern worldwide. According to the World Health Organization, patient safety incidents rank among the leading causes of death and disability.
                  </p>
                  <a href="https://www.who.int/news-room/fact-sheets/detail/patient-safety" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-700 underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600">
                    View WHO patient safety reference <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-cyan-50 p-6 sm:col-span-2">
                    <ShieldCheck className="mb-4 size-8 text-cyan-700" aria-hidden="true" />
                    <p className="leading-7 text-slate-700">Simulation gives learners a safe place to practice, repeat and refine clinical skills before applying them in real patient-care settings.</p>
                    <div className="mt-5 grid gap-2 text-sm font-semibold text-slate-800 sm:grid-cols-2">
                      {[
                        "Improve procedural accuracy",
                        "Strengthen rapid decision-making",
                        "Build confidence with complex cases",
                        "Practise teamwork and communication",
                      ].map((outcome) => (
                        <p key={outcome} className="rounded-2xl bg-white/80 px-4 py-3">{outcome}</p>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-3xl bg-amber-50 p-6">
                    <Building2 className="mb-4 size-7 text-amber-700" aria-hidden="true" />
                    <p className="text-sm leading-7 text-slate-700">At MedSim Innovations Pvt. Ltd., we recognize the urgent need for high-quality, affordable training solutions, especially for nursing colleges and small hospitals in developing countries.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-100 p-6">
                    <SlidersHorizontal className="mb-4 size-7 text-slate-700" aria-hidden="true" />
                    <p className="text-sm leading-7 text-slate-700">Beyond simulation technology, we assist institutions in designing affordable simulation labs that meet rigorous educational and compliance standards.</p>
                  </div>
                  <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-700 px-6 text-center text-sm font-bold text-white transition-colors hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 sm:col-span-2">
                    Contact us for a detailed discussion <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </CarouselItem>

            <CarouselItem className="flex">
              <article className="w-full rounded-[2rem] bg-white p-7  sm:p-10 lg:p-14">
                <Eyebrow number="03">Purpose</Eyebrow>
                <h3 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">Mission &amp; Vision</h3>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex min-h-80 flex-col rounded-3xl bg-amber-300 p-7 text-black sm:p-9">
                    <span className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-black text-amber-300 text-xl font-black" aria-hidden="true">M</span>
                    <h4 className="text-2xl font-bold">Mission Statement</h4>
                    <p className="mt-4 leading-8 text-black">To revolutionize healthcare education by providing cutting-edge medical simulation technology that empowers healthcare professionals’ clinical competency for high standards of patient care.</p>
                  </div>
                  <div className="flex min-h-80 flex-col rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
                    <span className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-amber-300 text-xl font-black text-slate-950" aria-hidden="true">V</span>
                    <h4 className="text-2xl font-bold">Vision Statement</h4>
                    <p className="mt-4 leading-8 text-slate-200">A world where simulation-based education is the cornerstone of healthcare training, ensuring better patient outcomes and advancing the quality of healthcare worldwide.</p>
                  </div>
                </div>
              </article>
            </CarouselItem>

            <CarouselItem className="flex">
              <article className="w-full rounded-[2rem] bg-white p-7  sm:p-10 lg:p-14">
                <Eyebrow number="04">What we stand for</Eyebrow>
                <h3 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">Value Pillars</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {valuePillars.map((pillar) => <FeatureCard key={pillar.title} {...pillar} />)}
                </div>
              </article>
            </CarouselItem>

            <CarouselItem className="flex">
              <article className="w-full rounded-[2rem] bg-white p-7  sm:p-10 lg:p-14">
                <Eyebrow number="05">Who we serve</Eyebrow>
                <h3 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Our Customers</h3>
                <p className="mb-9 max-w-2xl leading-7 text-slate-600">Simulation solutions designed around the people who teach, learn, and deliver care.</p>
                <div className="grid gap-5 md:grid-cols-3">
                  {customers.map((customer, index) => (
                    <article key={customer.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white">
                      <div className="relative h-56 overflow-hidden sm:h-64 md:h-52 lg:h-60">
                        <Image src={customer.image} alt={customer.imageAlt} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 to-transparent" />
                      </div>
                      <div className="p-6 sm:p-7">
                        <span className="mb-3 block text-xs font-bold tracking-[0.2em] text-cyan-300">0{index + 1}</span>
                        <h4 className="text-xl font-bold">{customer.title}</h4>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{customer.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </article>
            </CarouselItem>
          </CarouselContent>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <p className="text-sm font-semibold text-slate-600" aria-live="polite">
              <span className="text-cyan-700">{String(current + 1).padStart(2, "0")}</span> / 05 <span className="ml-3 text-slate-900">{slideLabels[current]}</span>
            </p>
            <div className="flex items-center gap-2" aria-label="Choose an about section">
              {slideLabels.map((label, index) => (
                <button key={label} type="button" onClick={() => api?.scrollTo(index)} aria-label={`Go to ${label}`} aria-current={current === index ? "step" : undefined} className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 ${current === index ? "w-8 bg-cyan-700" : "w-2.5 bg-slate-300 hover:bg-slate-500"}`} />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static size-11 translate-y-0 border-slate-300 bg-white text-slate-950 shadow-sm hover:bg-cyan-50" />
              <CarouselNext className="static size-11 translate-y-0 border-slate-300 bg-white text-slate-950 shadow-sm hover:bg-cyan-50" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
