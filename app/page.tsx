import type { Metadata } from "next";
import SiteShell from "@/components/layout/site-shell";
import HomePageContent from "@/components/pages/home-page";
import { products } from "@/content/products";
import { siteConfig } from "@/content/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: { "@type": "PostalAddress", ...siteConfig.address },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "OfferCatalog",
      name: "Medical simulation products and learning solutions",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: `${siteConfig.url}${product.image}`,
          category: product.categoryLabel,
          brand: { "@type": "Brand", name: siteConfig.name },
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <SiteShell>
        <HomePageContent />
      </SiteShell>
    </>
  );
}
