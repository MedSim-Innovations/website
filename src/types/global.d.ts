import { StaticImageData } from "next/image";

// Navbar
export interface navLink {
    label: string;
    href: string;
    activeColor: string;
}

// Footer
export interface socialLink {
    icon: StaticImageData;
    href: string;
}

// Home
export interface menuBarItem {
    label: string;
    href: string;
}