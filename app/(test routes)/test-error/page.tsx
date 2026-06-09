"use client";

import { useEffect } from "react";

export default function TestErrorPage() {
  useEffect(() => {
      throw new Error("Testing error.tsx");
    }, []);
  
    return null;
}