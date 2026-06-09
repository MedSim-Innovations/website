// Images
import mainImg from "@/public/images/home/main.jpg";

// Icons
import faBoxesStackedSolid from "@/public/icons/boxes-stacked-solid-full.svg";
import faMicrochipSolid from "@/public/icons/microchip-solid-full.svg";
import faUsersSolid from "@/public/icons/users-solid-full.svg";

// Fonts
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const indieFlower = localFont({
  src: "../public/fonts/IndieFlower-Regular.ttf",
  display: "swap",
});

type WhyChooseUsItem = {
  icon: string | StaticImport;
  title: string;
  desc: string;
};

const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: faUsersSolid,
    title: "Expert Team",
    desc: "Our team comprises seasoned experts to guide you through effective, realistic training solutions.",
  },
  {
    icon: faBoxesStackedSolid,
    title: "Quality Products",
    desc: "Offering state-of-the-art products to ensure you receive reliable and durable solutions.",
  },
  {
    icon: faMicrochipSolid,
    title: "Innovative Technology",
    desc: "We use advanced simulation technology to help you achieve higher standards in training.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-[75vh] shadow-2xl shadow-white/20">
        <Image
          src={mainImg}
          alt="Medical simulation training"
          priority
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/40" />

        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl flex-col items-center justify-end px-5 pb-16 text-center sm:px-8 md:pb-24">
          <h1 className="max-w-5xl font-serif text-3xl font-bold capitalize leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Every human life deserves a{" "}
            <span
              className={`block bg-linear-to-br from-cyan-300 to-emerald-300 bg-clip-text text-5xl italic text-transparent sm:text-6xl md:text-7xl lg:text-8xl ${indieFlower.className}`}
            >
              great clinical experience
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              Explore Products
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
        <p className="mb-3 text-lg font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Built for better training
        </p>

        <h2 className="mx-auto max-w-4xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl capitalize">
          Helping healthcare professionals train with precision, realism, and
          confidence.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
          From simulation systems to expert guidance, our solutions are designed
          to support effective learning and improve clinical preparedness. We combine expert guidance, dependable products, and modern simulation technology to support effective hands-on learning.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Why Choose Us
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {whyChooseUs.map((item, idx) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-zinc-950 p-7 shadow-2xl shadow-black/40 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/60 group"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-cyan-300/30 transition duration-300 group-hover:bg-cyan-300/60" />

              <div className="relative z-10 mb-8 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-3">
                  <Image src={item.icon} alt={item.title} className="h-8 w-8" />
                </div>

                <span className="text-5xl font-black text-white/40 group-hover:text-white">
                  {idx + 1}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold capitalize text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-5 mb-24 rounded-3xl border border-white/20 bg-linear-to-br from-zinc-800 to-black px-6 py-14 text-center shadow-2xl shadow-cyan-950/20 sm:mx-8 lg:mx-auto lg:max-w-7xl capitalize">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to enhance your training experience?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
          Connect with our team to discover simulation solutions built for your
          organization’s needs.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}