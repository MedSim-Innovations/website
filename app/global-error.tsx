"use client";

import { useEffect } from "react";
import StatusPage from "@/components/feedback/status-page";

export default function GlobalErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <StatusPage
          eyebrow="Unexpected interruption"
          title="We could not load the website."
          description="Please retry. If the problem continues, return in a few moments."
          actionLabel="Reload website"
          onAction={reset}
        />
      </body>
    </html>
  );
}
