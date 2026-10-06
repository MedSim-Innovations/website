"use server";

import { headers } from "next/headers";

type ContactState = { success: boolean; message: string };
type RateBucket = { count: number; resetAt: number };

const WINDOW_MS = 10 * 60 * 1000;
const buckets = new Map<string, RateBucket>();
const topics = new Set(["Product enquiry", "Simulation lab", "Institutional partnership", "Other"]);

function isRateLimited(key: string, max: number) {
  const now = Date.now();
  if (buckets.size > 1000) {
    for (const [bucketKey, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(bucketKey);
    }
  }
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > max;
}

function readField(data: FormData, key: string, maxLength: number) {
  const value = data.get(key);
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length <= maxLength ? trimmed : null;
}

export async function sendContactEmail(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // A filled hidden field indicates an automated submission.
  if (formData.get("website")) {
    return { success: true, message: "Thank you. Your message has been received." };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";

  if (isRateLimited("global", 30) || isRateLimited(`ip:${ip.slice(0, 64)}`, 5)) {
    return { success: false, message: "Too many requests right now. Please try again later or email us directly." };
  }

  const name = readField(formData, "name", 80);
  const email = readField(formData, "email", 120);
  const phone = readField(formData, "phone", 30);
  const topic = readField(formData, "topic", 40);
  const message = readField(formData, "message", 1500);

  if (!name || !email || phone === null || !topic || !message) {
    return { success: false, message: "Please complete the required fields and keep your message within the stated limits." };
  }
  if (!topics.has(topic)) {
    return { success: false, message: "Please choose a valid enquiry type." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, message: "The contact form is temporarily unavailable. Please email sales@medsiminnovations.com directly." };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "MedSim Innovations <sales@medsiminnovations.com>",
        to: ["anitejsharmas@gmail.com"],
        subject: "New MedSim Innovations website enquiry",
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          `Enquiry: ${topic}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Contact email delivery failed with status", response.status);
      return { success: false, message: "We could not send your message. Please try again or email us directly." };
    }
    const result: unknown = await response.json();
    if (!result || typeof result !== "object" || !("id" in result) || typeof result.id !== "string" || !result.id) {
      console.error("Contact email delivery returned no message ID");
      return { success: false, message: "We could not confirm delivery. Please email us directly." };
    }
    return { success: true, message: "Thank you. Your message has been sent. We’ll be in touch soon." };
  } catch (error) {
    console.error("Contact email delivery failed", error instanceof Error ? error.name : "unknown");
    return { success: false, message: "We could not send your message. Please try again or email us directly." };
  }
}
