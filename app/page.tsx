"use client";

import AppLayout from "@/components/layouts/app-layout";
import { subscribeUser } from "@/app/actions/subscriptions";
import faBoxesStackedSolid from "@/public/icons/boxes-stacked-solid-full.svg";
import faMicrochipSolid from "@/public/icons/microchip-solid-full.svg";
import faUsersSolid from "@/public/icons/users-solid-full.svg";
import mainImg from "@/public/images/home/main.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const signals = [
  {
    value: "40+",
    label: "simulation modules designed for hands-on mastery",
  },
  {
    value: "360",
    label: "degree training support from planning through deployment",
  },
  {
    value: "3",
    label: "core institution types served across education and care delivery",
  },
];

const highlights = [
  {
    icon: faUsersSolid,
    title: "Built with educators and clinicians",
    desc: "Training journeys are structured around real faculty workflows, learner confidence, and measurable readiness.",
  },
  {
    icon: faBoxesStackedSolid,
    title: "Scalable solution architecture",
    desc: "From single-lab setups to broader institutional rollout, the product mix is designed to grow with the program.",
  },
  {
    icon: faMicrochipSolid,
    title: "Modern simulation tooling",
    desc: "Contemporary hardware, thoughtful customization, and practical realism produce stronger training outcomes.",
  },
];

const showcaseCards = [
  {
    label: "For nursing programs",
    title: "Practice that compresses the gap between theory and live care.",
  },
  {
    label: "For medical colleges",
    title: "Structured exposure to procedures, judgment, and confident repetition.",
  },
  {
    label: "For hospitals",
    title: "Upskilling programs that support competency, onboarding, and patient safety.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubscribe() {
    if (!email || !name) {
      setStatus("error");
      setErrorMsg("Please fill in both fields.");
      setTimeout(() => setStatus("idle"), 3200);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const result = await subscribeUser(email, name);

      if (result.status === 409) {
        setStatus("error");
        setErrorMsg("This email is already subscribed.");
        setTimeout(() => setStatus("idle"), 3200);
        return;
      }

      if (result.status !== 201) throw new Error();

      setStatus("success");
      setEmail("");
      setName("");
      setTimeout(() => setStatus("idle"), 3200);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 3200);
    }
  }

  return (
    <AppLayout>
      <section className="relative overflow-hidden px-6 pb-16 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <div className="reveal-up">
              <p className="eyebrow">Simulation-first healthcare training</p>
            </div>
            <div className="reveal-up stagger-1 mt-8">
              <h1 className="section-title max-w-4xl text-white">
                Modern medical simulation systems for institutions that want{" "}
                <span className="text-gradient">credibility, energy, and precision.</span>
              </h1>
            </div>
            <div className="reveal-up stagger-2 mt-7 max-w-2xl">
              <p className="section-copy">
                MedSim Innovations equips nursing colleges, medical schools, and hospitals with
                simulation-led environments that look sharp, train hard, and reinforce safer
                clinical decisions.
              </p>
            </div>

            <div className="reveal-up stagger-3 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="animated-border inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold text-white"
              >
                Start a Conversation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-slate-100 transition hover:bg-white/10"
              >
                Explore Our Approach
              </Link>
            </div>

            <div className="reveal-up stagger-4 mt-12 grid gap-4 sm:grid-cols-3">
              {signals.map((item) => (
                <div
                  key={item.value}
                  className="glass-panel rounded-[1.75rem] border border-white/10 px-5 py-5"
                >
                  <p className="font-[var(--font-display)] text-3xl font-semibold tracking-tight text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-up stagger-3">
            <div className="glass-panel float-slow relative overflow-hidden rounded-[2rem] border border-white/10 p-4">
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-300/20 to-transparent" />
              <div className="relative h-[520px] overflow-hidden rounded-[1.6rem]">
                <Image
                  src={mainImg}
                  alt="Medical simulation training"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass-panel rounded-[1.5rem] border border-white/10 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">
                      Flagship promise
                    </p>
                    <p className="mt-3 font-[var(--font-display)] text-2xl font-semibold tracking-tight text-white">
                      Design training spaces that feel advanced, trustworthy, and immediately
                      actionable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`glass-panel card-hover reveal-up rounded-[2rem] border border-white/10 p-7 stagger-${index + 1}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/12 ring-1 ring-cyan-200/10">
                <Image src={item.icon} alt={item.title} className="h-7 w-7 brightness-0 invert" />
              </div>
              <h2 className="mt-6 font-[var(--font-display)] text-2xl font-semibold tracking-tight text-white">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal-up">
            <p className="eyebrow">Institution-ready outcomes</p>
            <h2 className="mt-7 section-title max-w-xl text-white">
              Training systems shaped around the reality of modern care teams.
            </h2>
            <p className="section-copy mt-6 max-w-xl">
              The site now frames MedSim as a contemporary partner, not a generic catalog. The
              same positioning carries across colleges, hospitals, and faculty-led programs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {showcaseCards.map((item, index) => (
              <div
                key={item.label}
                className={`card-hover reveal-up rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 stagger-${index + 2}`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  {item.label}
                </p>
                <p className="mt-5 font-[var(--font-display)] text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-12 sm:px-8 lg:px-12">
        <div className="animated-border mx-auto max-w-7xl rounded-[2.25rem] p-[1px]">
          <div className="grid rounded-[2.2rem] bg-slate-950/92 p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div className="max-w-2xl">
              <p className="eyebrow">Stay in the loop</p>
              <h2 className="mt-7 font-[var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Receive product updates, launch notes, and practical training insights.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Keep your team close to what MedSim is building next. The newsletter is short,
                useful, and relevant to institutions making real purchasing decisions.
              </p>
            </div>

            <div className="mt-10 lg:mt-0 lg:pl-10">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/30">
                <div className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/8"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/8"
                  />

                  {status === "error" && (
                    <p className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                      {errorMsg}
                    </p>
                  )}
                  {status === "success" && (
                    <p className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                      You&apos;re subscribed.
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={handleSubscribe}
                    disabled={status === "loading"}
                    className="rounded-2xl bg-cyan-300 px-5 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? "Subscribing..." : "Join the newsletter"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
