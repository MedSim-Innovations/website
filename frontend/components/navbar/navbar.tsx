"use client";

// Images
import logo from "@/public/images/favicon.png";

// Icons
import faBarSolid from "@/public/icons/bars-solid-full.svg";

// Libraries
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Mapped Lists
const menuLinks = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "products", link: "/products" },
  { title: "contact", link: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="z-50 bg-white shadow-md w-screen h-14 fixed top-0 left-0 flex flex-row justify-start items-center px-4 pr-8">
      <Link href="/" className="mr-auto flex flex-row gap-2 justify-center items-center">
        <Image src={logo} alt="logo" className="w-8 h-8" />
        <h1 className="text-lg text-black font-serif">MedSim Innovations</h1>
      </Link>

      <div className="ml-auto flex flex-row items-center gap-6 max-sm:hidden">
        {menuLinks.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={`text-sm text-black font-serif capitalize transition-all px-2 py-1 rounded-sm ${
              pathname === item.link ? "bg-black shadow-md text-white font-bold" : "hover:bg-black/10"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="ml-auto h-full flex justify-center items-center sm:hidden">
        <Image src={faBarSolid} alt="solid bars icon" className="w-6 h-6" />
      </div>
    </nav>
  );
}