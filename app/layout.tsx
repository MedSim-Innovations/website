import type { Metadata } from "next";
import "./globals.css";

// Components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
    <html
      lang="en"
      className="antialiased"
    >
      <body className="flex flex-col bg-black">
        <Navbar />
        <div className="pt-16">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
