import SiteShell from "@/components/layout/site-shell";
import Contact from "@/components/sections/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact MedSim Innovations for product information, quotations, skills-lab planning and training services.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <Contact />
    </SiteShell>
  );
}
