import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Instant forward from vishu.codes → vishu.app (preserves path + query). */
export function middleware(request: NextRequest) {
  const url = new URL(request.nextUrl.pathname + request.nextUrl.search, "https://vishu.app");
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
