import SiteShell from "@/components/layout/site-shell";
import Services from "@/components/sections/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Healthcare Simulation Services",
  description:
    "Healthcare training, content development, simulation-centre setup, faculty development and workforce skilling.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <Services />
    </SiteShell>
  );
}
