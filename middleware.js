import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { PUBLIC_ROUTES, LOGIN, ROOT} from "@/lib/routes";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isAuthenticated = !!req.auth;

    const isPublicRoute = PUBLIC_ROUTES.some((route) => nextUrl.pathname.startsWith(route)) || nextUrl.pathname === ROOT;

    // ✅ Block logged-in users from visiting login/register pages
  if (isAuthenticated && ["/login", "/register/student", "/register/instructor"].includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/account", nextUrl));
  }


    if (!isAuthenticated && !isPublicRoute) {
        return NextResponse.redirect(new URL(LOGIN,nextUrl));
    }
    return NextResponse.next()

});

export const config = {
    matcher: [
      "/((?!api/auth|_next|favicon.ico|.*\\..*).*)", // Exclude Next.js internal routes and API routes
      "/", // Include the root route
    ],
  };