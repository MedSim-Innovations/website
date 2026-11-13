import type { Metadata, Viewport } from "next";
import { Roboto_Serif } from "next/font/google";
import { siteConfig } from "@/content/site";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MedSim Innovations | Medical Simulation & Training",
    template: "%s | MedSim Innovations",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "Healthcare education",
  keywords: [
    "medical simulation",
    "healthcare simulation",
    "nursing skills lab",
    "clinical skills training",
    "simulation training kits",
    "healthcare training India",
    "nursing education",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: "MedSim Innovations | Medical Simulation & Training",
    description: siteConfig.description,
    images: [{ url: "/hero.jpg", alt: "Medical simulation and clinical skills training" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedSim Innovations | Medical Simulation & Training",
    description: siteConfig.description,
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${robotoSerif.className} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
