import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-linear-to-tr from-rose-100 to-cyan-100">
        {children}
      </body>
    </html>
  );
}
