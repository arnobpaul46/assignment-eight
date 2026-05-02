import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // ১. ইউজারের সেশন কুকি আছে কি না তা চেক করা
  // Better Auth ডিফল্টভাবে 'better-auth.session_token' নামে কুকি সেট করে
  const sessionCookie = request.cookies.get("better-auth.session_token");

  // ২. যদি কুকি না থাকে এবং ইউজার প্রটেক্টেড পেজে যাওয়ার চেষ্টা করে
  if (!sessionCookie) {
    // শুধুমাত্র এই ৩টি পেজের জন্য প্রটেকশন
    const protectedPaths = ["/my-profile", "/my-courses"];
    const isAllCoursesSubPage = pathname.startsWith("/all-courses/");

    if (protectedPaths.includes(pathname) || isAllCoursesSubPage) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// ম্যাচার কনফিগারেশন
export const config = {
  matcher: ["/my-profile", "/my-courses", "/all-courses/:path*"],
};