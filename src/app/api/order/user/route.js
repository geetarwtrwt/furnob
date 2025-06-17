import { orderModel } from "../../../../../lib/model/order";
import { verifyToken } from "../../../../../lib/helper/user";
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
      $or: [{ paymentType: "COD" }, { isPaid: true }] //wahi order aayenge jo cod h ya paid h
        .populate("item.product address") //ye order schema me ref h wo layega
        .sort({ created: -1 }), //ye latest order ko upper se niche sort krega
    });
    return NextResponse.json({ success: true, msg: data });
  } catch (err) {
    return NextResponse.json({ error: true, msg: err.message });
  }
};
