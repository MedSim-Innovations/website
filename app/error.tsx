"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-md text-center">
        <p className="mb-4 text-sm font-medium text-red-400">Something went wrong</p>
        <h1 className="text-4xl font-semibold tracking-tight">We hit an unexpected error</h1>
        <p className="mt-4 text-zinc-400">
          Please try again. If the issue continues, refresh the page.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white transition"
        >
          Go home
        </Link>
      </section>
    </main>
  );
}