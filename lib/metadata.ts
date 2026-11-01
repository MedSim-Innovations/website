import type { Metadata } from "next";

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [{ url: "/hero.jpg", alt: "Medical simulation and clinical skills training" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero.jpg"],
    },
  };
}
