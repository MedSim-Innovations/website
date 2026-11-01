import SiteShell from "@/components/layout/site-shell";
import Products from "@/components/sections/products";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Medical Simulation Products",
  description:
    "Explore clinical procedure kits, nursing skills-lab solutions, learning resources and student essentials.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <SiteShell>
      <Products />
    </SiteShell>
  );
}
