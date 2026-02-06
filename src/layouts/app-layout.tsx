import { ReactNode } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="fixed top-0 left-0 z-50 w-full h-auto drop-shadow-sm bg-gray-100"><Navbar /></div>
            <main className="mt-18 flex-1 bg-white">{children}</main>
            <div className="w-full h-auto bg-gray-100"><Footer /></div>
        </>
    )
}