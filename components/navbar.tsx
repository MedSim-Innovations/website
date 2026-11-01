"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Fonts
import { Oxygen } from "next/font/google";
const oxygen = Oxygen({
    weight: "700"
});

// Images
import CompanyLogo from "@/public/logo.png";

// Icons
import IconWrapper from "./ui/icon-wrapper";
import { ICON_PATHS } from "@/constants/icons";

// Types
import { navbarMenuItem } from "@/constants/types";

// Menu Items
const menuItems: navbarMenuItem[] = [
    { label: "products", href: "" },
    { label: "applications", href: "" },
    { label: "our story", href: "" },
    { label: "FAQs", href: "" }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <div className="relative w-full h-20 bg-black border-b border-gray-400 grid grid-cols-[auto_1fr] px-8">
            <Link href="https://www.medsiminnovations.com" className="flex flex-row justify-start items-center gap-1">
                <Image src={CompanyLogo} alt="Company Logo" loading="eager" className="w-12 h-10" />
                <div className="max-xs:hidden max-md:flex max-lg:hidden flex flex-col">
                    <h1 className={`max-md:max-w-20 max-md:text-sm text-white text-md ${oxygen.className} uppercase`}>medsim innovations</h1>
                    <p className="max-md:hidden text-xs capitalize text-gray-300">professional training solutions</p>
                </div>
            </Link>

            <div className="max-md:hidden text-sm font-semibold flex flex-row justify-end items-center gap-8">
                {
                    menuItems.map((item, index) => (
                        <Link key={index} href={item.href} className="text-white capitalize hover:underline">{item.label}</Link>
                    ))
                }
                <Link href="" className="capitalize bg-cyan-400 hover:bg-cyan-500 cursor-pointer px-4 py-2 rounded-md flex flex-row justify-center items-center gap-2">
                    let&apos;s talk simulation
                    <IconWrapper path={ICON_PATHS.squareUpRight} className="w-6 h-6 text-black" />
                </Link>
            </div>

            <div className="md:hidden flex flex-row justify-end items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IconWrapper path={isMenuOpen ? ICON_PATHS.xMark : ICON_PATHS.barsStaggered} className="w-8 h-8 text-white cursor-pointer" />
                </button>
            </div>

            {
                isMenuOpen &&
                (
                    <div className="absolute top-20 right-0 w-screen h-screen bg-black/30 flex justify-end items-start">
                        <div className="w-80 h-full border-l border-black bg-white flex flex-col font-semibold text-sm">
                            {
                                menuItems.map((item, index) => (
                                    <Link key={index} href={item.href} className="w-full h-16 border-b border-black text-black capitalize hover:bg-gray-200 flex justify-center items-center">{item.label}</Link>
                                ))
                            }

                            <Link href="" className="capitalize w-full h-16 border-b border-black bg-cyan-400 hover:bg-cyan-500 cursor-pointer flex flex-row justify-center items-center gap-2">
                                let&apos;s talk simulation
                                <IconWrapper path={ICON_PATHS.squareUpRight} className="w-6 h-6 text-black" />
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}