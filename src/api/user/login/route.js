import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/lib/model/user";
import connectDb from "@/lib/db/db";

export async function POST(request) {
  try {
    await connectDb();
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return NextResponse.json(
        { error: true, msg: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    const response = NextResponse.json({
      success: true,
      msg: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        cartItem: user.cartItem,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: true, msg: "Login error", error },
      { status: 500 }
    );
  }
}
