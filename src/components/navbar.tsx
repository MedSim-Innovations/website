"use client";

import "../app/globals.css";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useRouter } from "next/navigation";
import faBars from "@/public/icons/bars-solid-full.svg";
import faSearch from "@/public/icons/magnifying-glass-solid-full.svg";

export function Navbar() {
    const router = useRouter();

    return (
        <nav className="w-full h-16 bg-white flex grid lg:grid-cols-3 grid-cols-2 px-8">
            {/* navbar logo and title */}
            <div className="w-full h-full flex flex-row justify-start items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
                <Image src={logo} alt="logo" className="w-8 h-8" />
                <h1 className="font-serif text-xl text-black font-regular capitalize max-sm:hidden">medsim innovations</h1>
            </div>
            
            {/* navbar links */}
            <ul className="w-full h-full flex flex-row justify-center items-center xl:gap-8 lg:gap-4 capitalize text-black font-serif text-md font-regular max-lg:hidden">
                <li><a href="/" className="hover:underline">home</a></li>
                <li><a href="/about" className="hover:underline">about us</a></li>
                <li><a href="/products" className="hover:underline">our products</a></li>
                <li><a href="/contact" className="hover:underline">contact</a></li>
            </ul>

            {/* navbar search and additional features */}
            <div className="w-full h-full flex flex-row justify-end items-center gap-4">
                <Image src={faSearch} alt="search icon" className="w-6 h-6 cursor-pointer" />
                <Image src={faBars} alt="menu icon" className="w-6 h-6 cursor-pointer lg:hidden" />
            </div>
        </nav>
    )
}