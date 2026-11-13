import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteConfig.url}/hero.jpg`, `${siteConfig.url}/collaborative-medical-simulation-training.png`],
    },
    {
      url: `${siteConfig.url}/products`,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${siteConfig.url}/products/catalog/roma-medication-kit.webp`],
    },
    {
      url: `${siteConfig.url}/services`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/story`,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${siteConfig.url}/about-us/safer-happy-workspace.jpg`],
    },
    {
      url: `${siteConfig.url}/contact`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
