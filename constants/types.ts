export const sectionIds = ["home", "products", "services", "story", "faqs", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];
export type NavigationItem = { id: SectionId; label: string; eyebrow?: string };
export type ProductCategoryId = "all" | "procedure-kits" | "lab-solutions" | "learning" | "student-essentials";
export type ProductCategory = { id: ProductCategoryId; label: string };
export type Product = {
  id: string;
  name: string;
  category: Exclude<ProductCategoryId, "all">;
  categoryLabel: string;
  description: string;
  accent: "cyan" | "lime" | "yellow";
  tag: string;
  features: string[];
};
