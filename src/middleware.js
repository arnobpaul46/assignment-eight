import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // ভার্সেলে (HTTPS) কুকির আগে অনেক সময় '__Secure-' যুক্ত হয়
  const sessionCookie = request.cookies.get("better-auth.session_token") || 
                        request.cookies.get("__Secure-better-auth.session_token");

  if (!sessionCookie) {
    const protectedPaths = ["/my-profile", "/my-courses"];
    const isAllCoursesSubPage = pathname.startsWith("/all-courses/");

    if (protectedPaths.includes(pathname) || isAllCoursesSubPage) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-profile", "/my-courses", "/all-courses/:path*"],
};