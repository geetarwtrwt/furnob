import { addressModel } from "../../../../../lib/model/address";
import { verifyToken } from "../../../../../lib/helper/user";
import { connectDb } from "../../../../../lib/config/db";
import { NextResponse } from "next/server";

let loadDb = async () => {
  await connectDb();
};
loadDb();
export let POST = async (request) => {
  try {
    let { id } = await verifyToken(request);
    let { address } = await request.json();

    if ({ ...address }) {
      return NextResponse.json({
        success: false,
        msg: "All fields are required",
      });
    }

    let data = await addressModel.create({
      ...address,
      id,
    });
    return NextResponse.json({ success: true, msg: data });
  } catch (err) {
    return NextResponse.json({ error: true, msg: err.message });
  }
};
