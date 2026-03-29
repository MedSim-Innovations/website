"use client";

// Images
import logo from "@/public/images/favicon.png";

// Icons
import faBarSolid from "@/public/icons/bars-solid-full.svg";

// Libraries
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const menuLinks = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  // { title: "products", link: "/products" },
  { title: "contact", link: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false); // drives the actual CSS transition
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      setRendered(true);
      // Wait two frames: one to mount, one to paint — then trigger transition
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    } else {
      setVisible(false); // trigger closing transition
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleTransitionEnd = () => {
    if (!menuOpen) setRendered(false);
  };

  return (
    <>
      <nav className="z-50 bg-white shadow-md text-black w-screen h-14 fixed top-0 left-0 flex flex-row justify-start items-center px-4 pr-8">
        <Link href="/" className="mr-auto flex flex-row gap-2 justify-center items-center">
          <Image src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="text-lg font-serif">MedSim Innovations</h1>
        </Link>

        <div className="ml-auto flex flex-row items-center gap-6 max-sm:hidden">
          {menuLinks.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className={`text-sm font-serif capitalize transition-all px-2 py-1 rounded-sm ${
                pathname === item.link ? "bg-black shadow-md text-white font-bold" : "hover:bg-black/10"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="ml-auto h-full flex justify-center items-center sm:hidden focus:outline-none relative w-6"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{
              opacity: visible ? 0 : 1,
              transform: visible ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)",
            }}
          >
            <Image src={faBarSolid} alt="open menu" className="w-6 h-6" />
          </span>

          <span
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </nav>

      {rendered && (
        <div
          className="sm:hidden fixed left-0 w-screen z-40 bg-white flex flex-col overflow-hidden"
          style={{
            top: "3.5rem",
            height: "calc(100vh - 3.5rem)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="flex flex-col px-6 pt-6 pb-8 gap-2">
            {menuLinks.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-xl font-serif capitalize px-4 py-4 rounded-md ${
                  pathname === item.link
                    ? "bg-black text-white font-bold shadow-md"
                    : "text-black hover:bg-black/10"
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(-10px)",
                  transition: `opacity 0.3s ease ${i * 60 + 80}ms, transform 0.3s ease ${i * 60 + 80}ms`,
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}