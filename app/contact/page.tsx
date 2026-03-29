"use client";

import AppLayout from "@/components/layouts/app-layout";
import { useState } from "react";
import { submitContactMessage } from "../actions/contact_messages";

type FormStatus = "idle" | "loading" | "success" | "error";
interface FormData { name: string; email: string; phone: string; subject: string; message: string; }
const INITIAL_FORM: FormData = { name: "", email: "", phone: "", subject: "", message: "" };

const contactDetails = [
  { label: "Email", value: "sales@medsiminnovations.com", href: "mailto:sales@medsiminnovations.com", emoji: "✉️" },
  { label: "Phone", value: "+91 99714 66122", href: "tel:+919971466122", emoji: "📞" },
  { label: "Address", value: "Q 114, 3rd Floor, South City 1, Gurgaon 122001, Haryana, India", href: "https://maps.google.com/?q=Q+114+South+City+1+Gurgaon", emoji: "📍" },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function setStatusWithReset(newStatus: "success" | "error", msg?: string) {
    if (msg) setErrorMsg(msg);
    setStatus(newStatus);
    setTimeout(() => setStatus("idle"), 3000);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit() {
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) { setStatusWithReset("error", "Please fill in all required fields."); return; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { setStatusWithReset("error", "Please enter a valid email address."); return; }
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

  const inputClass = "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-serif text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition";
  const labelClass = "block text-xs font-serif font-bold uppercase tracking-widest text-slate-500 mb-1.5";

  return (
    <AppLayout>
      <div className="min-h-screen mt-14 bg-slate-50 font-serif">
        <div className="bg-linear-to-br from-rose-400 to-violet-400 px-8 py-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white mb-1">Get In Touch</p>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Contact Us</h1>
          <p className="mt-2 text-white text-sm mx-auto leading-relaxed">
            Have questions about our simulation solutions? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex flex-col gap-5">
              <h2 className="text-lg font-extrabold text-slate-800 tracking-tight">Reach Us Directly</h2>
              {contactDetails.map(({ label, value, href, emoji }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-lg shrink-0">{emoji}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-0.5">{label}</p>
                    <a
                      href={href}
                      target={label === "Address" ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm text-slate-800 font-medium hover:text-rose-600 transition-colors leading-snug"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex-1 min-h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.977345743138!2d77.05952517579877!3d28.450099292341225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f3792b8429%3A0x3d9bb96088d10356!2sLane%20Q%2C%20Block%20P%2C%20Block%20Q%2C%20South%20City%20I%2C%20Gurugram%2C%20Haryana%20122022%2C%20India!5e0!3m2!1sen!2sca!4v1730182175581!5m2!1sen!2sca"
                width="100%"
                height="100%"
                allowFullScreen={false}
                loading="lazy"
                title="Google Maps"
                className="w-full h-full min-h-64 border-0"
              />
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-extrabold text-slate-800 tracking-tight">Send a Message</h2>
              <p className="text-sm text-slate-500 mt-1">Fill out the form and we'll get back to you shortly.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Name <span className="text-rose-400">*</span></label>
                <input type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email <span className="text-rose-400">*</span></label>
                <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input type="tel" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Subject <span className="text-rose-400">*</span></label>
                <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                  <option value="">Select a topic</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="demo-request">Demo Request</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Message <span className="text-rose-400">*</span></label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                rows={7}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">⚠ {errorMsg}</div>
            )}
            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-600 text-sm rounded-xl px-4 py-3">✓ Your message has been sent! We'll be in touch soon.</div>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full bg-linear-to-r from-rose-500 to-violet-500 hover:opacity-90 disabled:opacity-50 text-white font-bold text-sm rounded-xl py-3.5 shadow-sm hover:shadow-md transition-all duration-200 tracking-wide"
            >
              {status === "loading" ? "Sending..." : "Send Message →"}
            </button>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}