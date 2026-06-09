"use server";

import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactState = {
  success: boolean;
  message: string;
};

const submissions = new Map<string, { count: number; lastReset: number }>();

let globalSubmissionCount = 0;
let globalLastReset = Date.now();

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;

  const record = submissions.get(ip);

  if (!record || now - record.lastReset > windowMs) {
    submissions.set(ip, {
      count: 1,
      lastReset: now,
    });

    return false;
  }

  record.count += 1;

  return record.count > maxRequests;
}

function isGloballyRateLimited() {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxGlobalRequests = 30;

  if (now - globalLastReset > windowMs) {
    globalSubmissionCount = 1;
    globalLastReset = now;

    return false;
  }

  globalSubmissionCount += 1;

  return globalSubmissionCount > maxGlobalRequests;
}

export async function sendContactEmail(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const headersList = await headers();

  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown";

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = String(formData.get("website") || "").trim();
  const formStartTime = Number(formData.get("formStartTime"));

  if (honeypot) {
    return {
      success: true,
      message: "Thank you. Your message has been sent successfully.",
    };
  }

  if (!Number.isFinite(formStartTime) || Date.now() - formStartTime < 3000) {
    return {
      success: false,
      message: "Please wait a moment before submitting the form.",
    };
  }

  if (isGloballyRateLimited()) {
    return {
      success: false,
      message:
        "We are receiving too many requests right now. Please try again later.",
    };
  }

  if (isRateLimited(ip)) {
    return {
      success: false,
      message: "Too many submissions. Please try again later.",
    };
  }

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  if (
    name.length > 80 ||
    email.length > 120 ||
    phone.length > 30 ||
    message.length > 1500
  ) {
    return {
      success: false,
      message: "Your message is too long. Please shorten it and try again.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  try {
    await resend.emails.send({
      from: "MedSim Innovations <onboarding@resend.dev>",
      to: "sales@medsiminnovations.com",
      replyTo: email,
      subject: `New Website Enquiry From ${escapeHtml(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>

        <hr />

        <p><strong>Message:</strong></p>

        <p>
          ${escapeHtml(message).replaceAll("\n", "<br />")}
        </p>
      `,
    });

    return {
      success: true,
      message:
        "Thank you. Your message has been sent successfully. We'll get back to you shortly.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      message:
        "Something went wrong. Please try again or contact us directly.",
    };
  }
}