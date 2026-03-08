"use client";

// App Layout
import AppLayout from "@/components/layouts/app-layout";

// Libraries
import { useState } from "react";

// Actions
import { submitContactMessage } from "../actions/contact_messages";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = { name: "", email: "", phone: "", subject: "", message: "" };

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

  return (
    <AppLayout>
      <div className="min-h-screen mt-14 flex flex-col xl:flex-row">

        {/* Left — Info + Map */}
        <div className="flex flex-col xl:w-2/3">

          {/* Contact Info */}
          <div className="shrink-0 bg-white flex flex-col">
            <div className="flex flex-col gap-2 justify-center items-center p-8 pb-0">
              <h2 className="text-4xl capitalize text-black font-serif font-bold italic text-center">
                contact us
              </h2>

              <p className="text-black font-serif text-center text-sm">
                Have questions or want to learn more about our medical simulation solutions? We&apos;re here to help! Reach out to us through any of the following channels:
              </p>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-3 p-12">
            {contactDetails.map(({ label, value, href }) => (
                <p key={label} className="text-black font-serif text-center text-md">
                {label}:{" "}
                <a
                    href={href}
                    target={label === "Address" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-bold hover:text-rose-600 transition-colors duration-200 underline underline-offset-2 decoration-transparent hover:decoration-rose-600"
                >
                    {value}
                </a>
                </p>
            ))}
            </div>
          </div>

          {/* Map */}
          <div className="grow flex flex-col min-h-100">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.977345743138!2d77.05952517579877!3d28.450099292341225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f3792b8429%3A0x3d9bb96088d10356!2sLane%20Q%2C%20Block%20P%2C%20Block%20Q%2C%20South%20City%20I%2C%20Gurugram%2C%20Haryana%20122022%2C%20India!5e0!3m2!1sen!2sca!4v1730182175581!5m2!1sen!2sca"
                width="100%"
                height="100%"
                allowFullScreen={false}
                loading="lazy"
                title="Google Maps"
                className="outline-none grow"
            />
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="xl:w-1/3 bg-gradient-to-b from-teal-300 to-amber-300 flex flex-col justify-start items-center p-8 max-xl:py-18 gap-6">
          <div className="w-full h-full flex flex-col max-w-2xl">
            <h3 className="text-4xl font-serif font-bold italic capitalize text-black text-center mb-1">
              send a message
            </h3>
            <p className="text-sm font-serif text-center text-black mb-6">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>

            <div className="flex flex-col gap-12 my-auto">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-serif font-bold uppercase tracking-widest text-black">
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded-lg p-2.5 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-serif font-bold uppercase tracking-widest text-black">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded-lg p-2.5 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
                  />
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-serif font-bold uppercase tracking-widest text-black">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 234 567 8900"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded-lg p-2.5 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-serif font-bold uppercase tracking-widest text-black">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded-lg p-2.5 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
                  >
                    <option value="">Select a topic</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="demo-request">Demo Request</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-serif font-bold uppercase tracking-widest text-black">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  rows={10}
                  className="bg-white border border-gray-200 rounded-lg p-2.5 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
                />
              </div>

              {/* Feedback */}
              {status === "error" && (
                <p className="bg-red-600 text-white py-1 px-4 rounded-lg text-sm font-serif text-center">{errorMsg}</p>
              )}
              {status === "success" && (
                <p className="bg-green-600 text-white py-1 px-4 rounded-lg text-sm font-serif text-center">
                  Your message has been sent! We&apos;ll be in touch soon.
                </p>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="bg-black hover:bg-black/80 text-white font-serif font-bold italic capitalize text-md rounded-lg p-3 mt-1 cursor-pointer disabled:opacity-50 shadow-sm transition-colors duration-200"
              >
                {status === "loading" ? "sending..." : "send message"}
              </button>

            </div>
          </div>
        </div>

      </div>
    </AppLayout>
  );
}