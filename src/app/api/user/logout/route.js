import { NextResponse } from "next/server";
import { connectDb } from "../../../../../lib/config/db";

let loadDb = async () => {
  await connectDb();
};
loadDb();

export async function POST(request) {
  try {
    let response = NextResponse.json({
      success: true,
      msg: "Logged out successfully",
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return response;
  } catch (err) {
    return NextResponse.json({ error: true, msg: err.message });
  }
}
