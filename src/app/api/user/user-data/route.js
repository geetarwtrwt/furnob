import { verifyToken } from "../../../../../lib/helper/user";
import { UserModel } from "../../../../../lib/model/user";
import { NextResponse } from "next/server";
import { connectDb } from "../../../../../lib/config/db";

let loadDb = async () => {
  await connectDb();
};
loadDb();

export let GET = async (request) => {
  try {
    let { id, isAdmin } = await verifyToken(request);
    let data = await UserModel.findById(id).select("-password");
    if (!data) {
      return NextResponse.json({
        success: false,
        msg: "There is no user",
        error: err.message,
      });
    }

    return NextResponse.json({
      success: true,
      msg: { data, isAdmin },
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      msg: "somthing went wrong",
      error: err.message,
    });
  }
};
