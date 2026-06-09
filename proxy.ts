import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (
    process.env.NODE_ENV === "production" &&
    request.nextUrl.pathname.startsWith("/test-")
  ) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}