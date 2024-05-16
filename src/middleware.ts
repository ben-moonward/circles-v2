import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SMARTRE_TOKEN_KEY } from "@/constants/keys";

// 1. Specify protected and public routes
const publicRoutes = ["/signin", "/signup", "/"];

export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);

    // 3. Decrypt the session from the cookie
    const token = cookies().get(SMARTRE_TOKEN_KEY)?.value;

    // 5. Redirect to /login if the user is not authenticated
    if (!isPublicRoute && !token) {
        return NextResponse.redirect(new URL("/signin", req.nextUrl));
    }

    // 6. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        token &&
        !req.nextUrl.pathname.startsWith("/dashboard")
    ) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }

    return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$).*)"],
};
