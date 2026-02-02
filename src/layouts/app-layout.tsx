import { ReactNode } from 'react';

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="w-full h-16 bg-gray-100"><Navbar /></div>
            <main className="flex-1 bg-white">{children}</main>
            <div className="w-full h-12 bg-gray-100"><Footer /></div>
        </>
    )
}