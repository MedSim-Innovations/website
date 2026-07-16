"use client"

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Hooks
import { useWindowWidth } from "../hooks/useWindowWidth";

// Types
import { navLink } from "@/src/types/global";

// Images
import logo from "@/public/logo.png";

// Icons
import faBarsSolid from "@/public/icons/bars-solid-full.svg";
import faXSolid from "@/public/icons/x-solid-full.svg";

// Mapped Lists
const navLinks: navLink[] = [
    {
        label: "home",
        href: "/",
        activeColor: "bg-black text-white"
    },
    {
        label: "products",
        href: "/products",
        activeColor: "bg-black text-white"
    },
    {
        label: "contact",
        href: "/contact",
        activeColor: "bg-black text-white"
    },
];

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false);

    const width = useWindowWidth();

    useEffect(() => {
        if (width !== null && width >= 768) {
            setIsMenuExpanded(false);
        }
    }, [width]);

    return (
        <header className="fixed top-0 left-0 w-screen h-16 z-50 bg-white text-black grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr] px-8 shadow-md">
            <section className="flex flex-row justify-start items-center gap-1">
                <Image src={logo} alt="logo" className="w-10 h-10" />
                
                <div className="h-full flex flex-col justify-center items-start">
                    <h1 className="text-md capitalize leading-5 font-bold">MedSim Innovations</h1>
                    
                    <p className="text-xs tracking-wider capitalize italic text-gray-600">professional training solutions</p>
                </div>
            </section>

            <section className="flex flex-row justify-end items-center gap-2 max-md:hidden">
                {
                    navLinks.map((_, idx) => {
                        const isActive = pathname === _.href || (_.href !== '/' && pathname.startsWith(_.href));

                        return (
                            <button key={idx} className={`px-4 py-1.5 relative group cursor-pointer ${isActive ? `${_.activeColor}`: "hover:bg-black/10"} rounded-md`} onClick={() => {router.push(_.href)}}>
                                <p className="text-sm font-semibold capitalize">{_.label}</p>
                            </button>
                        )
                    })
                }
            </section>

            {/* <section className="flex justify-end items-center max-md:hidden">
                <button className="w-auto px-4 py-2 font-semibold bg-white hover:bg-black hover:text-white border border-black rounded-sm capitalize text-sm cursor-pointer" onClick={() => {router.push("/contact")}}>request quote</button>
            </section> */}

            <section className="flex justify-end items-center md:hidden">
                <div className="border border-black/60 p-1 rounded-md cursor-pointer" onClick={() => {setIsMenuExpanded(!isMenuExpanded)}}>
                    <Image src={isMenuExpanded ? faXSolid : faBarsSolid} alt="faSoldBars" className="w-6 h-6 invert-30" />
                </div>
            </section>

            {
                isMenuExpanded ?
                (
                    <section className="absolute border border-black right-4 top-18 rounded-md bg-white flex flex-col justify-start items-center shadow-xl">
                        {
                            [...navLinks, { label: "request quote", href: "/contact", activeColor: "" }].map((_, idx) => {
                                const isActive = pathname === _.href || (_.href !== '/' && pathname.startsWith(_.href));

                                return (
                                    <button key={idx} className={`w-full h-auto py-4 px-8 ${idx === navLinks.length ? "" : "border-b"} border-black flex justify-center items-center cursor-pointer ${isActive ? _.activeColor : "hover:bg-black/10"}`} onClick={() => {router.push(_.href)}}>
                                        <p className="text-sm font-semibold capitalize">{_.label}</p>
                                    </button>
                                )
                            })
                        }
                    </section>
                ) : null
            }
        </header>
    )
}