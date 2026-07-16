import Image from "next/image";

// Images
import logo from "@/public/logo.png";
import instagramIcon from "@/public/icons/social/instagram-brands-solid-full.svg";
import facebookIcon from "@/public/icons/social/facebook-brands-solid-full.svg";
import twitterIcon from "@/public/icons/social/twitter-brands-solid-full.svg";
import youtubeIcon from "@/public/icons/social/youtube-brands-solid-full.svg";

// Types
import { socialLink } from "../types/global";

// Mapped Lists
const socialLinks: socialLink[] = [
    {
        icon: instagramIcon,
        href: "#"
    },
    {
        icon: facebookIcon,
        href: "#"
    },
    {
        icon: twitterIcon,
        href: "#"
    },
    {
        icon: youtubeIcon,
        href: "#"
    },
]

export default function Footer() {
    return (
        <footer className="h-auto w-full bg-white text-black py-4 px-12 grid grid-rows-[1fr_auto_auto] space-y-4">
            <div className="grid max-md:grid-rows-[1fr_auto] md:grid-cols-[1fr_auto] md:space-x-12 max-md:space-y-12 py-8">
                <div className="grid grid-rows-[auto_1fr_auto]">
                    <div className="flex flex-row justify-center md:justify-start items-center gap-2">
                        <Image src={logo} alt="logo" className="w-6 h-6" />
                        <h2 className="text-lg font-semibold capitalize">MedSim Innovations</h2>
                    </div>

                    <div className="flex justify-center md:justify-start items-center py-8">
                        <p className="text-sm text-center md:text-left font-light italic max-w-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, voluptates. Quisquam vitae, odio ipsam molestias maiores ab, nisi quis commodi aliquam consequuntur soluta. Dolores incidunt molestiae aliquam itaque, cum deserunt?</p>
                    </div>

                    <div className="flex flex-row justify-center md:justify-start items-center gap-4">
                        {
                            socialLinks.map((_, idx) => (
                                <a key={idx} href={_.href}>
                                    <Image src={_.icon} alt={_.href} className="w-6 h-6" />
                                </a>
                            ))
                        }
                    </div>
                </div>

                <div className="grid grid-cols-3 md:space-x-12">
                    <div className="grid-rows-[auto_1fr]">
                        <div className="flex justify-center md:justify-start items-center">
                            <h3 className="text-sm font-bold uppercase">category</h3>
                        </div>

                        <div className="flex flex-col justify-center items-center md:items-start text-gray-500 capitalize text-sm font-medium gap-4 py-4">
                            <a href="#" className="hover:underline">link one</a>
                            <a href="#" className="hover:underline">link two</a>
                            <a href="#" className="hover:underline">link three</a>
                            <a href="#" className="hover:underline">link four</a>
                        </div>
                    </div>
                    
                    <div className="grid-rows-[auto_1fr]">
                        <div className="flex justify-center md:justify-start items-center">
                            <h3 className="text-sm font-bold uppercase">category</h3>
                        </div>

                        <div className="flex flex-col justify-center items-center md:items-start text-gray-500 capitalize text-sm font-medium gap-4 py-4">
                            <a href="#" className="hover:underline">link one</a>
                            <a href="#" className="hover:underline">link two</a>
                            <a href="#" className="hover:underline">link three</a>
                            <a href="#" className="hover:underline">link four</a>
                        </div>
                    </div>
                    
                    <div className="grid-rows-[auto_1fr]">
                        <div className="flex justify-center md:justify-start items-center">
                            <h3 className="text-sm font-bold uppercase">category</h3>
                        </div>

                        <div className="flex flex-col justify-center items-center md:items-start text-gray-500 capitalize text-sm font-medium gap-4 py-4">
                            <a href="#" className="hover:underline">link one</a>
                            <a href="#" className="hover:underline">link two</a>
                            <a href="#" className="hover:underline">link three</a>
                            <a href="#" className="hover:underline">link four</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-0.5 w-full bg-gray-400"/>

            <div className="grid max-md:grid-rows-2 md:grid-cols-2 py-4 text-gray-500">
                <div className="flex flex-row justify-center md:justify-start items-center">
                    <p className="text-sm text-center font-medium capitalize">&copy; 2026 MedSim Innovations. All Rights Reserved.</p>
                </div>

                <div className="flex flex-row justify-center md:justify-end items-center gap-8">
                    <a href="#" className="text-sm text-center font-medium hover:underline capitalize">privacy policy</a>

                    <a href="#" className="text-sm text-center font-medium hover:underline capitalize">terms of service</a>
                </div>
            </div>
        </footer>
    )
}