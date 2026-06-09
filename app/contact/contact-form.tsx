"use client";

import { useActionState, useMemo, useState } from "react";
import { sendContactEmail } from "./actions";

const initialState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );

  const formStartTime = useMemo(() => Date.now(), []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      action={formAction}
      className="rounded-3xl border border-rose-300 bg-linear-to-br from-zinc-900 to-black p-8 shadow-2xl shadow-rose-950/20"
    >
      {state.message && (
        <div
          className={`mb-6 rounded-2xl border px-4 py-3 text-sm ${
            state.success
              ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
              : "border-rose-400/40 bg-rose-400/10 text-rose-300"
          }`}
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-300">Name *</label>

          <input
            name="name"
            required
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-rose-300"
            placeholder="Your name"
          />

          <p className="mt-1 text-right text-xs text-zinc-500">
            {name.length}/80
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">Email *</label>

          <input
            name="email"
            type="email"
            required
            maxLength={120}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-rose-300"
            placeholder="you@example.com"
          />

          <p className="mt-1 text-right text-xs text-zinc-500">
            {email.length}/120
          </p>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm text-zinc-300">Phone</label>

          <input
            name="phone"
            maxLength={30}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-rose-300"
            placeholder="+91 XXXXX XXXXX"
          />

          <p className="mt-1 text-right text-xs text-zinc-500">
            {phone.length}/30
          </p>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm text-zinc-300">Message *</label>

          <textarea
            name="message"
            required
            rows={6}
            maxLength={1500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-rose-300"
            placeholder="Tell us about your requirements..."
          />

          <p
            className={`mt-1 text-right text-xs ${
              message.length > 1350 ? "text-rose-300" : "text-zinc-500"
            }`}
          >
            {message.length}/1500
          </p>
        </div>
      </div>

      <input type="hidden" name="formStartTime" value={formStartTime} />

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Website</label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}