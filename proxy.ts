import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const hiddenProductionPaths = ["/products"];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    process.env.NODE_ENV === "production" &&
    (pathname.startsWith("/test-") ||
      hiddenProductionPaths.some((path) => pathname.startsWith(path)))
  ) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}