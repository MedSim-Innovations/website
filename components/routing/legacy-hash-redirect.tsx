"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const legacyRoutes: Record<string, string> = {
  products: "/products",
  services: "/services",
  applications: "/services",
  story: "/story",
  contact: "/contact",
};

export default function LegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const legacyPath = legacyRoutes[window.location.hash.slice(1)];
    if (legacyPath) router.replace(legacyPath);
  }, [router]);

  return null;
}
