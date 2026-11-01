import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "MedSim Innovations | Professional Training Solutions",
  description: "Affordable, customizable medical simulation kits, skills-lab equipment, and hands-on training solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${robotoSerif.className} h-full antialiased`}
    >
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
