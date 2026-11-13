"use client";

import { useEffect } from "react";
import StatusPage from "@/components/ui/status-page";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      eyebrow="Something went wrong"
      title="This section could not load."
      description="The interruption may be temporary. Try loading the section again."
      actionLabel="Try again"
      onAction={reset}
    />
  );
}
