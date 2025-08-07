import { connectDb } from "@/lib/db/db";
import { User } from "@/lib/model/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectDb();

  try {
    const { email, password } = await request.json();
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return NextResponse.json(
        { error: true, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    let response = NextResponse.json({
      sucess: true,
      message: "Login successful",
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 86400,
    });
    return response;
  } catch (err) {
    return NextResponse.json(
      { error: true, message: "Login failed", error: err.message },
      { status: 500 }
    );
  }
}
