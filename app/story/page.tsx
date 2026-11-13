import SiteShell from "@/components/layout/site-shell";
import OurStory from "@/components/sections/our-story";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Our Story",
  description:
    "Learn how MedSim Innovations supports practical healthcare education, clinical confidence and safer care.",
  path: "/story",
});

export default function StoryPage() {
  return (
    <SiteShell>
      <OurStory />
    </SiteShell>
  );
}
