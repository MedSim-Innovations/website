import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-01");

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteConfig.url}/hero.jpg`, `${siteConfig.url}/Collaborative%20Medical%20Simulation%20Training.png`],
    },
    {
      url: `${siteConfig.url}/products`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${siteConfig.url}/products/catalog/roma-medication-kit.webp`],
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/story`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${siteConfig.url}/about-us/safer-happy-workspace.jpg`],
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
