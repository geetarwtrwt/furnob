import { verifyToken } from "../../../../../lib/helper/user";
import { UserModel } from "../../../../../lib/model/user";
import { NextResponse } from "next/server";
import { connectDb } from "../../../../../lib/config/db";

let loadDb = async () => {
  await connectDb();
};
loadDb();

export let PUT = async (request) => {
  try {
    let { id } = await verifyToken(request);
    let { cartData } = await request.json();
    await UserModel.findByIdAndUpdate(id, { cartData });

    return NextResponse.json({
      success: true,
      msg: cartData,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      msg: "somthing went wrong",
      error: err.message,
    });
  }
};
