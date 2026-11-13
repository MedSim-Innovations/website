import SiteShell from "@/components/layout/site-shell";
import PrivacyPageContent from "@/components/pages/privacy-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Notice",
  description: "How the MedSim Innovations public website handles technical and voluntarily provided information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PrivacyPageContent />
    </SiteShell>
  );
}
