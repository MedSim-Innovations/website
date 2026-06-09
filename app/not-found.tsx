import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-md text-center">
        <p className="mb-4 text-sm font-medium text-zinc-500">404</p>
        <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-zinc-400">
          The page you’re looking for doesn’t exist or has been moved.
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