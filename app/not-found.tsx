import StatusPage from "@/components/ui/status-page";

export default function NotFoundPage() {
  return (
    <StatusPage
      eyebrow="404 / Page not found"
      title="That page is not here."
      description="The address may have changed, or the page may no longer exist."
      actionLabel="Return home"
    />
  );
}
