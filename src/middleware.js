import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export let middleware = async (request) => {
  let path = request.nextUrl.pathname;

  let publicPath = path === "/my-account";

  let token = request.cookies.get("token")?.value || "";

  // let admin = false;
  // if (token) {
  //   try {
  //     let data = jwt.verify(token, "token12");
  //     admin = data.isAdmin;
  //   } catch (err) {
  //     console.log(err.message);
  //     admin = false;
  //   }
  // }

  // console.log(admin, new Date().toLocaleTimeString());

  if (publicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (!publicPath && !token) {
    return NextResponse.redirect(new URL("/my-account", request.url));
  }

  // if (admin && !path.startsWith("/admin")) {
  //   return NextResponse.redirect(new URL("/admin", request.url));
  // }

  // if (!admin && path.startsWith("/admin")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // else if (token && admin !== true && path.startsWith("/admin")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/my-account/:path*", "/admin/:path*"],
};
