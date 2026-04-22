"use client";

import AppLayout from "@/components/layouts/app-layout";
import { submitContactMessage } from "../actions/contact_messages";
import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const contactDetails = [
  {
    label: "Email",
    value: "sales@medsiminnovations.com",
    href: "mailto:sales@medsiminnovations.com",
  },
  {
    label: "Phone",
    value: "+91 99714 66122",
    href: "tel:+919971466122",
  },
  {
    label: "Address",
    value: "Q 114, 3rd Floor, South City 1, Gurgaon 122001, Haryana, India",
    href: "https://maps.google.com/?q=Q+114+South+City+1+Gurgaon",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function setStatusWithReset(newStatus: "success" | "error", message?: string) {
    if (message) setErrorMsg(message);
    setStatus(newStatus);
    setTimeout(() => setStatus("idle"), 3200);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function handleSubmit() {
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) {
      setStatusWithReset("error", "Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusWithReset("error", "Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const result = await submitContactMessage(form);
      if (result.status !== 201) throw new Error();
      setForm(INITIAL_FORM);
      setStatusWithReset("success");
    } catch {
      setStatusWithReset("error", "Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-white/8";
  const labelClass =
    "mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-slate-400";

  return (
    <AppLayout>
      <section className="px-6 pb-24 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="reveal-up">
            <p className="eyebrow">Let&apos;s talk</p>
            <h1 className="section-title mt-7 text-white">
              Bring a sharper training experience into your institution.
            </h1>
            <p className="section-copy mt-6 max-w-xl">
              Whether you need a product discussion, a demo request, or a broader simulation lab
              conversation, this page now feels intentionally premium and conversion-oriented.
            </p>

            <div className="mt-10 grid gap-4">
              {contactDetails.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`glass-panel card-hover reveal-up rounded-[1.75rem] border border-white/10 p-6 stagger-${index + 1}`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg leading-8 text-slate-100">{item.value}</p>
                </a>
              ))}

              <div className="glass-panel reveal-up stagger-4 overflow-hidden rounded-[1.9rem] border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.977345743138!2d77.05952517579877!3d28.450099292341225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f3792b8429%3A0x3d9bb96088d10356!2sLane%20Q%2C%20Block%20P%2C%20Block%20Q%2C%20South%20City%20I%2C%20Gurugram%2C%20Haryana%20122022%2C%20India!5e0!3m2!1sen!2sca!4v1730182175581!5m2!1sen!2sca"
                  width="100%"
                  height="320"
                  allowFullScreen={false}
                  loading="lazy"
                  title="Google Maps"
                  className="border-0"
                />
              </div>
            </div>
          </div>

          <div className="animated-border reveal-up stagger-2 rounded-[2.25rem] p-[1px]">
            <div className="rounded-[2.2rem] bg-slate-950/92 p-8 sm:p-10">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  Contact form
                </p>
                <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold tracking-tight text-white">
                  Send a message with enough detail for a serious response.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  The form remains backed by the existing server action and Prisma persistence.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className={labelClass}>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full ${inputClass}`}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full ${inputClass}`}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 234 567 8900"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full ${inputClass}`}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className={labelClass}>Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full ${inputClass}`}
                  >
                    <option value="" className="bg-slate-950">
                      Select a topic
                    </option>
                    <option value="product-inquiry" className="bg-slate-950">
                      Product inquiry
                    </option>
                    <option value="demo-request" className="bg-slate-950">
                      Demo request
                    </option>
                    <option value="support" className="bg-slate-950">
                      Technical support
                    </option>
                    <option value="partnership" className="bg-slate-950">
                      Partnership
                    </option>
                    <option value="other" className="bg-slate-950">
                      Other
                    </option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your institution, goals, and the kind of setup you have in mind."
                    value={form.message}
                    onChange={handleChange}
                    rows={8}
                    className={`w-full resize-none ${inputClass}`}
                  />
                </div>
              </div>

              {status === "error" && (
                <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                  {errorMsg}
                </div>
              )}
              {status === "success" && (
                <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                  Your message has been sent. We&apos;ll get back to you shortly.
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-300 px-5 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
