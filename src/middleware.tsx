import {  NextRequest, NextResponse } from "next/server";
export default function AppMiddleware(req: NextRequest) {

	// for skip public route
	// console.log("BHAI TERA MIDDLEWARE MAI HAIN....")
	if (
		req.nextUrl.pathname.startsWith("/login") ||
		req.nextUrl.pathname === "/"
	){
		return NextResponse.next();
	}
	const { cookies } = req;
	const cookieVal = cookies.get("token")?.value;
	if (!cookieVal) {
		return NextResponse.redirect(new URL("/login", req.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.*).*)"],
};
