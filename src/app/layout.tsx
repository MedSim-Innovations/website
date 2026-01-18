import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "MedSim Innovations",
  description: "Authored by Anitej Isaac Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="w-full" style={{ minHeight: "calc(100vh - 4rem)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
