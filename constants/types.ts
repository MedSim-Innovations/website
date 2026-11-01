export type NavigationItem = { href: string; label: string; eyebrow?: string };
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
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
};
