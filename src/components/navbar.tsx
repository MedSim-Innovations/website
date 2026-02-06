import Image from "next/image";
import logo from "@/public/logo.png";
import { Zalando_Sans_Expanded } from "next/font/google";
import faBars from "@/public/icons/bars-solid-full.svg";

const zalandoSansExpanded = Zalando_Sans_Expanded({
    subsets: ['latin'],
    weight: "400",
});

const pageLinks = [
    { text: "home", href: "/" },
    { text: "about us", href: "/about" },
    { text: "our products", href: "/products" },
    { text: "contact", href: "/contact" },
]

export default function Navbar() {
    return (
        <nav className="w-full h-16 px-6 grid grid-cols-10">
            <div className="col-span-8 lg:col-span-5 flex flex-row gap-2 justify-start items-center">
                <Image src={logo} alt="logo" className="w-8 md:w-10 h-8 md:h-10" />
                <h1 className={`text-black ${zalandoSansExpanded.className} font-sans xs:text-lg sm:text-xl md:text-2xl`}>MedSim Innovations</h1>
            </div>

            <div className="col-span-5 flex justify-end items-center gap-4 p-2 max-lg:hidden">
                {
                    pageLinks.map((_, i) => (
                        <a key={i} href={_.href} className="text-black text-md capitalize font-serif font-bold hover:bg-black p-2 hover:text-white rounded-md">{_.text}</a>
                    ))
                }
            </div>

            <div className="col-span-2 lg:hidden flex justify-end items-center">
                <Image src={faBars} alt="bars icon" className="w-6 h-6" />
            </div>
        </nav>
    )
}