import { NextResponse } from "next/server";
import connectDb from "@/lib/db/db";
import User from "@/lib/model/user";

export async function POST(request) {
  try {
    await connectDb();
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: true, msg: "All fields required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: true, msg: "User already exists" },
        { status: 409 }
      );
    }

    const user = await User.create({ name, email, password });
    return NextResponse.json(
      { success: true, msg: "User registered successfully", data: user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, msg: "Error creating user", error },
      { status: 500 }
    );
  }
}
