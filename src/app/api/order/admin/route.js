import { verifyToken } from "../../../../../lib/helper/user";
import { orderModel } from "../../../../../lib/model/order";
import { connectDb } from "../../../../../lib/config/db";
import { NextResponse } from "next/server";

let loadDb = async () => {
  await connectDb();
};
loadDb();

export let GET = async (request) => {
  try {
    let { id } = await verifyToken(request);
    let data = await orderModel.find({
      id,
      $or: [{ paymentType: "COD" }, { isPaid: true }]
        .populate("item.product address")
        .sort({ created: -1 }),
    });

    return NextResponse.json({ success: true, msg: data });
  } catch (err) {
    return NextResponse.json({ error: true, msg: err.message });
  }
};
