import { ReactNode } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="fixed top-0 left-0 z-50 w-full h-auto drop-shadow-md bg-white"><Navbar /></div>
            <main className="mt-18 mb-8 flex-1 bg-transparent">{children}</main>
            <div className="w-full h-auto bg-linear-to-b from-transparent to-white"><Footer /></div>
        </>
    )
}