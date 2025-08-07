import { connectDb } from "@/lib/db/db";
import { User } from "@/lib/model/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectDb();
  try {
    const { name, email, password } = await request.json();

    const exist = await User.findOne({ email });
    if (exist)
      return NextResponse.json(
        { error: true, message: "User already exists" },
        { status: 400 }
      );

    await User.create({ name, email, password });

    return NextResponse.json(
      {
        success: true,
        message: "Signup successful",
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: true, message: "Signup failed", error: err.message },
      { status: 500 }
    );
  }
}
