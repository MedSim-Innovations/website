"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

const inputClass =
  "mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-rose-500 focus:ring-3 focus:ring-rose-100";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, { success: false, message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form ref={formRef} action={action} className="rounded-[2rem] border border-rose-200 bg-white p-6 shadow-xl shadow-rose-950/5 sm:p-8 lg:p-10">
      <div className="mb-8 text-center sm:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-700">Send an enquiry</p>
        <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">Tell us what you need.</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">Share a little about your institution or training goals, and our team can follow up.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-800">
          Full name <span className="text-rose-600">*</span>
          <input className={inputClass} type="text" name="name" autoComplete="name" maxLength={80} required placeholder="Your name" />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Email address <span className="text-rose-600">*</span>
          <input className={inputClass} type="email" name="email" autoComplete="email" maxLength={120} required placeholder="you@example.com" />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Phone <span className="text-xs font-normal text-slate-500">(optional)</span>
          <input className={inputClass} type="tel" name="phone" autoComplete="tel" maxLength={30} placeholder="Your phone number" />
        </label>
        <label className="block text-sm font-semibold text-slate-800">
          Enquiry type <span className="text-rose-600">*</span>
          <select className={inputClass} name="topic" defaultValue="" required>
            <option value="" disabled>Select a topic</option>
            <option value="Product enquiry">Product enquiry</option>
            <option value="Simulation lab">Simulation lab</option>
            <option value="Institutional partnership">Institutional partnership</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-slate-800 sm:col-span-2">
          Your message <span className="text-rose-600">*</span>
          <textarea className={inputClass} name="message" rows={5} maxLength={1500} required placeholder="Tell us about the products, lab or support you’re looking for." />
        </label>
      </div>

      <div className="absolute -left-[10000px]" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-center text-xs leading-5 text-slate-500 sm:text-left">Fields marked * are required.</p>
        <button type="submit" disabled={pending} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rose-600 px-7 text-sm font-bold text-white transition-colors hover:bg-rose-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-600 disabled:cursor-wait disabled:opacity-70">
          {pending ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : <ArrowUpRight className="size-4" aria-hidden="true" />}
          {pending ? "Sending..." : "Send enquiry"}
        </button>
      </div>
      <p role="status" aria-live="polite" className={`mt-5 min-h-6 text-sm font-medium ${state.success ? "text-emerald-700" : "text-rose-700"}`}>
        {state.message}
      </p>
    </form>
  );
}
