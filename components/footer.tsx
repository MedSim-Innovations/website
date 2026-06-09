import Link from "next/link";
import Logo from "@/public/favicon.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-linear-to-b from-zinc-900 to-black">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <Image src={Logo} alt="logo" className="h-12 w-12 text-white" />

              <div>
                <h2 className="font-semibold uppercase tracking-wide text-white">
                  MedSim Innovations
                </h2>
                <p className="text-xs capitalize text-zinc-400">
                  Professional Training Solutions
                </p>
              </div>
            </div>

            <p className="max-w-sm ml-2 text-xs leading-relaxed text-zinc-400">
              Providing advanced simulation and training solutions through innovative technology and trusted expertise.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Solutions
            </h3>

            <ul className="space-y-3 text-sm text-zinc-400">
              <li>Training Systems</li>
              <li>Simulation Equipment</li>
              <li>Technology Integration</li>
              <li>Consultancy Services</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-zinc-400">
              <p>
                Gurugram, Haryana, India
              </p>

              <a
                href="mailto:sales@medsiminnovations.com"
                className="block transition hover:text-white"
              >
                sales@medsiminnovations.com
              </a>

              <a
                href="tel:+919971466122"
                className="block transition hover:text-white"
              >
                +91 99714 66122
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 md:flex-row capitalize">
          <p>
            © {new Date().getFullYear()} MEDSIM INNOVATIONS. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:justify-end">
            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}