

import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname, origin } = request.nextUrl;

  try {
    
    const res = await fetch(`${origin}/api/auth/get-session`, {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    });

    const session = await res.json();

    
    if (!session || !session.user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
   
    return NextResponse.next();
  }
}

export const config = {

  matcher: ["/my-profile", "/my-courses", "/all-courses/:path*"],
};