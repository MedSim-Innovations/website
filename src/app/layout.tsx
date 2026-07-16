import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/src/components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "MedSim Innovations",
  description: "Developed by Anitej Isaac Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className="pt-16 min-h-screen bg-black">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
