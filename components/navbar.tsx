"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/favicon.png";
import Image from "next/image";

const links = [
  { name: "Home", href: "/", bgColor: "bg-cyan-300/15", activeColor: "bg-cyan-300" },
  { name: "About", href: "/about", bgColor: "bg-orange-300/15", activeColor: "bg-orange-300" },
  { name: "Products", href: "/products", bgColor: "bg-green-300/15", activeColor: "bg-green-300" },
  { name: "Contact", href: "/contact", bgColor: "bg-pink-300/15", activeColor: "bg-pink-300" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="logo" className="h-9 w-9 text-white" />

          <div>
            <h1 className="text-sm uppercase font-semibold tracking-wide text-white md:text-base">
              MedSim Innovations
            </h1>
            <p className="hidden capitalize text-xs text-zinc-400 sm:block">
              Professional Training Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative rounded-lg px-4 py-2 text-sm font-medium transition-all
                  ${
                    active
                      ? `${link.bgColor} text-white`
                      : "text-zinc-400 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                {link.name}

                {active && (
                  <span className={`absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full ${link.activeColor}`} />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-lg border border-white/15 bg-white hover:bg-white/80 px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Request Quote
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-white"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <nav className="flex flex-col p-4">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm transition ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-black"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}