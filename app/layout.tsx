import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "MedSim Innovations",
  description: "Authored by Anitej Isaac Sharma",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${robotoSerif.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
