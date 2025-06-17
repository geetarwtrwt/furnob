import { connectDb } from "../../../../../lib/config/db";
import { UserModel, hashPassword } from "../../../../../lib/model/user";
import { NextResponse } from "next/server";

let loadDb = async () => {
  await connectDb();
};
loadDb();

export async function POST(request) {
  try {
    await loadDb();
    let { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({
        success: false,
        msg: "All fields are required",
      });
    }

    let exists = await UserModel.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { success: false, msg: "User already exists" },
        { status: 409 },
      );
    }

    let hashedPassword = await hashPassword(password);
    let data = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      success: true,
      msg: data,
      id: data._id,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      msg: "failed",
      error: err.message,
    });
  }
}
