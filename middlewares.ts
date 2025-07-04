import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log(
    "Middleware jalan — path:",
    req.nextUrl.pathname,
    "token:",
    token,
  );
  if (token && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard", "/dashboard"],
};
